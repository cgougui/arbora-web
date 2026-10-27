/**
 * Shape of every piece of user-facing text on the marketing site.
 *
 * Components never hardcode copy: they read it from `copy.ts`, which must
 * satisfy `SiteCopy`. Visual concerns (icons, colors, layout) are keyed off
 * the ids declared here and live in the components themselves.
 */

export type FeatureId =
  | "tree"
  | "search"
  | "preview"
  | "tabs"
  | "sync"
  | "privacy"
  | "automation"
  | "keyboard"
  | "workspaces"
  | "connections"
  | "organize";

export type FeatureGroupId =
  | "browse"
  | "search"
  | "preview"
  | "operations"
  | "workspaces"
  | "connections"
  | "organize"
  | "personalize";

export interface FeatureGroup extends SectionHeading {
  id: FeatureGroupId;
  navLabel: string;
  items: { title: string; description: string }[];
}

export interface MockupScene {
  title: string;
  caption: string;
  breadcrumb: string[];
  secondaryBreadcrumb: string[];
  label: string;
  detail: string;
  rows: { label: string; value: string }[];
}

export type PlatformId = "macos" | "windows" | "linux";

export type FileKind = "folder" | "image" | "video" | "doc" | "code" | "archive" | "audio";

export interface Cta {
  label: string;
  to: string;
}

export interface Meta {
  title: string;
  description: string;
}

export interface SectionHeading {
  eyebrow: string;
  title: string;
  /** Part of `title` rendered with the brand gradient. */
  highlight?: string;
  description: string;
}

export interface Feature {
  id: FeatureId;
  title: string;
  description: string;
  to?: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthly: string;
  yearly: string;
  unit: string;
  cta: Cta;
  features: string[];
  /** Visually emphasised tier. */
  featured?: boolean;
  badge?: string;
}

export interface MockupFile {
  name: string;
  kind: FileKind;
  meta: string;
}

export interface MockupTreeNode {
  label: string;
  children?: MockupTreeNode[];
}

export interface CallToAction {
  title: string;
  highlight?: string;
  description: string;
  primary: Cta;
  secondary: Cta;
}

export interface SiteCopy {
  brand: {
    name: string;
    tagline: string;
  };
  nav: {
    links: Cta[];
    primary: Cta;
    toggleTheme: string;
    openMenu: string;
  };
  footer: {
    blurb: string;
    columns: { title: string; links: Cta[] }[];
    legal: string;
    status: string;
  };
  home: {
    meta: Meta;
    hero: {
      announcement: { label: string; text: string; to: string };
      title: string;
      highlight: string;
      description: string;
      primary: Cta;
      secondary: Cta;
      note: string;
    };
    mockup: {
      windowTitle: string;
      searchPlaceholder: string;
      breadcrumb: string[];
      sidebar: { favorites: string; locations: string; tags: string };
      favorites: string[];
      locations: string[];
      tags: string[];
      tree: MockupTreeNode[];
      files: MockupFile[];
      preview: { title: string; kind: string; rows: { label: string; value: string }[] };
      statusBar: string;
      caption: string;
      workspace: string;
      workspaces: string[];
      tabs: string[];
      columns: string[];
      secondaryFiles: MockupFile[];
      secondaryStatusBar: string;
      actions: string[];
    };
    logos: { title: string; names: string[] };
    features: SectionHeading & { items: Feature[]; link: Cta };
    showcases: (SectionHeading & { id: FeatureGroupId; points: string[]; link: Cta })[];
    steps: SectionHeading & { items: Step[] };
    stats: Stat[];
    testimonials: SectionHeading & { items: Testimonial[] };
    faq: SectionHeading & { items: FaqItem[] };
    cta: CallToAction;
  };
  features: {
    meta: Meta;
    heading: SectionHeading;
    navigationLabel: string;
    groups: FeatureGroup[];
    cta: CallToAction;
  };
  mockups: Record<FeatureGroupId, MockupScene>;
  pricing: {
    meta: Meta;
    heading: SectionHeading;
    billing: { monthly: string; yearly: string; yearlyBadge: string };
    tiers: PricingTier[];
    faq: SectionHeading & { items: FaqItem[] };
  };
  download: {
    meta: Meta;
    heading: SectionHeading;
    platforms: {
      id: PlatformId;
      name: string;
      requirement: string;
      cta: Cta;
      alternatives: string;
    }[];
    note: string;
  };
  notFound: {
    meta: Meta;
    code: string;
    title: string;
    description: string;
    cta: Cta;
  };
  error: {
    title: string;
    description: string;
  };
}
