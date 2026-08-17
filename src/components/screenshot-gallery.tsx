"use client";

import Image from "next/image";
import {
  type KeyboardEvent,
  type PointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import type { ProjectVisual } from "@/data/portfolio";

const focusableSelector = [
  "button:not([disabled])",
  "[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function ScreenshotGallery({
  visuals,
}: {
  visuals: readonly ProjectVisual[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const focusReturnRef = useRef<HTMLElement | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const swipeHandledRef = useRef(false);

  const activeVisual = visuals[activeIndex];
  const isPortrait = activeVisual.height > activeVisual.width;

  const moveBy = (offset: number) => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex + offset + visuals.length) % visuals.length,
    );
  };

  const openLightbox = () => {
    if (swipeHandledRef.current) {
      swipeHandledRef.current = false;
      return;
    }

    focusReturnRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isLightboxOpen && !dialog.open) {
      dialog.showModal();
      window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    }

    if (!isLightboxOpen && dialog.open) {
      dialog.close();
    }
  }, [isLightboxOpen]);

  const handleDialogClose = () => {
    setIsLightboxOpen(false);
    focusReturnRef.current?.focus();
  };

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeLightbox();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    const focusableElements = Array.from(
      dialog.querySelectorAll<HTMLElement>(focusableSelector),
    ).filter((element) => !element.hasAttribute("disabled"));

    if (focusableElements.length === 0) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements.at(-1);

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement?.focus();
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  const handleGalleryKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveBy(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveBy(1);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    touchStartXRef.current = event.clientX;
    swipeHandledRef.current = false;
  };

  const handlePointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    if (touchStartXRef.current === null) {
      return;
    }

    const distance = event.clientX - touchStartXRef.current;
    touchStartXRef.current = null;

    if (Math.abs(distance) < 48) {
      return;
    }

    swipeHandledRef.current = true;
    moveBy(distance > 0 ? -1 : 1);
  };

  return (
    <section
      aria-label="Screenshot gallery viewer"
      className="mt-12"
      onKeyDown={handleGalleryKeyDown}
      tabIndex={0}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-y border-ink/10 py-4">
        <p className="text-sm font-semibold" aria-live="polite">
          Screenshot {activeIndex + 1} of {visuals.length}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => moveBy(-1)}
            className="inline-flex min-h-11 items-center rounded-full border border-ink/20 px-4 text-sm font-semibold transition-colors hover:border-accent hover:text-accent focus-visible:outline-offset-2 motion-reduce:transition-none"
            aria-label="Show previous screenshot"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => moveBy(1)}
            className="inline-flex min-h-11 items-center rounded-full bg-accent px-4 text-sm font-semibold text-paper transition-colors hover:bg-[#4ee5db] hover:text-paper focus-visible:outline-offset-2 motion-reduce:transition-none"
            aria-label="Show next screenshot"
          >
            Next
          </button>
        </div>
      </div>

      <figure className="mt-6">
        <button
          type="button"
          onClick={openLightbox}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            touchStartXRef.current = null;
          }}
          className={`group relative block w-full overflow-hidden rounded-[1.15rem] border border-ink/15 bg-[#15191d] shadow-[0_18px_50px_rgba(0,0,0,0.36)] focus-visible:outline-offset-4 sm:rounded-[1.5rem] ${
            isPortrait ? "mx-auto max-w-[27rem]" : ""
          }`}
          style={{
            aspectRatio: `${activeVisual.width} / ${activeVisual.height}`,
            touchAction: "pan-y",
          }}
          aria-label={`Open full-screen view of screenshot ${activeIndex + 1}: ${activeVisual.alt}`}
        >
          <Image
            src={activeVisual.src}
            alt={activeVisual.alt}
            width={activeVisual.width}
            height={activeVisual.height}
            priority={activeIndex === 0}
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 78vw, 960px"
            className="size-full object-contain"
          />
          <span className="absolute right-4 bottom-4 rounded-full bg-[#050607]/90 px-3 py-2 text-xs font-semibold text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
            View full screen
          </span>
        </button>
        <figcaption className="mt-4 max-w-3xl text-sm leading-6 text-muted">
          {activeVisual.caption}
        </figcaption>
      </figure>

      <ol
        className="mt-7 flex gap-3 overflow-x-auto pb-3"
        aria-label="Choose a screenshot"
      >
        {visuals.map((visual, index) => {
          const isActive = index === activeIndex;

          return (
            <li key={visual.src} className="shrink-0">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative block w-28 overflow-hidden rounded-lg border bg-[#dfe3ea] focus-visible:outline-offset-3 sm:w-32 ${
                  isActive
                    ? "border-accent ring-2 ring-accent ring-offset-2 ring-offset-paper"
                    : "border-ink/15 opacity-70 transition-opacity hover:border-accent hover:opacity-100 motion-reduce:transition-none"
                }`}
                style={{ aspectRatio: `${visual.width} / ${visual.height}` }}
                aria-label={`Show screenshot ${index + 1}: ${visual.caption}`}
                aria-pressed={isActive}
              >
                <Image
                  src={visual.src}
                  alt=""
                  width={visual.width}
                  height={visual.height}
                  unoptimized
                  sizes="128px"
                  className="size-full object-cover"
                />
                <span className="absolute top-2 left-2 rounded-full bg-[#050607]/85 px-2 py-1 text-[0.65rem] font-bold text-ink">
                  {index + 1}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <dialog
        ref={dialogRef}
        aria-labelledby="screenshot-lightbox-title"
        aria-modal="true"
        className="fixed inset-0 z-[100] m-0 h-dvh max-h-none w-full max-w-none border-0 bg-[#050607]/95 p-4 text-ink backdrop:bg-[#050607]/55 sm:p-8"
        onCancel={(event) => {
          event.preventDefault();
          closeLightbox();
        }}
        onClose={handleDialogClose}
        onKeyDown={handleDialogKeyDown}
      >
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col">
          <div className="flex items-center justify-between gap-4">
            <p id="screenshot-lightbox-title" className="text-sm font-semibold">
              Screenshot {activeIndex + 1} of {visuals.length}
            </p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              className="inline-flex min-h-11 items-center rounded-full border border-ink/30 px-4 text-sm font-semibold transition-colors hover:border-accent hover:text-accent focus-visible:outline-accent motion-reduce:transition-none"
            >
              Close
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center py-5">
            <div
              className={`relative max-h-full overflow-hidden rounded-xl bg-black/30 ${
                isPortrait ? "h-full max-w-full" : "w-full"
              }`}
              style={{
                aspectRatio: `${activeVisual.width} / ${activeVisual.height}`,
              }}
            >
              <Image
                src={activeVisual.src}
                alt={activeVisual.alt}
                width={activeVisual.width}
                height={activeVisual.height}
                unoptimized
                sizes="(max-width: 768px) 100vw, 1100px"
                className="size-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-ink/20 pt-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-3xl text-sm leading-6 text-muted">
              {activeVisual.caption}
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => moveBy(-1)}
                className="inline-flex min-h-11 items-center rounded-full border border-ink/30 px-4 text-sm font-semibold transition-colors hover:border-accent hover:text-accent focus-visible:outline-accent motion-reduce:transition-none"
                aria-label="Show previous screenshot"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => moveBy(1)}
                className="inline-flex min-h-11 items-center rounded-full bg-accent px-4 text-sm font-semibold text-paper transition-colors hover:bg-[#4ee5db] hover:text-paper focus-visible:outline-accent motion-reduce:transition-none"
                aria-label="Show next screenshot"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
}
