export type CapabilityPillar = "Position" | "Build" | "Grow";

export interface Service {
  number: string; // "01", "02", etc.
  slug: string;
  title: string;
  pillar: CapabilityPillar;
  skill: string;
  coreService: string;
  summary: string;
  businessNeed: string;
  microDetails: string[];
  potentialOutputs: string[];
  contentCaution: string;
  relatedServiceSlugs: string[];
}

export interface PillarInfo {
  number: string;
  name: CapabilityPillar;
  question: string;
  summary: string;
  relatedServices: string[];
}

export interface ApproachStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface InsightArticle {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedDate: string;
  content: string[];
}

