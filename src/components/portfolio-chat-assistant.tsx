"use client";

import {
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import ReactMarkdown from "react-markdown";

import { ChatIcon, CloseIcon, SendIcon, TrashIcon } from "@/components/icons";

type ChatRole = "assistant" | "user";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

type StoredChat = {
  version: number;
  messages: ChatMessage[];
};

const STORAGE_KEY = "ace-portfolio-rag-chat";
const STORAGE_VERSION = 1;
const MAX_STORED_MESSAGES = 25;
const MAX_HISTORY_MESSAGES = 8;
const MAX_API_CONTENT_LENGTH = 500;
const REQUEST_TIMEOUT_MS = 90_000;

const initialGreeting: ChatMessage = {
  id: "initial-greeting",
  role: "assistant",
  content:
    "Hi, I’m Ace’s AI assistant. Ask about Ace’s work, projects, skills, or how to get in touch.",
};

const initialMessages = [initialGreeting];

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") {
    return false;
  }

  const message = value as Partial<ChatMessage>;
  return (
    typeof message.id === "string" &&
    (message.role === "assistant" || message.role === "user") &&
    typeof message.content === "string" &&
    message.content.length > 0
  );
}

function keepRecentMessages(messages: ChatMessage[]) {
  const conversation = messages
    .filter((message) => message.id !== initialGreeting.id)
    .slice(-(MAX_STORED_MESSAGES - 1));

  return [initialGreeting, ...conversation];
}

function getStoredMessages(value: string | null) {
  if (!value) {
    return initialMessages;
  }

  try {
    const stored = JSON.parse(value) as Partial<StoredChat>;
    if (
      stored.version !== STORAGE_VERSION ||
      !Array.isArray(stored.messages) ||
      !stored.messages.every(isChatMessage)
    ) {
      return initialMessages;
    }

    return keepRecentMessages(stored.messages);
  } catch {
    return initialMessages;
  }
}

function createMessageId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function normalizeApiBaseUrl(value: string | undefined) {
  if (!value?.trim()) {
    return null;
  }

  try {
    const url = new URL(value.trim());
    const isLocalHttp =
      url.protocol === "http:" &&
      ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);

    if (url.protocol !== "https:" && !isLocalHttp) {
      return null;
    }

    return url.href.replace(/\/+$/, "");
  } catch {
    return null;
  }
}

function getApiHistory(messages: ChatMessage[], currentMessageId: string) {
  return messages
    .filter(
      (message) =>
        message.id !== initialGreeting.id && message.id !== currentMessageId,
    )
    .slice(-MAX_HISTORY_MESSAGES)
    .map(({ role, content }) => ({
      role,
      content: content.slice(0, MAX_API_CONTENT_LENGTH),
    }));
}

function getSafeLinkHref(href: string | undefined) {
  if (!href) {
    return undefined;
  }

  if (href.startsWith("/") && !href.startsWith("//")) {
    return href;
  }

  try {
    const url = new URL(href);
    return url.protocol === "https:" ? url.href : undefined;
  } catch {
    return undefined;
  }
}

function ChatMessageContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      skipHtml
      components={{
        p: ({ children }) => <p className="mt-2 first:mt-0">{children}</p>,
        ul: ({ children }) => (
          <ul className="mt-2 list-disc space-y-1 pl-5">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="mt-2 list-decimal space-y-1 pl-5">{children}</ol>
        ),
        a: ({ href, children }) => {
          const safeHref = getSafeLinkHref(href);

          return safeHref ? (
            <a
              href={safeHref}
              className="font-semibold text-accent underline decoration-accent/60 underline-offset-2 transition-colors hover:text-ink"
            >
              {children}
            </a>
          ) : (
            <>{children}</>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export function PortfolioChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [failedMessage, setFailedMessage] = useState<ChatMessage | null>(null);
  const [storageReady, setStorageReady] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const conversationRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef(messages);
  const activeRequestRef = useRef<AbortController | null>(null);
  const requestNumberRef = useRef(0);
  const drawerId = useId();

  const hasVisitorMessage = messages.some((message) => message.role === "user");

  useEffect(() => {
    const restoreTimer = window.setTimeout(() => {
      const storedMessages = getStoredMessages(
        window.sessionStorage.getItem(STORAGE_KEY),
      );
      messagesRef.current = storedMessages;
      setMessages(storedMessages);
      setStorageReady(true);
    }, 0);

    return () => window.clearTimeout(restoreTimer);
  }, []);

  useEffect(() => {
    if (!storageReady) {
      return;
    }

    try {
      const storedChat: StoredChat = {
        version: STORAGE_VERSION,
        messages: keepRecentMessages(messages),
      };
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(storedChat));
    } catch {
      // Storage can be unavailable in a privacy-restricted browser session.
    }
  }, [messages, storageReady]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const focusTimer = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDrawer();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) {
        return;
      }

      const focusableElements = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("hidden"));

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    conversationRef.current?.scrollTo({
      top: conversationRef.current.scrollHeight,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [messages, isPending, failedMessage, isOpen]);

  useEffect(() => {
    return () => {
      activeRequestRef.current?.abort();
    };
  }, []);

  function updateMessages(nextMessages: ChatMessage[]) {
    const boundedMessages = keepRecentMessages(nextMessages);
    messagesRef.current = boundedMessages;
    setMessages(boundedMessages);
  }

  function closeDrawer() {
    setIsOpen(false);
    window.requestAnimationFrame(() => launcherRef.current?.focus());
  }

  async function requestAnswer(message: ChatMessage) {
    const requestNumber = requestNumberRef.current + 1;
    requestNumberRef.current = requestNumber;
    const controller = new AbortController();
    const timeout = window.setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT_MS,
    );
    const apiBaseUrl = normalizeApiBaseUrl(
      process.env.NEXT_PUBLIC_RAG_API_BASE_URL,
    );

    activeRequestRef.current?.abort();
    activeRequestRef.current = controller;
    setIsPending(true);
    setFailedMessage(null);

    if (!apiBaseUrl) {
      window.clearTimeout(timeout);
      if (requestNumberRef.current === requestNumber) {
        activeRequestRef.current = null;
        setIsPending(false);
        setFailedMessage(message);
      }
      return;
    }

    try {
      const requestUrl = `${apiBaseUrl}/v1/chat`;
      const response = await fetch(requestUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: message.content,
          history: getApiHistory(messagesRef.current, message.id),
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(
          `The assistant service returned HTTP ${response.status}.`,
        );
      }

      const payload: unknown = await response.json();
      if (
        !payload ||
        typeof payload !== "object" ||
        typeof (payload as { answer?: unknown }).answer !== "string" ||
        !(payload as { answer: string }).answer.trim()
      ) {
        throw new Error("The assistant service returned an invalid response.");
      }

      if (requestNumberRef.current !== requestNumber) {
        return;
      }

      updateMessages([
        ...messagesRef.current,
        {
          id: createMessageId(),
          role: "assistant",
          content: (payload as { answer: string }).answer,
        },
      ]);
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        const diagnostic =
          error instanceof Error ? error.message : String(error);
        console.error(
          `Portfolio chat request failed for ${apiBaseUrl}/v1/chat: ${diagnostic}`,
        );
      }

      if (requestNumberRef.current === requestNumber) {
        setFailedMessage(message);
      }
    } finally {
      window.clearTimeout(timeout);
      if (requestNumberRef.current === requestNumber) {
        activeRequestRef.current = null;
        setIsPending(false);
      }
    }
  }

  function sendMessage(content: string) {
    const messageContent = content.trim().slice(0, MAX_API_CONTENT_LENGTH);
    if (!messageContent || isPending) {
      return;
    }

    const message: ChatMessage = {
      id: createMessageId(),
      role: "user",
      content: messageContent,
    };

    updateMessages([...messagesRef.current, message]);
    setInput("");
    void requestAnswer(message);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  function handleInputKeyDown(event: ReactKeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(input);
    }
  }

  function retryFailedMessage() {
    if (failedMessage && !isPending) {
      void requestAnswer(failedMessage);
    }
  }

  function clearChat() {
    requestNumberRef.current += 1;
    activeRequestRef.current?.abort();
    activeRequestRef.current = null;
    setIsPending(false);
    setFailedMessage(null);
    setInput("");
    messagesRef.current = initialMessages;
    setMessages(initialMessages);

    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // The greeting remains available even if session storage is unavailable.
    }

    window.requestAnimationFrame(() => inputRef.current?.focus());
  }

  return (
    <div className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-[60] sm:right-6 sm:bottom-[calc(1.5rem+env(safe-area-inset-bottom))]">
      {isOpen ? (
        <section
          ref={drawerRef}
          id={drawerId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${drawerId}-title`}
          className="fixed right-3 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] left-3 flex h-[min(42rem,calc(100dvh-7.25rem-env(safe-area-inset-bottom)))] flex-col overflow-hidden rounded-[1.5rem] border border-ink/15 bg-paper-raised shadow-[0_24px_70px_rgba(0,0,0,0.48)] sm:right-6 sm:bottom-[5.25rem] sm:left-auto sm:w-[25rem] sm:max-w-[calc(100vw-3rem)]"
        >
          <header className="flex items-center justify-between border-b border-ink/15 px-4 py-3.5">
            <div>
              <h2
                id={`${drawerId}-title`}
                className="text-sm font-semibold tracking-[-0.02em]"
              >
                Ask Ace&apos;s assistant
              </h2>
              <p className="mt-0.5 text-xs text-muted">
                Portfolio questions, grounded answers
              </p>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={clearChat}
                className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-ink/10 hover:text-ink"
                aria-label="Clear chat"
                title="Clear chat"
              >
                <TrashIcon className="size-4" />
              </button>
              <button
                type="button"
                onClick={closeDrawer}
                className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-ink/10 hover:text-ink"
                aria-label="Close assistant"
              >
                <CloseIcon className="size-5" />
              </button>
            </div>
          </header>

          <div
            ref={conversationRef}
            className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4 text-sm leading-6"
            aria-live="polite"
            aria-relevant="additions text"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-[88%] rounded-2xl rounded-br-sm bg-accent px-3.5 py-2.5 text-paper"
                    : "mr-auto max-w-[92%] rounded-2xl rounded-bl-sm border border-ink/15 bg-paper px-3.5 py-2.5 text-ink"
                }
              >
                {message.role === "assistant" ? (
                  <ChatMessageContent content={message.content} />
                ) : (
                  <p className="whitespace-pre-wrap">{message.content}</p>
                )}
              </div>
            ))}

            {!hasVisitorMessage ? (
              <p className="rounded-xl border border-accent/25 bg-accent/5 px-3 py-2.5 text-xs leading-5 text-muted">
                Free hosted demo: if the assistant has been inactive, the first
                reply may take up to a minute while it wakes up.
              </p>
            ) : null}

            {isPending ? (
              <p
                role="status"
                className="rounded-xl bg-ink/8 px-3 py-2.5 text-xs leading-5 text-muted"
              >
                Waking up the assistant… this can take up to a minute. Please
                keep this window open.
              </p>
            ) : null}

            {failedMessage && !isPending ? (
              <div
                role="status"
                className="rounded-xl border border-ink/15 bg-ink/5 px-3 py-2.5 text-xs leading-5 text-muted"
              >
                <p>
                  I couldn&apos;t reach the assistant. Please check your
                  connection and try again.
                </p>
                <button
                  type="button"
                  onClick={retryFailedMessage}
                  className="mt-2 font-semibold text-accent underline decoration-accent/60 underline-offset-2 hover:text-ink"
                >
                  Retry message
                </button>
              </div>
            ) : null}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-ink/15 p-3">
            <label htmlFor={`${drawerId}-input`} className="sr-only">
              Ask a question about Ace&apos;s portfolio
            </label>
            <div className="flex items-end gap-2 rounded-2xl border border-ink/20 bg-paper px-3 py-2 focus-within:border-accent">
              <textarea
                ref={inputRef}
                id={`${drawerId}-input`}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleInputKeyDown}
                rows={1}
                maxLength={MAX_API_CONTENT_LENGTH}
                placeholder="Ask about Ace’s work…"
                className="chat-composer-input max-h-28 min-h-6 flex-1 resize-none bg-transparent py-1 text-sm leading-5 text-ink outline-none placeholder:text-muted/80 disabled:cursor-not-allowed"
                disabled={isPending}
              />
              <button
                type="submit"
                disabled={isPending || !input.trim()}
                className="grid size-9 shrink-0 place-items-center rounded-full bg-accent text-paper transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transform-none"
                aria-label="Send message"
              >
                <SendIcon className="size-4" />
              </button>
            </div>
            <p className="mt-2 px-1 text-[0.68rem] leading-4 text-muted">
              Press Enter to send. Shift + Enter adds a line.
            </p>
          </form>
        </section>
      ) : null}

      <button
        ref={launcherRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={drawerId}
        aria-label={isOpen ? "Close Ace’s assistant" : "Open Ace’s assistant"}
        onClick={() => (isOpen ? closeDrawer() : setIsOpen(true))}
        className="ml-auto flex min-h-12 items-center gap-2 rounded-full border border-accent/70 bg-accent px-4 text-sm font-semibold text-paper shadow-[0_12px_32px_rgba(0,0,0,0.34)] transition-transform hover:-translate-y-0.5 motion-reduce:transform-none"
      >
        <ChatIcon className="size-5" />
        <span>Ask Ace</span>
      </button>
    </div>
  );
}
