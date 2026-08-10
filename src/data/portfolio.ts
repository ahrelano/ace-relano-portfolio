export type NavItem = {
  label: string;
  href: string | null;
  disabled?: boolean;
  resume?: boolean;
};

export type ResumeConfig = {
  available: boolean;
  href: string | null;
  note: string;
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Experience = {
  role: string;
  organization: string;
  location: string;
  period: string;
  summary: string;
  highlights: readonly string[];
};

export type CapabilityGroup = {
  title: string;
  description: string;
  items: readonly string[];
};

export type LearningItem = {
  title: string;
  institution: string;
  period: string;
  description: string;
};

export type ProjectVisual = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  stage: string;
  summary: string;
  businessProblem: string;
  role: string;
  responsibilities: readonly string[];
  constraints: readonly string[];
  approach: readonly string[];
  decisions: readonly { title: string; detail: string }[];
  implementation: readonly string[];
  validation: readonly string[];
  outcome: string;
  technologies: readonly string[];
  visuals: readonly ProjectVisual[];
  featured: boolean;
};

const resumeConfig: ResumeConfig = {
  available: false,
  href: null,
  note: "Public résumé pending a privacy-reviewed file.",
};

export const portfolio = {
  site: {
    name: "Ace Relano — E-commerce & ERP Developer",
    shortName: "Ace Relano",
    // NEEDS_USER_INPUT: Replace with the final Vercel or custom-domain URL after deployment.
    url: "https://ace-relano-portfolio.vercel.app",
    description:
      "Portfolio of Ace Relano, an e-commerce and ERP developer and technical project lead working across configurable products, complex pricing, integrations, and cloud infrastructure.",
    locale: "en_PH",
  },
  profile: {
    name: "Ace Heart Relano",
    displayName: "Ace Relano",
    initials: "AR",
    role: "E-commerce & ERP Developer / Technical Project Lead",
    headline:
      "I build and lead e-commerce systems involving complex pricing, configurable products, ERP integrations, and cloud infrastructure.",
    introduction:
      "I work where storefront behavior, business rules, and operational systems meet—turning ambiguous requirements into practical, testable implementation plans.",
    story:
      "My background spans software development, e-commerce delivery, visual design, and customer-facing problem solving. That mix helps me investigate technical detail without losing sight of the people and business processes the system needs to support.",
    location: "Pampanga, Philippines",
    email: "relano.aceheart@gmail.com",
    availability: null,
    resume: resumeConfig,
  },
  navigation: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Résumé", href: null, resume: true },
    { label: "Contact", href: "/contact" },
  ] satisfies readonly NavItem[],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ace-heart-relano-a52311139/",
      handle: "ace-heart-relano",
    },
    {
      label: "GitHub",
      href: "https://github.com/ahrelano",
      handle: "@ahrelano",
    },
  ] satisfies readonly SocialLink[],
  experience: [
    {
      role: "Web Developer",
      organization: "Racetronix",
      location: "Remote · Ontario, Canada",
      period: "Jan 2021 — Present",
      summary:
        "Builds and maintains the company’s e-commerce experience while coordinating content, layout, testing, and day-to-day technical problem solving.",
      highlights: [
        "Moved and rebuilt the company website on BigCommerce.",
        "Writes HTML, CSS, and JavaScript to design and update web pages.",
        "Tests across devices and browsers, investigates bugs, and coordinates updates with other teams.",
      ],
    },
    {
      role: "Graphic Artist",
      organization: "CV Services Group (Shore 360)",
      location: "Pampanga, Philippines",
      period: "Jun 2020 — Jan 2021",
      summary:
        "Produced accurate sign visualizations and managed production-ready design assets.",
      highlights: [
        "Edited sign photography and prepared realistic client mockups.",
        "Selected typography, checked production accuracy, and organized digital files.",
      ],
    },
    {
      role: "Graphic Artist",
      organization: "Office Beacon Philippines Inc",
      location: "Pampanga, Philippines",
      period: "Apr 2018 — Jun 2020",
      summary:
        "Created vector graphics and product mockups with an emphasis on visual consistency and organized delivery.",
      highlights: [
        "Converted photos and drawings into high-quality vector graphics.",
        "Prepared presentation mockups and maintained digital design assets.",
      ],
    },
    {
      role: "Customer Service Representative",
      organization: "Sutherland",
      location: "Pampanga, Philippines",
      period: "Oct 2017 — Apr 2018",
      summary:
        "Supported Microsoft customers across phone and chat, combining troubleshooting with accurate transaction handling.",
      highlights: [
        "Troubleshot software and hardware issues for Microsoft products.",
        "Handled order processing, tracking, and transaction records.",
      ],
    },
    {
      role: "Associate Software Engineer Trainee",
      organization: "Cloudstaff",
      location: "Pampanga, Philippines",
      period: "Nov 2016 — Mar 2017",
      summary:
        "Contributed code, testing, and cross-team coordination for an HR web application in an Agile workflow.",
      highlights: [
        "Fixed bugs and added features to an HR website.",
        "Worked with QA and project teams on testing, deployment readiness, and software design.",
      ],
    },
  ] satisfies readonly Experience[],
  capabilities: [
    {
      title: "E-commerce",
      description:
        "Storefront behavior that stays aligned with operational rules.",
      items: [
        "BigCommerce",
        "Stencil customization",
        "Configurable products",
        "Cart behavior",
        "Pricing hierarchies",
        "Quantity discounts",
      ],
    },
    {
      title: "ERP systems",
      description:
        "Practical implementation work across commerce and back-office workflows.",
      items: [
        "Odoo 18 Community",
        "Custom modules",
        "Acumatica 2022 R2",
        "Sales orders",
        "Inventory validation",
        "Migration evaluation",
      ],
    },
    {
      title: "Development",
      description:
        "Readable implementation across the browser, server, and system boundary.",
      items: [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "Python",
        "HTML & CSS",
      ],
    },
    {
      title: "Integrations & APIs",
      description:
        "Research and delivery for systems that need a reliable shared contract.",
      items: [
        "REST APIs",
        "Webhooks",
        "JSON",
        "Pricing synchronization",
        "Customer classes",
        "Technical evaluation",
      ],
    },
    {
      title: "Cloud & infrastructure",
      description:
        "Repeatable environments for implementation, staging, and handoff.",
      items: ["Azure", "Docker", "IIS", "SQL Server", "GitHub", "Vercel"],
    },
    {
      title: "Testing & delivery",
      description:
        "Clear acceptance paths, risk communication, and coordinated execution.",
      items: [
        "Automated testing",
        "Cross-browser QA",
        "Requirements analysis",
        "Technical leadership",
        "Stakeholder communication",
        "Delivery planning",
      ],
    },
    {
      title: "AI-assisted engineering",
      description:
        "Responsible use of AI to support research and development—not replace judgment.",
      items: [
        "Advanced prompting",
        "RAG fundamentals",
        "Frontier LLMs",
        "LangChain",
        "Chroma",
        "Human review",
      ],
    },
  ] satisfies readonly CapabilityGroup[],
  learning: [
    {
      title: "Bachelor of Science in Information Technology",
      institution: "Don Honorio Ventura State University",
      period: "2013 — 2017",
      description:
        "Foundation in software development, information systems, and technology practice.",
    },
    {
      title: "AI & Data Science Self-Directed Studies",
      institution: "Independent professional learning",
      period: "Sep 2025 — Present",
      description:
        "Python, data analysis, machine-learning foundations, prompt engineering, and retrieval-augmented generation concepts.",
    },
  ] satisfies readonly LearningItem[],
  projects: [
    {
      slug: "odoo-18-ecommerce-erp-implementation",
      index: "01",
      title: "Odoo 18 E-commerce and ERP Implementation",
      shortTitle: "Odoo 18 commerce & ERP",
      eyebrow: "ERP implementation",
      stage: "Implementation · public status to confirm",
      summary:
        "A commerce and ERP implementation centered on pricing hierarchy, product aliases, configurable kits, and consistency from storefront selection through sales order.",
      businessProblem:
        "Complex product and pricing rules need to behave predictably across browsing, cart, quotation, inventory, and order workflows. A migration also has to preserve operational intent—not simply reproduce screens in a new system.",
      role: "Developer and technical project lead responsible for translating business rules into a practical Odoo implementation plan, investigating platform behavior, and coordinating technical decisions.",
      responsibilities: [
        "Map business rules for pricing, aliases, kits, inventory, and order creation.",
        "Evaluate what belongs in configuration versus custom modules.",
        "Coordinate implementation priorities, risks, and validation paths.",
      ],
      constraints: [
        "Pricing precedence must remain understandable when multiple rules can apply.",
        "Storefront, cart, quotation, inventory, and sales-order behavior must agree.",
        "Migration choices must balance maintainability with exact business requirements.",
      ],
      approach: [
        "Model the commerce flow as one connected decision path instead of isolated screens.",
        "Define rule ownership and precedence before extending platform behavior.",
        "Use explicit validation scenarios for critical combinations and transitions.",
      ],
      decisions: [
        {
          title: "Rules before interfaces",
          detail:
            "Document pricing and product-selection rules first so storefront and ERP changes share the same source of truth.",
        },
        {
          title: "Configuration before customization",
          detail:
            "Use standard Odoo behavior where it meets the requirement, reserving custom modules for gaps that materially affect the workflow.",
        },
        {
          title: "End-to-end validation",
          detail:
            "Treat a correct storefront price as incomplete until the cart, inventory, quotation, and sales-order paths agree.",
        },
      ],
      implementation: [
        "Pricing hierarchy and quantity-discount behavior.",
        "Product aliases and configurable product-kit workflows.",
        "Consistency checks across storefront, cart, inventory, quotation, and sales order.",
        "Automated-test planning around critical business rules.",
        "ERP and e-commerce migration evaluation.",
      ],
      validation: [
        "Scenario-based checks for rule precedence and quantity thresholds.",
        "Cross-workflow checks from product selection through order creation.",
        "Regression coverage planning for custom-module behavior.",
      ],
      outcome:
        "The implementation status and any production outcomes require public confirmation. This case study intentionally documents the problem framing, solution direction, and validation discipline without claiming unapproved results.",
      technologies: [
        "Odoo 18 Community",
        "Python",
        "JavaScript",
        "PostgreSQL",
        "Docker",
        "Automated testing",
      ],
      visuals: [
        {
          src: "/images/projects/odoo-commerce-system-map.svg",
          alt: "Conceptual system map showing pricing rules, a configurable product, cart validation, and an ERP sales order.",
          caption:
            "Conceptual system map using fictional interface data. Replace the asset path in the project data when a safe screenshot is approved.",
          width: 1600,
          height: 1000,
        },
      ],
      featured: true,
    },
    {
      slug: "configurable-kits-advanced-pricing",
      index: "02",
      title: "Configurable Kits and Advanced Pricing System",
      shortTitle: "Configurable kits & pricing",
      eyebrow: "Product systems",
      stage: "System design & implementation · public status to confirm",
      summary:
        "A rule-driven kit builder designed to coordinate substitutions, optional components, pricing modes, inventory checks, cart editing, and downstream order data.",
      businessProblem:
        "Configurable kits behave like one product to the buyer but many dependent components to pricing, inventory, cart, and fulfillment systems. Small inconsistencies can create invalid combinations or mismatched order totals.",
      role: "Developer and technical project lead defining the product model, decision rules, user flow, validation strategy, and ERP integration boundaries.",
      responsibilities: [
        "Translate required and optional component rules into a consistent configuration model.",
        "Define pricing behavior for component-sum and fixed-price kits.",
        "Plan safe cart-editing, inventory-validation, and order-integration paths.",
      ],
      constraints: [
        "Required substitutions and optional components create interdependent choices.",
        "Inventory can change between configuration and order placement.",
        "Concurrent cart edits must not create stale or invalid configurations.",
      ],
      approach: [
        "Separate configuration rules, price calculation, inventory validation, and persistence into explicit stages.",
        "Revalidate at system boundaries instead of trusting earlier client-side state.",
        "Preserve configuration details through cart edits, quotations, and sales orders.",
      ],
      decisions: [
        {
          title: "One canonical configuration",
          detail:
            "Represent the buyer’s choices in a structured payload that each downstream step can validate and interpret.",
        },
        {
          title: "Pricing mode is explicit",
          detail:
            "Keep fixed kit pricing and component-sum pricing distinct so precedence and display rules remain auditable.",
        },
        {
          title: "Validate late as well as early",
          detail:
            "Give fast feedback during configuration, then validate inventory and rule compatibility again before order creation.",
        },
      ],
      implementation: [
        "Required substitutions and optional-component selection.",
        "Component-sum and fixed kit-pricing strategies.",
        "Inventory validation and concurrency-aware state handling.",
        "Cart editing with preserved configuration context.",
        "Quotation and sales-order representation.",
      ],
      validation: [
        "Valid, invalid, and boundary configuration scenarios.",
        "Price recalculation checks for both pricing strategies.",
        "Inventory-change and concurrent-edit test scenarios.",
      ],
      outcome:
        "Production scope, deployment status, and measurable outcomes are awaiting public confirmation. The case study is limited to the approved functional scope and implementation reasoning.",
      technologies: [
        "Odoo 18 Community",
        "Python",
        "JavaScript",
        "JSON",
        "PostgreSQL",
        "Automated testing",
      ],
      visuals: [
        {
          src: "/images/projects/configurable-kit-builder.svg",
          alt: "Conceptual product configurator with required and optional components, pricing mode, and inventory validation.",
          caption:
            "Conceptual kit-builder interface with fictional products and values. The visual is a privacy-safe placeholder, not a production screenshot.",
          width: 1600,
          height: 1000,
        },
      ],
      featured: true,
    },
    {
      slug: "bigcommerce-acumatica-integration",
      index: "03",
      title: "BigCommerce–Acumatica Integration",
      shortTitle: "BigCommerce–Acumatica",
      eyebrow: "Integration architecture",
      stage: "Research & technical evaluation",
      summary:
        "An integration evaluation for cart webhooks, customer-class pricing, quantity breaks, and the boundary between storefront responsiveness and ERP authority.",
      businessProblem:
        "The storefront needs timely pricing while the ERP holds customer and quantity-dependent rules. The integration must account for API limits, event timing, failures, and differences between the two systems’ pricing models.",
      role: "Technical researcher and developer investigating platform APIs, webhook behavior, pricing responsibilities, and feasible synchronization patterns.",
      responsibilities: [
        "Research BigCommerce and Acumatica API capabilities and constraints.",
        "Map customer-class and quantity-break requirements across both systems.",
        "Explain architectural tradeoffs, failure modes, and evaluation findings.",
      ],
      constraints: [
        "Cart webhooks are event-driven and may not fit every synchronous pricing decision.",
        "Customer-class and quantity-break models differ across platform boundaries.",
        "Retries, partial failures, API limits, and stale data must be considered explicitly.",
      ],
      approach: [
        "Start with an ownership map for customer, product, price, and order data.",
        "Evaluate synchronous lookup, scheduled synchronization, and hybrid patterns.",
        "Use failure scenarios to test whether each option can degrade safely.",
      ],
      decisions: [
        {
          title: "Establish system authority",
          detail:
            "Define which platform owns each piece of data before choosing webhook or synchronization behavior.",
        },
        {
          title: "Separate event transport from price logic",
          detail:
            "A webhook can signal change, but the pricing contract still needs deterministic inputs, precedence, and fallback behavior.",
        },
        {
          title: "Design for replay",
          detail:
            "Treat retries and idempotency as core requirements so transient failures do not duplicate or corrupt state.",
        },
      ],
      implementation: [
        "Cart-webhook and pricing-synchronization architecture research.",
        "Customer-class and quantity-break requirement mapping.",
        "API capability and constraint analysis.",
        "Failure-mode, retry, and data-ownership evaluation.",
      ],
      validation: [
        "Representative API request and response research.",
        "Event-sequence walkthroughs for updates, retries, and stale data.",
        "Feasibility review against required pricing scenarios.",
      ],
      outcome:
        "This work is presented as research and technical evaluation. No production deployment or business impact is claimed; the public decision and implementation status still require confirmation.",
      technologies: [
        "BigCommerce",
        "Acumatica 2022 R2",
        "REST APIs",
        "Webhooks",
        "JSON",
        "JavaScript",
      ],
      visuals: [
        {
          src: "/images/projects/bigcommerce-acumatica-flow.svg",
          alt: "Conceptual integration architecture connecting a BigCommerce cart, integration layer, pricing rules, and Acumatica ERP.",
          caption:
            "Conceptual integration flow with fictional events and identifiers. It illustrates system boundaries without exposing client infrastructure.",
          width: 1600,
          height: 1000,
        },
      ],
      featured: true,
    },
    {
      slug: "acumatica-azure-staging-environment",
      index: "04",
      title: "Acumatica Azure Staging Environment",
      shortTitle: "Acumatica Azure staging",
      eyebrow: "Cloud infrastructure",
      stage: "Environment implementation · public status to confirm",
      summary:
        "A staging-environment workflow for Acumatica 2022 R2 covering Azure infrastructure, SQL Server, IIS, snapshot restoration, customization publishing, access, and handoff.",
      businessProblem:
        "ERP customization and upgrade work needs an isolated environment that is representative enough for testing while remaining controlled, repeatable, and safe to hand over to project participants.",
      role: "Developer and technical coordinator responsible for environment setup, restoration and publishing steps, access coordination, testing support, and handoff documentation.",
      responsibilities: [
        "Coordinate the Azure, Windows, SQL Server, IIS, and Acumatica setup sequence.",
        "Restore approved snapshots and publish required customizations.",
        "Support access, validation, and environment handoff.",
      ],
      constraints: [
        "Version alignment matters across Acumatica, the database, and published customizations.",
        "Snapshots and credentials require careful handling and must not enter public documentation.",
        "The environment needs useful parity without exposing production systems or data.",
      ],
      approach: [
        "Build the environment as a documented sequence with clear prerequisites and checkpoints.",
        "Separate infrastructure readiness, application restoration, customization publishing, and user validation.",
        "Use sanitized descriptions in the public portfolio and keep operational values private.",
      ],
      decisions: [
        {
          title: "Stage by dependency",
          detail:
            "Bring up infrastructure, database, web tier, application, and customization layers in an order that makes failures easier to isolate.",
        },
        {
          title: "Protect environment detail",
          detail:
            "Describe the architecture publicly without publishing hostnames, credentials, database names, or access paths.",
        },
        {
          title: "Handoff is part of implementation",
          detail:
            "Include access confirmation, validation steps, and owner-facing documentation in the definition of a usable staging environment.",
        },
      ],
      implementation: [
        "Azure virtual infrastructure for a controlled staging workload.",
        "SQL Server and IIS prerequisites for Acumatica 2022 R2.",
        "Snapshot restoration and customization publishing workflow.",
        "Access coordination, testing support, and environment handoff.",
      ],
      validation: [
        "Infrastructure and service-readiness checks.",
        "Application access and restored-data verification using approved test procedures.",
        "Customization publication and role-based handoff checks.",
      ],
      outcome:
        "The public portfolio does not claim production use, completion, or performance results. Environment status and approved qualitative outcomes remain to be confirmed.",
      technologies: [
        "Microsoft Azure",
        "Acumatica 2022 R2",
        "Windows Server",
        "SQL Server",
        "IIS",
        "GitHub",
      ],
      visuals: [
        {
          src: "/images/projects/acumatica-azure-staging.svg",
          alt: "Conceptual Azure staging architecture with access control, IIS and Acumatica, SQL Server, snapshot restore, and testing handoff.",
          caption:
            "Conceptual staging architecture. All labels are generic and no real hostnames, credentials, database values, or client data are shown.",
          width: 1600,
          height: 1000,
        },
      ],
      featured: false,
    },
  ] satisfies readonly CaseStudy[],
  seo: {
    keywords: [
      "Ace Relano",
      "e-commerce developer",
      "ERP developer",
      "technical project lead",
      "BigCommerce developer",
      "Odoo developer",
      "Acumatica integration",
    ],
  },
} as const;

export const featuredProjects = portfolio.projects.filter(
  (project) => project.featured,
);

export function getProject(slug: string) {
  return portfolio.projects.find((project) => project.slug === slug);
}

export function absoluteUrl(path = "") {
  return new URL(path, portfolio.site.url).toString();
}
