import { Service, PillarInfo } from "@/types";

export const SERVICES: Service[] = [
  {
    number: "01",
    slug: "legal-assistance-business-registration",
    title: "Legal Assistance & Business Registration",
    pillar: "Build",
    skill: "Business Registration & Legal Coordination",
    coreService: "Business Foundation / Legal & Registration Support",
    summary:
      "Business structure guidance and coordination support for registrations, documentation, trademark filing, and compliance-related requirements.",
    businessNeed:
      "Starting or restructuring a business demands clarity on entity selection, statutory documentation, and intellectual property protection without navigating ambiguous bureaucratic processes alone.",
    microDetails: [
      "Business Structure Guidance",
      "Private Limited / LLP / Partnership Registration",
      "GST & MSME Registration Assistance",
      "Trademark Filing Coordination",
      "Founder Agreements",
      "NDA & Contract Documentation",
      "Compliance Guidance",
      "Professional Referrals",
    ],
    potentialOutputs: [
      "Entity structuring roadmap tailored to founding team requirements",
      "Coordinated filing documentation for corporate and statutory registrations",
      "Foundational legal documents including founder agreements & protective NDAs",
      "Direct introductions to qualified external legal and accounting specialists",
    ],
    contentCaution:
      "Guidance, assistance, coordination, and referrals only. The Grovvth Room does not directly practice law or provide certified auditing services; execution is coordinated with licensed legal practitioners and chartered accountants.",
    relatedServiceSlugs: [
      "business-strategy-growth-planning",
      "one-on-one-founder-assistance",
      "technology-digital-enablement",
    ],
  },
  {
    number: "02",
    slug: "marketing-digital-growth",
    title: "Marketing & Digital Growth",
    pillar: "Grow",
    skill: "Marketing & Digital Growth Management",
    coreService: "Brand Building / Digital Visibility & Customer Acquisition",
    summary:
      "Marketing and digital growth management covering paid campaigns, social media, content, SEO, lead generation, and campaign analytics.",
    businessNeed:
      "Growing companies frequently disperse ad spend across disconnected tactics without an integrated acquisition architecture, cohesive brand messaging, or measured conversion accountability.",
    microDetails: [
      "Performance Marketing",
      "Google & Meta Ads",
      "Social Media Management",
      "Content Strategy",
      "Content Calendar",
      "Caption & Copywriting",
      "SEO & Keyword Research",
      "Google Business Profile Optimization",
      "Brand Positioning",
      "Lead Generation",
      "Campaign Analytics",
      "Influencer Outreach",
    ],
    potentialOutputs: [
      "Comprehensive digital marketing roadmap & targeted campaign architectures",
      "Structured content calendar with brand positioning & copy guidelines",
      "Configured multi-channel ad funnels (Meta & Google) with attribution tracking",
      "Search visibility optimization strategy for local and organic reach",
    ],
    contentCaution:
      "Focus is on sound strategy, campaign management, and rigorous experimentation. We do not make unsupported claims of guaranteed viral reach, fixed ROI, or predetermined lead quotas.",
    relatedServiceSlugs: [
      "fmcg-brand-market-enablement",
      "pilot-testing-market-validation",
      "technology-digital-enablement",
    ],
  },
  {
    number: "03",
    slug: "business-strategy-growth-planning",
    title: "Business Strategy & Growth Planning",
    pillar: "Position",
    skill: "Business Strategy & Growth Consulting",
    coreService: "Strategic Business Planning / Sustainable Growth",
    summary:
      "Business strategy and growth consulting covering business models, revenue planning, market and competitor research, pricing, go-to-market planning, and growth roadmaps.",
    businessNeed:
      "Operating momentum without strategic clarity creates costly detours. Businesses need an objective framework to assess revenue engines, pricing power, and scalable go-to-market motions.",
    microDetails: [
      "Business Model Development",
      "Revenue Stream Planning",
      "Market Research",
      "Competitor Analysis",
      "Customer Segmentation",
      "Ideal Customer Profiling",
      "Pricing Strategy",
      "Value Proposition Development",
      "Go-to-Market Strategy",
      "Sales Funnel Planning",
      "Partnership Strategy",
      "Growth Roadmaps",
    ],
    potentialOutputs: [
      "Refined business model blueprint & revenue stream diversification plan",
      "Competitor benchmarking report & differentiated value proposition matrix",
      "Unit economics & pricing framework aligned with market elasticity",
      "Staged Go-To-Market execution roadmap with priority milestones",
    ],
    contentCaution:
      "Strategic planning and advisory support based on market evidence and rigorous analysis, not a guarantee of financial outcomes or investment returns.",
    relatedServiceSlugs: [
      "one-on-one-founder-assistance",
      "pilot-testing-market-validation",
      "distribution-channel-development",
    ],
  },
  {
    number: "04",
    slug: "fmcg-brand-market-enablement",
    title: "FMCG Brand & Market Enablement",
    pillar: "Grow",
    skill: "FMCG Brand Development & Market Readiness",
    coreService: "FMCG Brand Building / Market Readiness & Expansion",
    summary:
      "FMCG brand development and market-readiness support covering category assessment, customer mapping, positioning, price-pack strategy, retail readiness, and launch planning.",
    businessNeed:
      "Consumer goods demand stringent alignment between packaging aesthetics, trade margins, distributor economics, shelf appeal, and omnichannel presence before launching into modern or general retail.",
    microDetails: [
      "Market & Category Assessment",
      "Target Customer Mapping",
      "Competitor Research",
      "Product Positioning",
      "Price-Pack Strategy",
      "Retail Readiness",
      "Launch Planning",
      "Packaging & Branding Coordination",
      "Channel Prioritization (GT, MT, E-com, Quick Commerce)",
      "Vendor & Retailer Introductions",
    ],
    potentialOutputs: [
      "FMCG category landscape analysis & price-pack architectural matrix",
      "Retail-readiness checklist covering barcode, labelling, and trade margin spreads",
      "Multi-channel launch strategy across Modern Trade, General Trade, and Quick Commerce",
      "Coordination documentation for packaging vendors and initial distributor outreach",
    ],
    contentCaution:
      "Enablement and readiness support. Does not include manufacturing operations or regulatory licensing; introductions and coordination do not guarantee distributor appointments or shelf space.",
    relatedServiceSlugs: [
      "distribution-channel-development",
      "pilot-testing-market-validation",
      "marketing-digital-growth",
    ],
  },
  {
    number: "05",
    slug: "distribution-channel-development",
    title: "Distribution & Channel Development",
    pillar: "Grow",
    skill: "Distribution & Channel Management",
    coreService: "Market Expansion / Distribution Network Development",
    summary:
      "Distribution and channel management covering distributor and retailer mapping, B2B outreach, regional planning, channel economics, onboarding coordination, and performance review.",
    businessNeed:
      "Expanding geographic reach without distributor clarity leads to channel conflicts, margin erosion, and inventory blockages across regions.",
    microDetails: [
      "Distributor Identification",
      "Reseller Mapping",
      "Retailer & Channel Partner Mapping",
      "B2B Partnership Outreach",
      "Regional Distribution Planning",
      "Channel Economics & Margin Assessment",
      "Sales Pitch Development",
      "Distributor Proposal Preparation",
      "Partner Onboarding Coordination",
      "Distribution Performance Review",
    ],
    potentialOutputs: [
      "Regional channel architecture & prospective distributor database",
      "Standardized distributor proposal pitch decks and commercial term sheets",
      "Partner onboarding workflow and compliance checklist",
      "Quarterly channel velocity review frameworks",
    ],
    contentCaution:
      "Strategic channel planning, mapping, and partner outreach coordination. Final appointment contracts, credit terms, and sales volumes remain subject to direct commercial agreements between parties.",
    relatedServiceSlugs: [
      "fmcg-brand-market-enablement",
      "business-strategy-growth-planning",
      "pilot-testing-market-validation",
    ],
  },
  {
    number: "06",
    slug: "pilot-testing-market-validation",
    title: "Pilot Testing & Market Validation",
    pillar: "Build",
    skill: "Market Research & Pilot Testing",
    coreService: "Idea Validation / Product-Market Fit Assessment",
    summary:
      "Market research and pilot testing covering customer interviews, MVP validation, product trials, feedback analysis, iteration planning, and go/no-go recommendations.",
    businessNeed:
      "Committing substantial capital to untested assumptions is the primary cause of product failure. Founders need structured, low-risk test environments to gather empirical customer data.",
    microDetails: [
      "Customer Interviews",
      "Early-User Feedback",
      "MVP Validation",
      "Pilot Design",
      "Success Metrics Definition",
      "Small-Scale Product Trials",
      "Customer Usability Assessment",
      "Test-Market Launch Coordination",
      "Feedback Collection & Synthesis",
      "Results Analysis",
      "Iteration Planning",
      "Go/No-Go Recommendations",
    ],
    potentialOutputs: [
      "Controlled pilot protocol with defined quantitative pass/fail thresholds",
      "User interview synthesis and friction points diagnostic report",
      "Feature prioritization roadmap based on empirical behavioral signals",
      "Objective Go / No-Go strategic decision memo for founders & stakeholders",
    ],
    contentCaution:
      "Validation is a structured evidence-gathering methodology designed to illuminate real market demand, not a guarantee of product success or market adoption.",
    relatedServiceSlugs: [
      "business-strategy-growth-planning",
      "technology-digital-enablement",
      "fmcg-brand-market-enablement",
    ],
  },
  {
    number: "07",
    slug: "technology-digital-enablement",
    title: "Technology & Digital Enablement",
    pillar: "Build",
    skill: "Technology & Digital Solutions Management",
    coreService: "Digital Transformation / Operational Efficiency & Customer Experience",
    summary:
      "Technology and digital solutions management covering websites, no-code/low-code solutions, CRM, lead management, automation, integrations, e-commerce, and analytics setup.",
    businessNeed:
      "Disjointed software tools create operational drag and data silos. Companies require modern, integrated infrastructure that supports workflow automation and transparent customer data flows.",
    microDetails: [
      "Website & Landing Page Development Coordination",
      "No-Code / Low-Code Solutions",
      "CRM Setup & Configuration",
      "Lead Management Systems",
      "Workflow Automation",
      "Business Tool Integration",
      "E-commerce & Payment Integration",
      "MVP Development Coordination",
      "Analytics & Dashboard Setup",
      "Technical Vendor Identification",
      "Project Coordination",
    ],
    potentialOutputs: [
      "Tailored digital stack blueprint mapping CRM, automation, and data pipes",
      "Configured CRM and automated lead routing workflows",
      "Technical specification brief and project coordination for web/MVP delivery",
      "Unified operational dashboards tracking key pipeline indicators",
    ],
    contentCaution:
      "Scope includes systems architecture, solution configuration, and technical vendor management. Custom bespoke software engineering is coordinated in tandem with verified technology partners.",
    relatedServiceSlugs: [
      "marketing-digital-growth",
      "pilot-testing-market-validation",
      "legal-assistance-business-registration",
    ],
  },
  {
    number: "08",
    slug: "one-on-one-founder-assistance",
    title: "One-on-One Founder Assistance",
    pillar: "Position",
    skill: "Founder Advisory & Business Assistance",
    coreService: "Founder Guidance / Business Clarity & Decision-Making",
    summary:
      "Founder advisory and business assistance covering idea evaluation, business model review, pricing, go-to-market feedback, partnership planning, pitch feedback, and milestone reviews.",
    businessNeed:
      "Founders often carry decision fatigue in isolation. An objective, experienced sounding board helps clarify critical crossroads, challenge internal biases, and maintain execution momentum.",
    microDetails: [
      "Idea Evaluation",
      "Business Model Review",
      "Pricing Discussions",
      "Marketing & GTM Review",
      "Customer Acquisition Planning",
      "Partnership Planning",
      "Pitch & Proposal Feedback",
      "Professional Introductions",
      "Accountability Check-ins",
      "Milestone Reviews",
      "Resource Prioritization",
    ],
    potentialOutputs: [
      "Scheduled advisory sessions focused on pivotal strategic milestones",
      "Objective pitch deck critiques and structural messaging refinements",
      "Prioritized 90-day execution checklist eliminating non-essential tasks",
      "Direct introductions to specialist advisors and professional peers",
    ],
    contentCaution:
      "Confidential advisory, mentorship, and operational guidance. Does not represent investment commitments, legal counsel, or guaranteed investor introductions.",
    relatedServiceSlugs: [
      "business-strategy-growth-planning",
      "legal-assistance-business-registration",
      "pilot-testing-market-validation",
    ],
  },
];

export const PILLARS: PillarInfo[] = [
  {
    number: "01",
    name: "Position",
    question: "What should we be known for?",
    summary:
      "A clear point of view, a sharper offer and words your customers can recognise themselves in.",
    relatedServices: [
      "Business Strategy & Growth Planning",
      "One-on-One Founder Assistance",
    ],
  },
  {
    number: "02",
    name: "Build",
    question: "How should that show up?",
    summary:
      "An identity, a website and a customer experience that carry the same thought.",
    relatedServices: [
      "Legal Assistance & Business Registration",
      "Technology & Digital Enablement",
      "Pilot Testing & Market Validation",
    ],
  },
  {
    number: "03",
    name: "Grow",
    question: "Where do we go from here?",
    summary:
      "A focused plan for reaching the right people, with room to learn before you spend more.",
    relatedServices: [
      "Marketing & Digital Growth",
      "FMCG Brand & Market Enablement",
      "Distribution & Channel Development",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

