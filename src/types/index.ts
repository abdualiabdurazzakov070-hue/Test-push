export type Language = 'uz' | 'en';

export interface PromptPreset {
  id: string;
  category: string;
  title: string;
  prompt: string;
  model: string;
  tokensPerSec: number;
  latencyMs: number;
  response: string;
  language: string;
}

export interface MetricCard {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  period: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  description: string;
  priceMonthly: number;
  priceAnnual: number;
  tokens: string;
  features: string[];
  cta: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  metric: string;
}
