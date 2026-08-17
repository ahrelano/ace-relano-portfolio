# Portfolio Repository Instructions

## Project goal

Build and maintain Ace Relano's public portfolio: a fast, polished, recruiter-friendly website that presents him as an e-commerce and ERP developer and technical project lead. The site must be easy to maintain in GitHub and deploy on Vercel's free tier.

The visual direction may be inspired by the structure and editorial polish of ResumeQ, but the implementation must be original. Do not copy proprietary source code, text, illustrations, branding, or a distinctive page pixel-for-pixel.

## Working approach

- Inspect the repository and existing instructions before editing.
- Preserve good existing work and avoid unrelated rewrites.
- For a large change, state a short plan, then implement it. Do not stop after planning unless a missing decision would materially change the result.
- Ask questions in one compact batch only when truly blocked. Otherwise, use clearly labeled placeholders in the central content file and continue.
- Never invent employment dates, metrics, client claims, certifications, contact details, or project outcomes.
- Never expose client secrets, credentials, internal URLs, private screenshots, customer data, infrastructure details, or proprietary source code.
- Do not commit, push, create a remote repository, or deploy unless the user explicitly asks. You may prepare and document those steps.

## Preferred stack

- Next.js App Router with TypeScript.
- Tailwind CSS for styling.
- npm and the committed `package-lock.json`.
- React Server Components by default. Add client components only where interaction requires them.
- `next/font` for fonts and `next/image` for raster images.
- Static or statically generated pages wherever possible.
- Avoid unnecessary dependencies, UI kits, databases, authentication, analytics, CMS products, and paid services.
- If animation needs a library, justify it first; prefer lightweight CSS transitions and respect reduced-motion preferences.

If the repository already uses a coherent equivalent stack, do not replace it merely to match these preferences.

## Architecture and content

- Keep résumé and portfolio content in one typed source of truth, such as `src/data/portfolio.ts`.
- Keep reusable UI in `src/components/` and routes in `src/app/`.
- Store public assets in `public/` with descriptive filenames.
- Represent projects as structured data and generate project detail routes from stable slugs.
- A content correction should not require editing layout components.
- Mark unknown content clearly with `TODO` or `NEEDS_USER_INPUT`; do not scatter placeholders across components.
- Use generic client descriptions unless public naming has been explicitly approved.
- If screenshots are missing, use tasteful local placeholder panels or diagrams, not unrelated stock photos.

## Writing and punctuation

- Do not use em dashes (`—`) in any user-visible website text, including headings, body copy, case studies, buttons, navigation labels, metadata, and image captions.
- Write naturally instead: use a comma, colon, parentheses, or a new sentence, depending on the meaning.
- Use a standard hyphen (`-`) only where grammatically correct, such as compound modifiers (`employer-focused`) or short UI labels. Do not use a hyphen as a generic substitute for an em dash in prose.
- Before finishing a content-related task, search the portfolio source for em dashes and remove any that appear in user-visible text.

## Design principles

- Premium editorial résumé aesthetic: warm off-white surfaces, near-black text, one restrained blue accent, strong typography, generous whitespace, thin borders, subtle shadows, and restrained motion.
- Original implementation inspired by ResumeQ's information hierarchy, not a clone.
- Lead with business impact and case studies, not a wall of technology logos.
- Make the visual hierarchy obvious within a few seconds: identity, role, value proposition, featured work, experience, capabilities, and contact.
- Use real interface screenshots only when safe to publish and readable at the displayed size.
- Avoid excessive gradients, glowing effects, 3D decoration, skill-percentage bars, auto-playing media, custom cursors, and long intro animations.
- Ensure the site remains polished at approximately 360 px, 768 px, 1024 px, and 1440 px widths.

## Required experience

The site should support these routes and sections unless the current task narrows the scope:

- Home: hero, concise introduction, featured case studies, experience summary, grouped capabilities, selected achievements/learning, and contact call-to-action.
- Work index: filter-free, accessible project overview.
- Case-study pages: overview, business problem, role, constraints, approach, implementation highlights, outcome/status, technology, and safe visuals.
- About/experience: career narrative and résumé-style timeline.
- Contact: email and approved social links; prefer a `mailto:` action over a backend form.
- Custom not-found page.

Primary case-study subjects:

1. Odoo 18 e-commerce and ERP implementation.
2. Configurable kits and advanced pricing system.
3. BigCommerce-Acumatica integration.
4. Acumatica Azure staging environment.

Do not fabricate measurable results. Describe work in accurate qualitative terms until the user supplies approved metrics.

## Quality requirements

- Use semantic HTML, logical heading order, visible keyboard focus, skip navigation, descriptive links, useful alt text, and accessible color contrast.
- All functionality must be usable with keyboard only.
- Respect `prefers-reduced-motion`.
- Avoid hydration errors, layout shifts, horizontal overflow, and console errors.
- Keep the JavaScript payload modest; do not turn static content into client-side state.
- Add complete metadata: title template, description, canonical base configuration, Open Graph/Twitter cards, favicon, robots, sitemap, and Person/Portfolio JSON-LD where accurate.
- Do not publish a phone number, home address, private email, or confidential employer/client information without explicit approval.
- Never add secrets to source control. Provide `.env.example` only if environment variables become genuinely necessary.
- Keep the app compatible with a standard Vercel deployment from GitHub without paid features.

## Verification

Before declaring work complete:

1. Run the formatter if configured.
2. Run `npm run lint` when available.
3. Run type checking through the project script, or `npx tsc --noEmit` when appropriate.
4. Run relevant tests when present.
5. Run `npm run build`; this is the release gate.
6. Inspect the principal pages at mobile and desktop sizes when browser tooling is available.
7. Check keyboard navigation, reduced motion, broken links, missing images, overflow, metadata, and the browser console.
8. Review the final diff for accidental private data, generated build output, secrets, and unrelated changes.

Do not claim a check passed unless it was actually run. Report skipped or blocked checks clearly.

## Git and handoff

- Keep generated output such as `.next/`, coverage, logs, local environment files, and Vercel state out of Git.
- Keep commits focused and use concise conventional messages when the user requests a commit.
- Update `README.md` with local setup, content-editing locations, asset guidance, verification commands, GitHub publishing, and Vercel deployment.
- Finish each implementation with: what changed, files or areas to review, checks run and results, remaining placeholders, and the exact next action for the user.
