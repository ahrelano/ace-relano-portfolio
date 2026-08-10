# Content needed before final public launch

The site is complete and deployable with privacy-safe copy and conceptual visuals. The items below are intentionally not guessed. Search for `NEEDS_USER_INPUT` or `TODO` when reviewing future content changes.

## Required launch follow-ups

- **NEEDS_USER_INPUT — Final public URL:** Deploy the site, then replace `portfolio.site.url` in `src/data/portfolio.ts` with the exact assigned `vercel.app` URL (or approved custom domain). This updates canonical URLs, the sitemap, robots metadata, Open Graph URLs, and JSON-LD from one place.
- **NEEDS_USER_INPUT — Privacy-reviewed résumé:** The supplied `Ace-Heart-Relano-Resume.docx` contains a private phone number and is intentionally excluded by `.gitignore`. Provide an approved public PDF with the phone number and any other private details removed. Add it as `public/ace-relano-resume.pdf`, then set `profile.resume.available` to `true` and `profile.resume.href` to `/ace-relano-resume.pdf` in `src/data/portfolio.ts`.
- **NEEDS_USER_INPUT — Project status:** Confirm whether each case study is completed production work, an implementation in progress, a prototype, a demonstration, or an evaluation. The current data uses explicit “public status to confirm” language and makes no completion claim.
- **NEEDS_USER_INPUT — Approved outcomes:** Supply any qualitative outcomes or metrics that may be published for each case study, including the source and approved wording. The current case studies intentionally claim no measurable improvement, production result, or client outcome.

## Recommended content upgrades

- **TODO — Approved project screenshots:** Four original conceptual SVGs are currently used. Replace them only with privacy-reviewed assets containing no customer data, credentials, internal URLs, infrastructure values, or proprietary details. Each image path, alt text, dimensions, and caption lives in the relevant project’s `visuals` array in `src/data/portfolio.ts`; layout components need no edits.
- **TODO — Professional photo:** No profile photo was supplied. The site uses an original typographic `AR` mark instead. If desired, add an approved portrait under `public/images/profile/` and add its data to `src/data/portfolio.ts` before placing it in a component.
- **TODO — Case-study chronology and attribution:** Add approved dates, employer/client attribution, and Ace’s exact project title only if those details may be published. The current case studies avoid client names and project dates.
- **TODO — Availability statement:** `profile.availability` is intentionally `null`. Add wording only if Ace wants a public availability or engagement statement.

## Already sourced and currently published

The following information comes from the supplied résumé or the explicit implementation brief: Ace’s name, broad location, public contact email, LinkedIn and GitHub links, education, work-history roles/organizations/dates, professional positioning, capability themes, and the approved qualitative scope of the four case studies. The phone number from the résumé is not published.
