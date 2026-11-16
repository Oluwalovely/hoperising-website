/** Source: docs/CONTENT.md. User corrections take precedence over the PDF. */
type Telephone = { label: string; href: `tel:+234${string}` };
export type Office = { label: string; lines: readonly string[] };
type Company = {
  name: string;
  wordmark: string;
  wordmarkSubtitle: string;
  registrationNumber: string;
  incorporationDate: string;
  incorporationYear: number;
  companyType: string;
  country: string;
  description: string;
  email: string;
  emailHref: `mailto:${string}`;
  telephones: readonly Telephone[];
  offices: readonly Office[];
};

const email = "hoperisingagro@gmail.com";

export const company = {
  name: "HOPERISING AGRO ALLIED INVESTMENT LIMITED",
  wordmark: "HOPERISING",
  wordmarkSubtitle: "AGRO ALLIED INVESTMENT LIMITED",
  registrationNumber: "1808726",
  incorporationDate: "22 June 2021",
  incorporationYear: 2021,
  companyType: "Private company limited by shares",
  country: "Nigeria",
  description: "Agricultural produce sourcing, purchasing and supply in Nigeria.",
  email,
  emailHref: `mailto:${email}`,
  telephones: [
    { label: "08033285112", href: "tel:+2348033285112" },
    { label: "09011224351", href: "tel:+2349011224351" },
  ],
  offices: [
    {
      label: "Head Office",
      lines: [
        "5, Coca-Cola Junction,",
        "Oba Erinwole Express Way,",
        "Sagamu, Ogun State, Nigeria.",
      ],
    },
    {
      label: "Branch Office",
      // Preserve the source address until the company supplies a correction.
      lines: [
        "KLM, 10 Old Ogbomoso-Ilorin Old Road,",
        "Opposite Olugbon Estate,",
        "Surulere LGA, Oyo State, Nigeria.",
      ],
    },
  ],
} as const satisfies Company;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Business", href: "#business" },
  { label: "Our Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly { label: string; href: `#${string}` }[];

export const hero = {
  eyebrow: "Agricultural commodity sourcing and trading",
  heading: "Connecting Agricultural Produce with Market Opportunities.",
  description: `${company.name} is a Nigerian company that sources, purchases and supplies agricultural produce.`,
  primaryAction: { label: "Explore Our Business", href: "#business" },
  secondaryAction: { label: "Contact Us", href: "#contact" },
} as const;

export const about = {
  heading: "A Nigerian company focused on agricultural trade.",
  introduction: `Established on ${company.incorporationDate}, ${company.name} is a private company limited by shares, registered in Nigeria.`,
  description:
    "We buy agricultural produce from farmers and suppliers for resale to traders, businesses and other buyers. Cashew and soya beans are among the commodities we trade.",
  facts: [
    { label: "Incorporated", value: String(company.incorporationYear) },
    { label: "RC number", value: company.registrationNumber },
    { label: "Registered in", value: company.country },
  ],
} as const;

export const business = {
  heading: "Our Business",
  introduction:
    "We source, buy and resell agricultural produce, with importation where applicable.",
} as const;

type BusinessActivity = {
  id: "sourcing" | "trading" | "importation";
  title: string;
  description: string;
};

export const businessActivities = [
  {
    id: "sourcing",
    title: "Agricultural Produce Sourcing & Procurement",
    description: "We source and purchase cashew, soya beans and other available farm produce from farmers and suppliers.",
  },
  {
    id: "trading",
    title: "Agricultural Commodity Trading & Supply",
    description: "We resell the produce we purchase, supplying traders, businesses and other customers.",
  },
  {
    id: "importation",
    title: "Agricultural Produce Importation",
    description: "Our business activities also include importing agricultural produce, where applicable.",
  },
] as const satisfies readonly BusinessActivity[];

export const commodities = [
  {
    name: "Cashew",
    description: "We source and purchase cashew for resale to buyers.",
    image: "/images/cashew-commodity.webp",
    imageAlt: "Illustration of unshelled cashew nuts in an open jute sack",
  },
  {
    name: "Soya beans",
    description: "We buy soya beans for supply to customers and businesses.",
    image: "/images/soya-commodity.webp",
    imageAlt: "Illustration of dry soya beans in an open jute sack",
  },
  {
    name: "Cocoa",
    description: "Contact us to discuss cocoa sourcing and availability.",
    image: "/images/cocoa-commodity.webp",
    imageAlt: "Illustration of dried cocoa beans in an open jute sack",
  },
  {
    name: "Other available agricultural produce",
    description: "We also trade other farm produce, depending on what is available. Contact us to discuss your requirements.",
  },
] as const;

export const commoditySection = {
  heading: "Agricultural Commodities",
  introduction:
    "We source and trade cashew, soya beans and other available farm produce.",
  action: { label: "Enquire About Produce", href: "#contact" },
} as const;

export const approach = {
  heading: "From Produce Sources to Buyers",
  introduction:
    "Our trade begins with finding produce sources and continues through purchase and supply to buyers.",
} as const;

export const tradingSteps = [
  {
    title: "Identify produce sources",
    description: "Find farmers, suppliers and other sources of farm produce.",
  },
  {
    title: "Source suitable commodities",
    description: "Identify agricultural produce suitable for purchase and resale.",
  },
  {
    title: "Purchase available produce",
    description: "Buy available produce from the identified sources.",
  },
  {
    title: "Supply buyers",
    description: "Sell and supply the purchased produce to traders, businesses and other customers.",
  },
] as const;

// Exact proposed wording from page 2 of the PDF. Approval remains outstanding.
export const corporateStatements = {
  status: "proposed",
  approvalNote: "Proposed corporate statements, subject to company approval.",
  mission: "To source and purchase agricultural produce and make it available to buyers through dependable trading and supply relationships.",
  vision: "To be a trusted participant in the agricultural produce trade, supporting reliable connections between farm-produce suppliers and buyers.",
  valuesStatement: "Integrity in transactions; reliability in sourcing and supply; quality in produce handling; and strong relationships with suppliers and customers.",
  values: [
    { title: "Integrity", description: "Integrity in transactions" },
    { title: "Reliability", description: "Reliability in sourcing and supply" },
    { title: "Quality", description: "Quality in produce handling" },
    { title: "Strong business relationships", description: "Strong relationships with suppliers and customers" },
  ],
} as const;

export const pageMetadata = {
  title: `${company.name} | Agricultural Commodity Trading`,
  description: `${company.name} is a Nigerian company focused on sourcing, purchasing and supplying cashew, soya beans and other agricultural produce.`,
} as const;

export const corporateInfo = {
  heading: "Corporate Information",
  introduction:
    "Our registration details and office addresses, as recorded in the company profile.",
  details: [
    { label: "Registered company name", value: company.name },
    { label: "RC registration number", value: company.registrationNumber },
    { label: "Date of incorporation", value: company.incorporationDate },
    { label: "Company type", value: company.companyType },
    { label: "Country", value: company.country },
  ],
} as const;

export const contact = {
  heading: "Get in Touch",
  introduction:
    "To discuss sourcing, purchasing or supplying agricultural produce, call or email us using the details below.",
} as const;

export const footerNavigation = [
  ...navigation,
  { label: "Corporate Information", href: "#corporate-information" },
] as const;
