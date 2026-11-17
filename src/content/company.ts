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
  { label: "About Us", href: "#about" },
  { label: "Our Business", href: "#business" },
  { label: "Our Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly { label: string; href: `#${string}` }[];

export const hero = {
  heading: "Connecting Agricultural Produce with Market Opportunities.",
  description: "We source, purchase and supply agricultural produce in Nigeria.",
  primaryAction: { label: "Explore Our Business", href: "#business" },
  secondaryAction: { label: "Contact Us", href: "#contact" },
} as const;

export const about = {
  heading: "A Nigerian company focused on agricultural trade.",
  introduction: `Established on ${company.incorporationDate}, ${company.name} is a private company limited by shares, registered in Nigeria.`,
  description:
    "We buy farm produce for resale to traders, businesses and other buyers. Our head office is in Sagamu, Ogun State, with a branch in Oyo State.",
  facts: [
    { label: "Incorporated", value: String(company.incorporationYear) },
    { label: "RC number", value: company.registrationNumber },
    { label: "Registered in", value: company.country },
  ],
} as const;

export const business = {
  heading: "Our Business",
  introduction:
    "Our activities cover produce procurement, trading and supply, with importation where applicable.",
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
    description: "We find and purchase available produce from farmers and suppliers.",
  },
  {
    id: "trading",
    title: "Agricultural Commodity Trading & Supply",
    description: "We supply purchased produce to traders, businesses and other buyers.",
  },
  {
    id: "importation",
    title: "Agricultural Produce Importation",
    description: "Importation forms part of our agricultural produce business where applicable.",
  },
] as const satisfies readonly BusinessActivity[];

export const commodities = [
  {
    name: "Cashew",
    description: "Sourced and purchased for resale.",
    image: "/images/cashew-commodity.webp",
    imageAlt: "Illustration of unshelled cashew nuts in an open jute sack",
  },
  {
    name: "Soya beans",
    description: "Purchased for supply to buyers.",
    image: "/images/soyabeans.webp",
    imageAlt: "A handful of soya beans held above an open produce sack",
  },
  {
    name: "Cocoa",
    description: "Contact us to discuss cocoa sourcing and availability.",
    image: "/images/cocoa_seed.webp",
    imageAlt: "Cocoa beans spread out on a surface beside a filled bowl",
    supportingImage: "/images/cocoa_bags.webp",
    supportingImageAlt: "Stacked sacks of cocoa beans in a storage building",
  },
  {
    name: "Sesame seeds",
    description: "Contact us about sourcing sesame seeds and current availability.",
    image: "/images/sesame_seed.webp",
    imageAlt: "Close view of pale sesame seeds",
    supportingImage: "/images/sesame_seed_bags.webp",
    supportingImageAlt: "Stacked bags of sesame seeds at the workspace",
  },
  {
    name: "Other available agricultural produce",
    description: "Looking for other farm produce? Contact us to discuss what you need and what is available.",
  },
] as const;

export const commoditySection = {
  heading: "Agricultural Commodities",
  introduction:
    "Explore the produce below and contact us about sourcing or availability.",
  action: { label: "Enquire About Produce", href: "#contact" },
} as const;

export const approach = {
  heading: "From Produce Sources to Buyers",
  introduction:
    "The steps below outline how produce moves from its source to buyers through our trading activities.",
} as const;

export const tradingSteps = [
  {
    title: "Identify produce sources",
    description: "Find farmers and suppliers with produce available.",
  },
  {
    title: "Source suitable commodities",
    description: "Select suitable commodities from those sources.",
  },
  {
    title: "Purchase available produce",
    description: "Buy the available produce selected for trade.",
  },
  {
    title: "Supply buyers",
    description: "Resell the purchased produce to customers.",
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

export const contact = {
  heading: "Get in Touch",
  introduction:
    "To discuss sourcing, purchasing or supplying agricultural produce, call or email us using the details below.",
  enquiryGuidance:
    "Please include the commodity, approximate quantity and your location so we can understand your enquiry.",
} as const;

export const footerNavigation = [
  { label: "Home", href: "#home" },
  ...navigation,
] as const;
