import type { SiteCopy } from "./schema";

/**
 * All marketing copy for the site.
 *
 * Edit freely: layout and styling live in `app/components`, and TypeScript
 * (via `SiteCopy`) will tell you if a change breaks the expected shape.
 * Everything below is placeholder text for the empty shell.
 */
export const copy = {
  brand: {
    name: "Arbora",
    tagline: "The file explorer, reimagined.",
  },

  nav: {
    links: [
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
      { label: "Download", to: "/download" },
    ],
    signIn: { label: "Sign in", to: "/" },
    primary: { label: "Get Arbora", to: "/download" },
    toggleTheme: "Toggle color scheme",
    openMenu: "Open navigation",
  },

  footer: {
    blurb: "A fast, beautiful home for every file you own — on every device.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", to: "/features" },
          { label: "Pricing", to: "/pricing" },
          { label: "Download", to: "/download" },
          { label: "Changelog", to: "/" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", to: "/" },
          { label: "Blog", to: "/" },
          { label: "Careers", to: "/" },
          { label: "Press kit", to: "/" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", to: "/" },
          { label: "Keyboard shortcuts", to: "/" },
          { label: "Community", to: "/" },
          { label: "Support", to: "/" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", to: "/" },
          { label: "Terms", to: "/" },
          { label: "Security", to: "/" },
        ],
      },
    ],
    legal: "© 2026 Arbora. All rights reserved.",
    status: "All systems normal",
  },

  home: {
    meta: {
      title: "Arbora — The file explorer, reimagined",
      description:
        "Arbora is a fast, beautiful file explorer with instant search, rich previews and a keyboard-first workflow.",
    },
    hero: {
      announcement: { label: "New", text: "Arbora 1.0 is here", to: "/download" },
      title: "Your files, finally",
      highlight: "in full bloom",
      description:
        "Arbora is the file explorer you always wanted: instant search across every drive, rich previews for anything, and a workflow that keeps up with your thinking.",
      primary: { label: "Download for free", to: "/download" },
      secondary: { label: "Explore features", to: "/features" },
      note: "Free for personal use · macOS, Windows & Linux",
    },
    mockup: {
      windowTitle: "Arbora",
      searchPlaceholder: "Search everything…",
      breadcrumb: ["Projects", "Aurora", "Assets"],
      sidebar: { favorites: "Favorites", locations: "Locations", tags: "Tags" },
      favorites: ["Recents", "Desktop", "Documents", "Downloads"],
      locations: ["Macintosh HD", "Studio NAS", "Cloud"],
      tags: ["Client work", "Inspiration", "Archive"],
      tree: [
        {
          label: "Projects",
          children: [
            { label: "Aurora", children: [{ label: "Assets" }, { label: "Exports" }] },
            { label: "Meridian" },
          ],
        },
      ],
      files: [
        { name: "Moodboard", kind: "folder", meta: "48 items" },
        { name: "hero-forest.png", kind: "image", meta: "4.2 MB" },
        { name: "launch-film.mov", kind: "video", meta: "812 MB" },
        { name: "Brand guide.pdf", kind: "doc", meta: "12 MB" },
        { name: "tokens.json", kind: "code", meta: "18 KB" },
        { name: "ambient-loop.wav", kind: "audio", meta: "36 MB" },
        { name: "Icons", kind: "folder", meta: "212 items" },
        { name: "source.zip", kind: "archive", meta: "1.1 GB" },
      ],
      preview: {
        title: "hero-forest.png",
        kind: "PNG image",
        rows: [
          { label: "Dimensions", value: "5120 × 2880" },
          { label: "Modified", value: "Today, 09:41" },
          { label: "Tags", value: "Client work" },
        ],
      },
      statusBar: "8 items · 1 selected · 2.1 TB available",
    },
    logos: {
      title: "Loved by teams who live in their files",
      names: ["Northwind", "Lumen Labs", "Oakline", "Parallax", "Fernhill", "Quartz", "Halcyon", "Vertex"],
    },
    features: {
      eyebrow: "Features",
      title: "Everything a file explorer",
      highlight: "should have been",
      description:
        "Thoughtful tools that disappear into the background, so you can focus on the work inside your files.",
      items: [
        {
          id: "search",
          title: "Instant search",
          description: "Find any file on any drive in milliseconds — by name, content, tag or date.",
        },
        {
          id: "preview",
          title: "Preview anything",
          description: "Images, video, code, PDFs, 3D models and archives, without opening a single app.",
        },
        {
          id: "tree",
          title: "A living tree",
          description: "Navigate deep hierarchies with a sidebar tree that remembers where you've been.",
        },
        {
          id: "tabs",
          title: "Tabs & split panes",
          description: "Work across folders side by side and drag between them effortlessly.",
        },
        {
          id: "keyboard",
          title: "Keyboard-first",
          description: "Every action is one shortcut away, with a command palette for the rest.",
        },
        {
          id: "privacy",
          title: "Private by design",
          description: "Your index never leaves your device. No tracking, no telemetry you didn't ask for.",
        },
      ],
    },
    steps: {
      eyebrow: "How it works",
      title: "Up and running",
      highlight: "in a minute",
      description: "No migration, no new folders. Arbora works with the files you already have.",
      items: [
        { title: "Install", description: "Download Arbora for your platform and open it." },
        { title: "Index", description: "Arbora quietly maps your drives in the background." },
        { title: "Flow", description: "Search, preview and organise at the speed of thought." },
      ],
    },
    stats: [
      { value: "<10ms", label: "Median search time" },
      { value: "300+", label: "Previewable formats" },
      { value: "0", label: "Bytes sent to our servers" },
      { value: "3", label: "Platforms, one experience" },
    ],
    testimonials: {
      eyebrow: "Testimonials",
      title: "People are",
      highlight: "rooting for it",
      description: "Placeholder quotes — replace with real testimonials before launch.",
      items: [
        {
          quote: "I stopped thinking about where files are. I just type, and they're there.",
          name: "Alex Example",
          role: "Product designer",
        },
        {
          quote: "The previews alone saved me hours every week. It feels like the OS finally caught up.",
          name: "Sam Placeholder",
          role: "Video editor",
        },
        {
          quote: "Split panes and keyboard shortcuts that actually make sense. My terminal is jealous.",
          name: "Jordan Sample",
          role: "Software engineer",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions,",
      highlight: "answered",
      description: "Can't find what you're looking for? Reach out to our team.",
      items: [
        {
          question: "Does Arbora replace my system file manager?",
          answer:
            "It can, but it doesn't have to. Arbora works alongside Finder, Explorer or your Linux file manager and respects all of your existing folders.",
        },
        {
          question: "Where is my data stored?",
          answer: "Locally. The search index lives on your device and is never uploaded anywhere.",
        },
        {
          question: "Which platforms are supported?",
          answer: "macOS 13+, Windows 10+ and most modern Linux distributions.",
        },
        {
          question: "Is there a free plan?",
          answer: "Yes — Arbora is free for personal use, forever. Pro unlocks sync and automation.",
        },
      ],
    },
    cta: {
      title: "Give your files",
      highlight: "room to grow",
      description: "Download Arbora today. It's free, and it takes less than a minute.",
      primary: { label: "Download Arbora", to: "/download" },
      secondary: { label: "See pricing", to: "/pricing" },
    },
  },

  features: {
    meta: {
      title: "Features — Arbora",
      description: "Search, previews, tabs, automation and more: everything Arbora can do.",
    },
    heading: {
      eyebrow: "Features",
      title: "Crafted for",
      highlight: "the way you work",
      description: "A tour of the tools that make Arbora feel effortless.",
    },
    groups: [
      {
        eyebrow: "Find",
        title: "Never lose",
        highlight: "a file again",
        description: "Search that understands what you mean, not just what you type.",
        items: [
          { id: "search", title: "Instant search", description: "Placeholder description for instant search." },
          { id: "tree", title: "Smart tree", description: "Placeholder description for the tree view." },
          { id: "keyboard", title: "Command palette", description: "Placeholder description for the palette." },
        ],
      },
      {
        eyebrow: "Work",
        title: "Do more",
        highlight: "without switching apps",
        description: "Preview, compare and move files without breaking your flow.",
        items: [
          { id: "preview", title: "Rich previews", description: "Placeholder description for previews." },
          { id: "tabs", title: "Tabs & panes", description: "Placeholder description for tabs and panes." },
          { id: "automation", title: "Automations", description: "Placeholder description for automations." },
        ],
      },
      {
        eyebrow: "Trust",
        title: "Yours,",
        highlight: "and only yours",
        description: "Fast because it's local. Private because it's yours.",
        items: [
          { id: "privacy", title: "Local-first", description: "Placeholder description for privacy." },
          { id: "sync", title: "Encrypted sync", description: "Placeholder description for sync." },
        ],
      },
    ],
    cta: {
      title: "Ready to",
      highlight: "branch out?",
      description: "Try Arbora free on macOS, Windows or Linux.",
      primary: { label: "Download Arbora", to: "/download" },
      secondary: { label: "Compare plans", to: "/pricing" },
    },
  },

  pricing: {
    meta: {
      title: "Pricing — Arbora",
      description: "Free for personal use. Pro and Team plans for power users and organisations.",
    },
    heading: {
      eyebrow: "Pricing",
      title: "Simple pricing,",
      highlight: "generous free tier",
      description: "Start free. Upgrade when you need sync, automation or your whole team on board.",
    },
    billing: { monthly: "Monthly", yearly: "Yearly", yearlyBadge: "−20%" },
    tiers: [
      {
        id: "free",
        name: "Personal",
        description: "Everything you need to explore your files beautifully.",
        monthly: "$0",
        yearly: "$0",
        unit: "forever",
        cta: { label: "Download", to: "/download" },
        features: ["Instant local search", "Rich previews", "Tabs & split panes", "Light & dark themes"],
      },
      {
        id: "pro",
        name: "Pro",
        description: "For power users who want their setup everywhere.",
        monthly: "$8",
        yearly: "$6",
        unit: "per month",
        cta: { label: "Start free trial", to: "/download" },
        features: [
          "Everything in Personal",
          "Encrypted settings sync",
          "Automations & rules",
          "Network & cloud locations",
          "Priority support",
        ],
        featured: true,
        badge: "Most popular",
      },
      {
        id: "team",
        name: "Team",
        description: "Shared workspaces and admin controls for organisations.",
        monthly: "$14",
        yearly: "$11",
        unit: "per seat / month",
        cta: { label: "Contact sales", to: "/" },
        features: ["Everything in Pro", "Shared tags & saved searches", "SSO & SCIM", "Admin console"],
      },
    ],
    faq: {
      eyebrow: "FAQ",
      title: "Billing",
      highlight: "questions",
      description: "Everything you need to know about plans and payments.",
      items: [
        { question: "Can I switch plans later?", answer: "Placeholder answer about switching plans." },
        { question: "Is there a student discount?", answer: "Placeholder answer about discounts." },
        { question: "What payment methods do you accept?", answer: "Placeholder answer about payments." },
      ],
    },
  },

  download: {
    meta: {
      title: "Download — Arbora",
      description: "Download Arbora for macOS, Windows and Linux.",
    },
    heading: {
      eyebrow: "Download",
      title: "Get Arbora",
      highlight: "for free",
      description: "Pick your platform. Updates are automatic and always free.",
    },
    platforms: [
      {
        id: "macos",
        name: "macOS",
        requirement: "macOS 13 Ventura or later · Universal",
        cta: { label: "Download for Mac", to: "/" },
        alternatives: "Also on Homebrew",
      },
      {
        id: "windows",
        name: "Windows",
        requirement: "Windows 10 or later · x64 & ARM64",
        cta: { label: "Download for Windows", to: "/" },
        alternatives: "Also on winget",
      },
      {
        id: "linux",
        name: "Linux",
        requirement: "AppImage, .deb, .rpm & Flatpak",
        cta: { label: "Download for Linux", to: "/" },
        alternatives: "Also on Flathub",
      },
    ],
    note: "By downloading you agree to the Terms of Service.",
  },

  notFound: {
    meta: { title: "Page not found — Arbora", description: "This page could not be found." },
    code: "404",
    title: "This branch leads nowhere",
    description: "The page you're looking for was moved, renamed or never existed.",
    cta: { label: "Back to home", to: "/" },
  },

  error: {
    title: "Something went wrong",
    description: "An unexpected error occurred. Please try again.",
  },
} satisfies SiteCopy;
