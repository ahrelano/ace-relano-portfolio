# Ace Relano Portfolio

A production-ready editorial portfolio for Ace Relano, positioning him as an e-commerce and ERP developer and technical project lead. The site focuses on business problems, system decisions, implementation scope, validation, and honest project status rather than a technology-logo wall.

The design is an original warm, typography-led system informed by premium résumé and editorial portfolio conventions. It does not reuse ResumeQ source code, copy, branding, illustrations, or template assets.

## Technology stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- `next/font` using Manrope and Cormorant Garamond
- Static generation for all portfolio and case-study pages
- npm with a committed `package-lock.json`

There is no database, authentication, CMS, analytics, contact backend, or required environment variable. The project is compatible with GitHub and Vercel’s free Hobby plan.

## Architecture

```text
src/
├── app/
│   ├── work/[slug]/       # Statically generated case studies
│   ├── about/             # Career story and full experience timeline
│   ├── contact/           # Direct mailto and approved social links
│   ├── layout.tsx         # Global metadata, navigation, footer, JSON-LD
│   ├── page.tsx           # Homepage
│   ├── not-found.tsx      # Custom 404
│   ├── robots.ts          # robots.txt
│   ├── sitemap.ts         # sitemap.xml
│   └── opengraph-image.tsx
├── components/            # Reusable server components
└── data/portfolio.ts      # Typed source of truth for all public content

public/images/projects/    # Replaceable conceptual project visuals
tests/                     # Privacy and route/asset structure checks
CONTENT_NEEDED.md          # Facts and approvals still needed
```

React Server Components are used by default. The mobile navigation uses native HTML `<details>` behavior, so no client component or menu JavaScript is required.

## Prerequisites

- Node.js 20.9 or newer
- npm 10 or newer
- Git, when publishing to GitHub

Verify your versions:

```bash
node --version
npm --version
```

## Install and run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production preview:

```bash
npm run build
npm run start
```

## Verification commands

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
```

Use `npm run format` to apply the configured formatter.

## Edit portfolio content

All résumé and portfolio content is centralized in:

```text
src/data/portfolio.ts
```

Edit the profile, navigation, contact links, experience, capabilities, education, case studies, and SEO values there. Avoid adding content directly to layout components. Unknown or unapproved facts should remain marked with `TODO` or `NEEDS_USER_INPUT` and documented in `CONTENT_NEEDED.md`.

### Add or update a project

1. Open `src/data/portfolio.ts`.
2. Add or edit an item in `portfolio.projects`.
3. Keep the `slug` stable after publication because it determines the public URL.
4. Complete every structured field: problem, role, responsibilities, constraints, approach, decisions, implementation, validation, outcome/status, technologies, and visuals.
5. Add privacy-safe images under `public/images/projects/`.
6. Reference each asset in the project’s `visuals` array with its public path, dimensions, useful alt text, and caption.
7. Run all verification commands. `generateStaticParams()` creates the route automatically.

### Replace the profile photo

No photo is currently published; the interface uses the `AR` typographic mark. To add one:

1. Confirm that the image is approved for public use.
2. Crop and export a web-optimized image (WebP preferred) at least 1200 px on the long edge.
3. Store it under `public/images/profile/` with a descriptive filename.
4. Add the path, dimensions, and alt text to the profile data in `src/data/portfolio.ts`.
5. Render it with `next/image` in the desired component.

Do not publish a photo that reveals badges, private documents, customer information, internal screens, or location details.

### Add project screenshots

1. Remove or obscure customer names, order details, contact information, credentials, internal URLs, database values, and private infrastructure details.
2. Confirm that public use is approved.
3. Export readable WebP or PNG assets at an appropriate size.
4. Store them in `public/images/projects/`.
5. Change only the relevant project’s `visuals` data in `src/data/portfolio.ts`.

The existing SVG files are explicitly labeled conceptual and use fictional data.

### Replace the résumé

The supplied source résumé contains a phone number and is excluded from Git by `.gitignore`. To enable the navigation item:

1. Create a privacy-reviewed public PDF with all private details removed.
2. Set `profile.resume.href` in `src/data/portfolio.ts` to the approved public resume URL.
3. Resume links in the header and About page use that single value and open it in a new tab.
4. Test the automatically enabled download from the deployed site.

### Update the social sharing image

The Open Graph/Twitter image is generated locally by `src/app/opengraph-image.tsx` using `ImageResponse`. Edit that component to change the visual, and update the root metadata in `src/app/layout.tsx` only if the route or dimensions change.

## Canonical URL after deployment

Before sharing the site publicly, update `portfolio.site.url` in `src/data/portfolio.ts` with the exact Vercel URL. That one value is used by metadata, Open Graph, JSON-LD, robots, and the sitemap.

## Publish to GitHub

The directory is not initialized as a Git repository yet. Create the first local commit only after reviewing the files:

```bash
git init
git add .
git status
git commit -m "feat: build portfolio website"
```

After creating an empty GitHub repository with no generated README, license, or `.gitignore`, connect and push it:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

If you use SSH, replace the remote URL with `git@github.com:YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git`.

Every later update follows the usual flow:

```bash
git add .
git commit -m "content: update portfolio"
git push
```

## Deploy on Vercel using Import Git Repository

1. Sign in to [Vercel](https://vercel.com/) with the GitHub account that can access the repository.
2. Select **Add New… → Project**.
3. Under **Import Git Repository**, locate the portfolio repository and select **Import**.
4. Keep **Framework Preset** set to **Next.js**.
5. Keep the root directory as the repository root.
6. Do not add environment variables; this implementation does not require any.
7. Select **Deploy**.
8. After the build finishes, open the assigned `https://…vercel.app` address.
9. Copy that exact URL into `portfolio.site.url` in `src/data/portfolio.ts`, commit the change, and push it.
10. Vercel detects the GitHub push and automatically creates a new production deployment. Future pushes to the production branch redeploy the site the same way.

## Optional custom domain

The free `vercel.app` address works without buying or configuring a domain. A custom domain is optional:

1. Open the Vercel project.
2. Go to **Settings → Domains**.
3. Add a domain you own.
4. Follow Vercel’s DNS instructions at your domain registrar.
5. After Vercel reports the domain as valid, update `portfolio.site.url` to the final `https://` custom domain and push the change.

Domain registration itself is separate from Vercel’s free hosting.

## Privacy notes

- The phone number in the source résumé is not published.
- Case studies use generic descriptions and do not expose client secrets.
- Conceptual visuals contain fictional values and no real endpoints or identifiers.
- Do not commit `.env` files, Vercel state, screenshots under review, or the private source résumé.
- Review `CONTENT_NEEDED.md` before launch and after every major content update.
