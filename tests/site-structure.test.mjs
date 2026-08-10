import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

const requiredFiles = [
  "src/app/page.tsx",
  "src/app/work/page.tsx",
  "src/app/work/[slug]/page.tsx",
  "src/app/about/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/not-found.tsx",
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  "src/data/portfolio.ts",
  "CONTENT_NEEDED.md",
];

const projectAssets = [
  "public/images/projects/odoo-commerce-system-map.svg",
  "public/images/projects/configurable-kit-builder.svg",
  "public/images/projects/bigcommerce-acumatica-flow.svg",
  "public/images/projects/acumatica-azure-staging.svg",
];

test("required routes and metadata files exist", () => {
  for (const file of requiredFiles) {
    assert.ok(existsSync(file), `Missing ${file}`);
  }
});

test("each conceptual case-study asset exists and is labeled", () => {
  for (const file of projectAssets) {
    assert.ok(existsSync(file), `Missing ${file}`);
    const source = readFileSync(file, "utf8");
    assert.match(source, /CONCEPTUAL/i, `${file} needs a conceptual label`);
  }
});

test("private phone number is not present in publishable source", () => {
  const source = readFileSync("src/data/portfolio.ts", "utf8");
  assert.doesNotMatch(source, /\+?63\s*985\s*927\s*5380/);
});
