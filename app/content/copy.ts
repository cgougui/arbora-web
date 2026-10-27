import type { FeatureGroup, SiteCopy } from "./schema";

const featureGroups = [
  {
    id: "browse",
    navLabel: "Browse",
    eyebrow: "A little more breathing room",
    title: "Browse with room to work",
    description: "Keep the folders you need in view, find your way through deep paths, and settle into a layout that works for you.",
    items: [
      { title: "Dual panes", description: "Keep source and destination side by side." },
      { title: "Flexible tabs", description: "Reorder, reopen, or move tabs between panes." },
      { title: "Familiar navigation", description: "Follow breadcrumbs, explore folder trees, and complete paths as you type." },
      { title: "Smarter folder jumps", description: "Find frequently visited local and remote folders, even with a typo." },
      { title: "Your places", description: "Pin folders, reorder shortcuts, and choose their names, icons, and colors." },
      { title: "Three ways to browse", description: "Switch between grid, list, and compact views, with independent zoom and sorting per pane." },
      { title: "Pick up where you left off", description: "Restore tabs and navigation history when you return." },
      { title: "Useful entries sooner", description: "Start browsing local folders while more entries load; local changes refresh automatically." },
      { title: "Familiar on Windows", description: "Browse drives, mapped shares, OneDrive folders, and UNC paths with Explorer-style shortcuts." },
    ],
  },
  {
    id: "search",
    navLabel: "Find",
    eyebrow: "Less digging, more doing",
    title: "Find the file. Keep your focus.",
    description: "Filter what is in front of you or look deeper. Start with a few words, then get as precise as the task needs.",
    items: [
      { title: "Type to filter", description: "Narrow the current folder by filename, with forgiving word order, case, and accents." },
      { title: "Quick filters", description: "Show specific file types or items modified today or this week, with matching counts." },
      { title: "Search deeper", description: "Find names or text inside files, in this folder or across subfolders." },
      { title: "Precise filters", description: "Combine wildcards or regex with type, extension, size, date, and folder exclusions." },
      { title: "Matches in context", description: "Read content snippets and choose tree, grouped, or flat results." },
      { title: "Search as results arrive", description: "Review streamed matches; stop a search and keep what it found." },
      { title: "Saved local inventories", description: "Search a folder snapshot and rebuild it when files change." },
    ],
  },
  {
    id: "preview",
    navLabel: "Preview",
    eyebrow: "A closer look, right here",
    title: "Preview before you open",
    description: "Check the image, read the document, or find the right chapter without losing your place among your files.",
    items: [
      { title: "Quick Preview and a preview panel", description: "Inspect contents as you browse; step between items with arrow keys." },
      { title: "Text and code", description: "Read with line numbers and find text within the preview." },
      { title: "Images, media, and PDFs", description: "Inspect pictures, play supported audio and video, and browse PDF pages." },
      { title: "Word documents", description: "Read DOC body text and reflowed DOCX content right beside your files." },
      { title: "Slides and spreadsheets", description: "Search PowerPoint slide text and saved Excel values; switch slides or worksheets." },
      { title: "EPUB reading", description: "See covers and book details, browse chapters, and search the text." },
      { title: "Folders at a glance", description: "Browse folder and archive contents, file-type breakdowns, sizes, READMEs, and project markers." },
      { title: "Visual thumbnails", description: "Recognize images, PDF first pages, EPUB covers, and supported local videos at a glance." },
    ],
  },
  {
    id: "operations",
    navLabel: "File work",
    eyebrow: "The everyday, taken care of",
    title: "Make everyday file work easier",
    description: "Move a selection, tidy a hundred filenames, or handle a transfer. Keep the next step clear and the details within reach.",
    items: [
      { title: "Straight to the other pane", description: "Copy or move a selection directly into the opposite folder." },
      { title: "Desktop exchange", description: "Copy local files between Arbora and desktop apps, or drop files into a folder." },
      { title: "Duplicate in place", description: "Make copies beside the originals with available names, keeping your file clipboard intact." },
      { title: "Resolve conflicts", description: "Skip, keep both, replace where supported, or merge missing children during copies." },
      { title: "Transfers you can follow", description: "See progress, pause or cancel, review reports, and retry failed work during your session." },
      { title: "Undo supported local changes", description: "Reverse supported file operations, including batch renames, during the current session." },
      { title: "Batch rename with a preview", description: "Stack naming rules, add numbering, inspect differences and collisions, and tweak individual names." },
      { title: "Copy useful details", description: "Grab names, paths, Markdown links, or spreadsheet-ready metadata from your selection." },
      { title: "Select smarter", description: "Match a filename pattern, select the same extension or type, or invert your selection." },
    ],
  },
  {
    id: "workspaces",
    navLabel: "Workspaces",
    eyebrow: "A place for each kind of work",
    title: "A workspace for every project",
    description: "Leave each project arranged just how you need it. Switch contexts with your folders, searches, and preferences together.",
    items: [
      { title: "Save your setup", description: "Keep each workspace's tabs, history, layout, theme, and chosen setting overrides together." },
      { title: "Switch projects", description: "Use the workspace switcher or direct keyboard shortcuts." },
      { title: "Spread out", description: "Detach a workspace into its own window." },
      { title: "Reusable layouts", description: "Duplicate workspaces, return to a saved layout, and choose a startup default." },
      { title: "Saved searches and collections", description: "Reuse search filters or gather file references without copying the originals." },
      { title: "Local tags", description: "Label files, reuse suggested tags, and filter the current folder by label." },
    ],
  },
  {
    id: "connections",
    navLabel: "Remote & archives",
    eyebrow: "A familiar view, wherever the files are",
    title: "Local, remote, and packed away",
    description: "Bring server folders into your everyday view, look inside an archive, and choose exactly what to transfer or unpack.",
    items: [
      { title: "SSH in the same panes", description: "Browse servers and transfer files between local and remote folders." },
      { title: "Your existing SSH setup", description: "Reuse OpenSSH aliases, keys, agent authentication, and jump hosts." },
      { title: "ZIPs as folders", description: "Browse local ZIP contents and copy individual files out." },
      { title: "Look inside archives", description: "Preview TAR, 7z, CAB, and supported compressed files before extracting." },
      { title: "Create archives", description: "Package a selection as ZIP, TAR.GZ, or TAR, or make one archive per selected folder." },
      { title: "Password-protected ZIP creation", description: "Encrypt file contents with AES-256; entry names remain visible." },
      { title: "Extract common formats", description: "Unpack local ZIP, 7z, CAB, TAR, and supported compressed streams." },
      { title: "Choose where to unpack", description: "Extract beside an archive, into a named folder, or to another local destination." },
    ],
  },
  {
    id: "organize",
    navLabel: "Organize",
    eyebrow: "A clearer picture of your files",
    title: "Bring order to busy folders",
    description: "See what differs, what is duplicated, and what takes up space. Review the details before deciding what comes next.",
    items: [
      { title: "Compare folders", description: "Inspect differences by path, type, size, and date, with optional SHA-256 content verification." },
      { title: "Reviewed one-way sync", description: "Choose which source entries to copy or replace, keeping destination-only files." },
      { title: "Find duplicate contents", description: "Inspect duplicate groups verified with SHA-256." },
      { title: "See what takes space", description: "Explore Clean Folder's size-ranked tree, then trash selected items where supported." },
      { title: "Smaller PDF copies", description: "Choose Smallest, Balanced, or High quality; keep the originals and see the savings." },
      { title: "Create from templates", description: "Make folders, empty documents, template-based files, and links where supported." },
      { title: "Details when you need them", description: "Inspect sizes, dates, link targets, and drive capacity; edit Unix permissions where supported." },
      { title: "Your desktop tools", description: "Choose Open With, set supported default apps, or launch a terminal in the current local folder." },
    ],
  },
  {
    id: "personalize",
    navLabel: "Make it yours",
    eyebrow: "Your habits, welcome here",
    title: "Make it feel like yours",
    description: "Choose your colors, bring your keyboard habits, and adjust the little things that make a tool feel at home.",
    items: [
      { title: "Twelve themes", description: "Choose a palette in light or dark mode, or follow your system's style." },
      { title: "Desktop or Vim keys", description: "Use familiar shortcuts or navigate with Vim-style commands." },
      { title: "Shortcuts you control", description: "Record custom bindings, keep alternatives, and check conflicts in a searchable editor." },
      { title: "Command palette", description: "Find actions by name and see their current shortcuts." },
      { title: "Adjust the details", description: "Resize panes and panels, reorder or autosize columns, and choose single-click opening." },
      { title: "Editable local settings", description: "Keep preferences and keyboard maps in local JSON files you can inspect and edit." },
    ],
  },
] satisfies FeatureGroup[];

/**
 * All marketing copy for the site.
 *
 * Edit freely: layout and styling live in `app/components`, and TypeScript
 * (via `SiteCopy`) will tell you if a change breaks the expected shape.
 * Home and features copy is based on the product feature inventory.
 * Mockup filenames and interface examples are illustrative.
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
    primary: { label: "Get Arbora", to: "/download" },
    toggleTheme: "Toggle color scheme",
    openMenu: "Open navigation",
  },

  footer: {
    blurb: "Room for your files. Space for your work. A file explorer that fits the way you think.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", to: "/features" },
          { label: "Pricing", to: "/pricing" },
          { label: "Download", to: "/download" },
        ],
      },
      {
        title: "Explore",
        links: [
          { label: "Browse your files", to: "/features#browse" },
          { label: "Search and filter", to: "/features#search" },
          { label: "Preview contents", to: "/features#preview" },
        ],
      },
      {
        title: "Get things done",
        links: [
          { label: "Everyday file work", to: "/features#operations" },
          { label: "SSH and archives", to: "/features#connections" },
          { label: "Organize folders", to: "/features#organize" },
        ],
      },
      {
        title: "Your setup",
        links: [
          { label: "Project workspaces", to: "/features#workspaces" },
          { label: "Themes and shortcuts", to: "/features#personalize" },
        ],
      },
    ],
    legal: "© 2026 Arbora. All rights reserved.",
    status: "Room for your way of working",
  },

  home: {
    meta: {
      title: "Arbora — A file explorer with room to work",
      description:
        "Browse side by side, find files and content, preview documents, and keep a workspace for every project. Meet Arbora, a file explorer with room to work.",
    },
    hero: {
      announcement: { label: "Meet Arbora", text: "A little more room to work", to: "/features" },
      title: "Less file juggling.",
      highlight: "More room to work.",
      description:
        "Your folders side by side. The right file within reach. Previews, transfers, and project workspaces that help you get on with your day.",
      primary: { label: "Get Arbora", to: "/download" },
      secondary: { label: "Explore features", to: "/features" },
      note: "Local folders · SSH servers · Archives · Your way of working",
    },
    mockup: {
      windowTitle: "Arbora",
      searchPlaceholder: "Filter this folder…",
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
      statusBar: "8 items · 1 selected",
      caption: "Illustrative mockup",
      workspace: "Workspace",
      workspaces: ["Aurora", "Personal", "Development"],
      tabs: ["Assets", "Documents"],
      columns: ["Name", "Size", "Modified"],
      secondaryFiles: [
        { name: "Campaign", kind: "folder", meta: "6 items" },
        { name: "Social", kind: "folder", meta: "12 items" },
        { name: "hero-forest.png", kind: "image", meta: "4.2 MB" },
        { name: "Brand guide.pdf", kind: "doc", meta: "12 MB" },
        { name: "launch-notes.md", kind: "code", meta: "6 KB" },
      ],
      secondaryStatusBar: "5 items · Ready for the next step",
      actions: ["Copy to other pane", "Move to other pane", "Quick Preview"],
    },
    logos: {
      title: "Loved by teams who live in their files",
      names: ["Northwind", "Lumen Labs", "Oakline", "Parallax", "Fernhill", "Quartz", "Halcyon", "Vertex"],
    },
    features: {
      eyebrow: "A calmer kind of file work",
      title: "A lot to do.",
      highlight: "One place to do it.",
      description:
        "From a quick folder jump to a project-wide cleanup, keep the tools you need close to the files you are working on.",
      link: { label: "Explore all features", to: "/features" },
      items: [
        {
          id: "tabs",
          title: "Room to browse",
          description: "Two panes, flexible tabs, and your favorite places. Keep source and destination in sight.",
          to: "/features#browse",
        },
        {
          id: "search",
          title: "Find your focus",
          description: "Filter a folder as you type or search names and file contents across subfolders.",
          to: "/features#search",
        },
        {
          id: "preview",
          title: "Look before you open",
          description: "Read documents, inspect images, browse archives, and check code beside your files.",
          to: "/features#preview",
        },
        {
          id: "automation",
          title: "Make the everyday easier",
          description: "Copy to the other pane, follow transfers, and preview a batch rename before applying it.",
          to: "/features#operations",
        },
        {
          id: "workspaces",
          title: "A place for each project",
          description: "Save tabs, layouts, and preferences together. Return to a workspace ready to pick up.",
          to: "/features#workspaces",
        },
        {
          id: "connections",
          title: "Beyond local folders",
          description: "Browse SSH servers in the same panes and work with files packed inside archives.",
          to: "/features#connections",
        },
        {
          id: "organize",
          title: "A little more order",
          description: "Compare folders, inspect verified duplicates, and see where your space is going.",
          to: "/features#organize",
        },
        {
          id: "keyboard",
          title: "Comfortably yours",
          description: "Twelve themes, custom shortcuts, and desktop or Vim keys. Settle into your own rhythm.",
          to: "/features#personalize",
        },
      ],
    },
    showcases: [
      {
        id: "browse",
        eyebrow: "See both sides",
        title: "Two folders.",
        highlight: "One clear view.",
        description: "Keep the source on one side and the destination on the other. Give each pane its own tabs, view, zoom, and sorting, then copy or move a selection straight across.",
        points: ["Grid, list, and compact views", "Folder trees, breadcrumbs, and pinned places", "Tabs and history restored when you return"],
        link: { label: "Find your way around", to: "/features#browse" },
      },
      {
        id: "search",
        eyebrow: "Stay on the trail",
        title: "A few words.",
        highlight: "The file you need.",
        description: "Start typing to narrow a busy folder. For a deeper search, look inside files, combine precise filters, and read matching text in context as results arrive.",
        points: ["Forgiving filename filtering", "Content search across subfolders", "Saved filters and local folder inventories"],
        link: { label: "Explore search and filters", to: "/features#search" },
      },
      {
        id: "preview",
        eyebrow: "Keep your place",
        title: "Open fewer apps.",
        highlight: "See more of your files.",
        description: "Check a PDF, read a Word document, browse a spreadsheet, or step through photos. Quick Preview and the preview panel bring the contents to you.",
        points: ["Text, code, images, and supported media", "PDFs, Office documents, and EPUB books", "Folder and archive contents at a glance"],
        link: { label: "Take a closer look", to: "/features#preview" },
      },
    ],
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
      title: "A few things",
      highlight: "you might be wondering",
      description: "A closer look at how Arbora fits into your everyday file work.",
      items: [
        {
          question: "Does Arbora replace my system file manager?",
          answer:
            "It can, but it doesn't have to. Arbora works alongside Finder, Explorer or your Linux file manager and respects all of your existing folders.",
        },
        {
          question: "Can I work with files on a server?",
          answer: "Yes. Browse SSH servers in the same panes as your local folders and transfer files between them. Arbora can reuse OpenSSH aliases, keys, agent authentication, and jump hosts.",
        },
        {
          question: "What can I preview?",
          answer: "Preview text and code, images, supported audio and video, PDFs, DOC and DOCX documents, PowerPoint slide text, saved Excel values, and EPUB books. You can also inspect folder and archive contents. Available previews depend on the file type and supported format.",
        },
        {
          question: "Can I undo file operations?",
          answer: "Arbora can undo supported local file operations, including batch renames, during the current session. Batch rename also lets you review name changes and collisions before applying them.",
        },
        {
          question: "Can I bring my keyboard habits?",
          answer: "Use familiar desktop shortcuts or Vim-style navigation. Record custom bindings, keep alternative shortcuts, and check conflicts in a searchable editor. The command palette helps you find actions and see their current shortcuts.",
        },
      ],
    },
    cta: {
      title: "Make room for",
      highlight: "your next project.",
      description: "Bring your folders, your keyboard habits, and your way of working. Arbora has room for all of them.",
      primary: { label: "Get Arbora", to: "/download" },
      secondary: { label: "Explore all features", to: "/features" },
    },
  },

  features: {
    meta: {
      title: "Features — Arbora",
      description: "Explore Arbora's dual panes, file and content search, rich previews, project workspaces, SSH, archives, folder tools, and custom shortcuts.",
    },
    heading: {
      eyebrow: "Features",
      title: "Your files. Your projects.",
      highlight: "Your way of working.",
      description: "The everyday essentials and the thoughtful details. Explore everything that helps you browse, find, preview, and bring order to your files.",
    },
    navigationLabel: "Explore features by category",
    groups: featureGroups,
    cta: {
      title: "Your next project,",
      highlight: "a little more organized.",
      description: "From the first folder to the final handoff, give yourself room to work.",
      primary: { label: "Get Arbora", to: "/download" },
      secondary: { label: "Back to home", to: "/" },
    },
  },

  mockups: {
    browse: {
      title: "Aurora · Dual panes",
      caption: "Source and destination, side by side",
      breadcrumb: ["Projects", "Aurora", "Assets"],
      secondaryBreadcrumb: ["Projects", "Aurora", "Exports"],
      label: "Dual panes",
      detail: "A place for the files you are working with, and where they are going.",
      rows: [],
    },
    search: {
      title: "Aurora · Search",
      caption: "Content search with matches in context",
      breadcrumb: ["Projects", "Aurora"],
      secondaryBreadcrumb: ["Search results"],
      label: "launch",
      detail: "File contents · Include subfolders",
      rows: [
        { label: "launch-notes.md", value: "The launch assets are ready for review." },
        { label: "Brand guide.pdf", value: "Use the primary palette for the launch campaign." },
        { label: "project-brief.docx", value: "Prepare the final launch materials for handoff." },
      ],
    },
    preview: {
      title: "Aurora · Preview",
      caption: "A closer look without leaving your files",
      breadcrumb: ["Projects", "Aurora", "Assets"],
      secondaryBreadcrumb: ["Preview"],
      label: "hero-forest.png",
      detail: "PNG image",
      rows: [
        { label: "Dimensions", value: "5120 × 2880" },
        { label: "Size", value: "4.2 MB" },
        { label: "Modified", value: "Today, 09:41" },
      ],
    },
    operations: {
      title: "Aurora · Batch rename",
      caption: "Review new names before applying a batch rename",
      breadcrumb: ["Projects", "Aurora", "Assets"],
      secondaryBreadcrumb: ["Rename preview"],
      label: "Batch rename",
      detail: "Replace spaces · Add numbering",
      rows: [
        { label: "Forest hero.png", value: "01-forest-hero.png" },
        { label: "Brand guide.pdf", value: "02-brand-guide.pdf" },
        { label: "Launch film.mov", value: "03-launch-film.mov" },
      ],
    },
    workspaces: {
      title: "Aurora · Workspaces",
      caption: "Keep a separate setup for every project",
      breadcrumb: ["Projects", "Aurora", "Assets"],
      secondaryBreadcrumb: ["Workspaces"],
      label: "Your workspaces",
      detail: "Tabs, layouts, and preferences together",
      rows: [
        { label: "Aurora", value: "Assets · Exports" },
        { label: "Personal", value: "Documents · Photos" },
        { label: "Development", value: "Source · Build" },
      ],
    },
    connections: {
      title: "Aurora · Local + SSH",
      caption: "Local files and an SSH server in the same view",
      breadcrumb: ["Projects", "Aurora", "Assets"],
      secondaryBreadcrumb: ["SSH: studio", "var", "www", "aurora"],
      label: "SSH · studio",
      detail: "OpenSSH alias · Key authentication",
      rows: [],
    },
    organize: {
      title: "Aurora · Clean Folder",
      caption: "See what takes space before deciding what to remove",
      breadcrumb: ["Projects", "Aurora"],
      secondaryBreadcrumb: ["Clean Folder"],
      label: "Folder size breakdown",
      detail: "Aurora · 3.6 GB",
      rows: [
        { label: "Video", value: "2.4 GB" },
        { label: "Archives", value: "860 MB" },
        { label: "Images", value: "280 MB" },
        { label: "Documents", value: "60 MB" },
      ],
    },
    personalize: {
      title: "Aurora · Appearance",
      caption: "A palette and a way of working that feel like yours",
      breadcrumb: ["Projects", "Aurora", "Assets"],
      secondaryBreadcrumb: ["Settings", "Appearance"],
      label: "Find your colors",
      detail: "Twelve themes · Light, dark, or system",
      rows: [
        { label: "Forest", value: "#34d399" },
        { label: "Ocean", value: "#22d3ee" },
        { label: "Lavender", value: "#a78bfa" },
        { label: "Rose", value: "#f472b6" },
        { label: "Sand", value: "#fbbf24" },
        { label: "Slate", value: "#94a3b8" },
      ],
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
