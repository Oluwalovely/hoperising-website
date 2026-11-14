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
  description: `${company.name} is a Nigerian agricultural commodity trading company engaged in the sourcing, procurement and supply of farm produce.`,
  primaryAction: { label: "Explore Our Business", href: "#business" },
  secondaryAction: { label: "Contact Us", href: "#contact" },
} as const;

export const about = {
  heading: "A Nigerian company focused on agricultural trade.",
  introduction: `Established on ${company.incorporationDate}, ${company.name} is a private company limited by shares, registered in Nigeria.`,
  description:
    "The company purchases agricultural produce for onward sale to customers, traders and businesses. Its role is to connect sources of farm produce with buyers through sourcing, purchasing and supply.",
  facts: [
    { label: "Incorporated", value: String(company.incorporationYear) },
    { label: "RC number", value: company.registrationNumber },
    { label: "Registered in", value: company.country },
  ],
} as const;

export const business = {
  heading: "Our Business",
  introduction:
    "From sourcing produce to supplying buyers, our business centres on agricultural commodities.",
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
    description: "Purchasing farm produce from farmers, suppliers and other produce sources, including cashew, soya beans and other available agricultural commodities.",
  },
  {
    id: "trading",
    title: "Agricultural Commodity Trading & Supply",
    description: "Reselling and supplying purchased produce to customers, traders, businesses and other buyers.",
  },
  {
    id: "importation",
    title: "Agricultural Produce Importation",
    description: "Importation of agricultural produce, where applicable, as part of the company's produce-trading activities.",
  },
] as const satisfies readonly BusinessActivity[];

export const commodities = [
  {
    name: "Cashew",
    description: "Sourced and purchased for onward sale to buyers.",
    image: "/images/cashew-commodity.webp",
    imageAlt: "Illustration of unshelled cashew nuts in an open jute sack",
  },
  {
    name: "Soya beans",
    description: "Purchased for resale and supply to customers and businesses.",
    image: "/images/soya-commodity.webp",
    imageAlt: "Illustration of dry soya beans in an open jute sack",
  },
  {
    name: "Other available agricultural produce",
    description: "Other farm produce may form part of the company's trading activities, depending on availability.",
  },
] as const;

export const commoditySection = {
  heading: "Agricultural Commodities",
  introduction:
    "We source and trade cashew, soya beans and other available farm produce.",
  imageCaption: "Illustrative commodity images.",
  action: { label: "Enquire About Produce", href: "#contact" },
} as const;

export const approach = {
  heading: "From Produce Sources to Buyers",
  introduction:
    "Our trading model centres on finding agricultural produce, purchasing suitable commodities and supplying them to buyers.",
} as const;

export const tradingSteps = [
  {
    title: "Identify produce sources",
    description: "Identify farmers, suppliers and other sources of agricultural produce.",
  },
  {
    title: "Source suitable commodities",
    description: "Source agricultural commodities suitable for purchase and onward sale.",
  },
  {
    title: "Purchase available produce",
    description: "Purchase available produce as part of the company's trading activities.",
  },
  {
    title: "Supply buyers",
    description: "Resell and supply purchased produce to customers, traders and businesses.",
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
    "Company particulars and office locations, as recorded in the company profile.",
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
    "For enquiries about agricultural produce sourcing, purchasing or supply, contact the company using the details below.",
} as const;

export const footerNavigation = [
  ...navigation,
  { label: "Corporate Information", href: "#corporate-information" },
] as const;
