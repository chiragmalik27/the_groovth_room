export interface NavItem {
  label: string;
  href: string;
}

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SERVICES_NAV: NavItem[] = [
  { label: "Legal Assistance & Registration", href: "/services/legal-assistance-business-registration" },
  { label: "Marketing & Digital Growth", href: "/services/marketing-digital-growth" },
  { label: "Business Strategy & Growth", href: "/services/business-strategy-growth-planning" },
  { label: "FMCG Brand & Market Enablement", href: "/services/fmcg-brand-market-enablement" },
  { label: "Distribution & Channel Development", href: "/services/distribution-channel-development" },
  { label: "Pilot Testing & Market Validation", href: "/services/pilot-testing-market-validation" },
  { label: "Technology & Digital Enablement", href: "/services/technology-digital-enablement" },
  { label: "One-on-One Founder Assistance", href: "/services/one-on-one-founder-assistance" },
];

