export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Feature {
  icon?: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface IntegrationCategory {
  id: string;
  label: string;
  items: IntegrationItem[];
  heading: string;
  subheading: string;
  description: string;
}

export interface IntegrationItem {
  title: string;
  description: string;
}

export interface AICapability {
  id: string;
  label: string;
  tag: string;
  heading: string;
  description: string;
  bullets: string[];
}

export interface PlatformFeature {
  tag: string;
  heading: string;
  description: string;
  bullets: string[];
  imageRight?: boolean;
}
