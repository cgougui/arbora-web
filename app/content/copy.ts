import type { FeatureGroup, SiteCopy } from "./schema";

const featureGroups = [
  {
    id: "browse",
    navLabel: "Browse",
    eyebrow: "Dual panes, Rust core",
    title: "Folders that open before they finish loading",
    description: "A Rust backend reads the disk off the UI thread and streams entries as it finds them. Two panes, tabs, and a fuzzy folder jump put any path a few keystrokes away.",
    items: [
      { title: "Rows before the scan ends", description: "Local folders stream in as they're read. Act on the first entries while the rest arrive." },
      { title: "Never wait on stale work", description: "Navigate away mid-listing and Arbora cancels the old read instead of finishing it." },
      { title: "Dual panes", description: "Source on one side, destination on the other. Copy or move a selection straight across." },
      { title: "Flexible tabs", description: "Reorder, reopen, or move tabs between panes. Loading tabs keep streaming when they move." },
      { title: "Fuzzy folder jumps", description: "Jump to frequently visited local and remote folders, even with a typo." },
      { title: "Path completion", description: "Type a path with completion, follow breadcrumbs, or explore the folder tree." },
      { title: "Three views per pane", description: "Grid, list, or compact, each with its own zoom and sorting. Rows are virtualized." },
      { title: "Live and restored", description: "Local changes refresh automatically. Tabs and history come back on your next launch." },
      { title: "At home on Windows", description: "Browse drives, mapped shares, OneDrive folders, and UNC paths with Explorer-style shortcuts." },
    ],
  },
  {
    id: "search",
    navLabel: "Search",
    eyebrow: "Powered by ripgrep's engine",
    title: "Find the line, not just the file",
    description: "Filter a folder as you type, or search file contents across a whole tree. Results stream in as they're found, and refining a query reuses the walk Arbora already did.",
    items: [
      { title: "Content search on ripgrep", description: "Search inside files with ripgrep's engine, with binary detection and UTF-16 support." },
      { title: "Sensible defaults", description: ".git and node_modules are skipped out of the box. Hidden files and exclusions are yours to set." },
      { title: "Regex and precise filters", description: "Combine regex or wildcards with type, extension, size, date, and folder exclusions." },
      { title: "Matches in context", description: "Read matching lines as snippets, then group results as a tree, by folder, or flat." },
      { title: "Streamed, stoppable results", description: "Work with the first matches immediately. Stop a search and keep what it found." },
      { title: "Search on the server", description: "Over SSH, Arbora runs find and grep on the host when available, and falls back to SFTP." },
      { title: "Type to filter", description: "Narrow the current folder instantly by name, forgiving word order, case, and accents." },
      { title: "Snapshot indexes", description: "Search a saved inventory of a local folder, and rebuild it when the files change." },
    ],
  },
  {
    id: "connections",
    navLabel: "SSH & archives",
    eyebrow: "No FTP client required",
    title: "Your servers, one pane over",
    description: "Open any host from your SSH config and work on it like a local folder. Look inside archives, pull out the one file you need, and package up the rest.",
    items: [
      { title: "SSH in the same panes", description: "Browse, preview, and transfer between local and remote folders side by side." },
      { title: "Your existing SSH config", description: "Reuse OpenSSH aliases, keys, ssh-agent, and jump hosts. Nothing new to configure." },
      { title: "Server-side copies", description: "Copies within the same host stay on the server when it supports them." },
      { title: "ZIPs as folders", description: "Browse local ZIP contents like any folder and copy individual files out." },
      { title: "Look inside archives", description: "Preview TAR, 7z, CAB, and supported compressed files before extracting." },
      { title: "Extract common formats", description: "Unpack ZIP, 7z, CAB, TAR, and compressed streams beside the archive, into a named folder, or anywhere local." },
      { title: "Create archives", description: "Package a selection as ZIP, TAR.GZ, or TAR, or make one archive per selected folder." },
      { title: "AES-256 ZIPs", description: "Encrypt ZIP contents with AES-256. Entry names and sizes remain visible." },
    ],
  },
  {
    id: "personalize",
    navLabel: "Keyboard",
    eyebrow: "Keyboard-first, config as code",
    title: "Drive everything from the keyboard",
    description: "Navigate with Vim keys or desktop shortcuts, reach any action from the command palette, and keep your setup in plain JSON files you can version.",
    items: [
      { title: "Vim or desktop keys", description: "Start from a Vim-style or standard keymap and move without touching the mouse." },
      { title: "Command palette", description: "Find any action by name and learn its shortcut as you go." },
      { title: "Rebind anything", description: "Record bindings, keep alternatives, and catch conflicts in a searchable editor." },
      { title: "Settings as JSON", description: "Preferences and keymaps live in local JSON files you can read, edit, and commit to your dotfiles." },
      { title: "Twelve themes", description: "Pick a palette in light or dark, or follow your system." },
      { title: "Tune the layout", description: "Resize panes and panels, reorder or autosize columns, and choose single-click opening." },
    ],
  },
  {
    id: "preview",
    navLabel: "Preview",
    eyebrow: "Look without launching",
    title: "Read it without opening it",
    description: "Check a file in Quick Preview, step through a folder with the arrow keys, and keep your place. No editor, viewer, or office suite to wait for.",
    items: [
      { title: "Quick Preview and a preview panel", description: "Inspect contents as you browse; step between items with arrow keys." },
      { title: "Code and text", description: "Read with line numbers and search within the preview." },
      { title: "Folders and repos at a glance", description: "See folder and archive contents, file-type breakdowns, sizes, READMEs, and project markers." },
      { title: "Images, media, and PDFs", description: "Inspect pictures, play supported audio and video, and page through PDFs." },
      { title: "Word documents", description: "Read DOC body text and reflowed DOCX content right beside your files." },
      { title: "Slides and spreadsheets", description: "Search PowerPoint slide text and saved Excel values; switch slides or worksheets." },
      { title: "EPUB reading", description: "See covers and book details, browse chapters, and search the text." },
      { title: "Cached thumbnails", description: "Images, PDF pages, EPUB covers, and local videos, with what you selected rendered first." },
    ],
  },
  {
    id: "operations",
    navLabel: "File ops",
    eyebrow: "Bulk changes, reviewed first",
    title: "Change a hundred files. Undo in one step.",
    description: "Preview a batch rename before it runs, follow every transfer, and roll back supported local changes when you get it wrong.",
    items: [
      { title: "Batch rename with a diff", description: "Stack rules, add numbering, inspect every change and collision, then tweak individual names." },
      { title: "Undo supported local changes", description: "Reverse supported file operations, batch renames included, during the current session." },
      { title: "Transfers you can follow", description: "See progress, pause or cancel, read reports, and retry failed work during your session." },
      { title: "Resolve conflicts", description: "Skip, keep both, replace where supported, or merge missing children during copies." },
      { title: "Straight to the other pane", description: "Copy or move a selection directly into the opposite folder." },
      { title: "Select by pattern", description: "Match a filename pattern, select the same extension or type, or invert the selection." },
      { title: "Copy paths and details", description: "Grab names, paths, Markdown links, or spreadsheet-ready metadata from a selection." },
      { title: "Duplicate in place", description: "Make copies beside the originals with free names, leaving your file clipboard intact." },
      { title: "Desktop exchange", description: "Copy files between Arbora and other desktop apps, or drop files into a folder." },
    ],
  },
  {
    id: "workspaces",
    navLabel: "Workspaces",
    eyebrow: "One setup per project",
    title: "A workspace for every repo",
    description: "Give each project its own tabs, layout, theme, and settings. Switch with a shortcut and land exactly where you left off.",
    items: [
      { title: "Save your setup", description: "Keep each workspace's tabs, history, layout, theme, and setting overrides together." },
      { title: "Switch with a key", description: "Use the workspace switcher or a direct shortcut per workspace." },
      { title: "Spread out", description: "Detach a workspace into its own window." },
      { title: "Reusable layouts", description: "Duplicate workspaces, return to a saved layout, and choose a startup default." },
      { title: "Saved searches and collections", description: "Rerun search filters, or gather file references without copying the originals." },
      { title: "Local tags", description: "Label files, reuse suggested tags, and filter the current folder with tag:label." },
    ],
  },
  {
    id: "organize",
    navLabel: "Clean up",
    eyebrow: "Diff, dedupe, reclaim",
    title: "Know what changed and what's taking space",
    description: "Diff two folders, find verified duplicates, and see what's eating the disk. Every change is reviewed before it happens.",
    items: [
      { title: "Compare folders", description: "Diff by path, type, size, and date, with optional SHA-256 content verification." },
      { title: "Reviewed one-way sync", description: "Pick which source entries to copy or replace. Destination-only files are left alone." },
      { title: "Find duplicate contents", description: "Inspect duplicate groups verified with SHA-256. Nothing is deleted automatically." },
      { title: "See what takes space", description: "Explore a size-ranked tree in Clean Folder, then trash what you select where supported." },
      { title: "Details and permissions", description: "Inspect sizes, dates, link targets, and drive capacity; edit Unix permissions where supported." },
      { title: "Terminal here", description: "Open a terminal in the current local folder, use Open With, or set supported default apps." },
      { title: "Create from templates", description: "Make folders, empty files, template-based files, and links where supported." },
      { title: "Smaller PDF copies", description: "Choose Smallest, Balanced, or High quality; keep the originals and see the savings." },
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
    tagline: "The fast, keyboard-first file manager.",
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
    blurb: "A fast, keyboard-first file manager with a Rust core. Dual panes, ripgrep-powered search, and SSH built in.",
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
          { label: "Dual panes", to: "/features#browse" },
          { label: "Content search", to: "/features#search" },
          { label: "SSH and archives", to: "/features#connections" },
        ],
      },
      {
        title: "Get things done",
        links: [
          { label: "Batch rename and undo", to: "/features#operations" },
          { label: "Previews", to: "/features#preview" },
          { label: "Diff and dedupe", to: "/features#organize" },
        ],
      },
      {
        title: "Your setup",
        links: [
          { label: "Keymaps and themes", to: "/features#personalize" },
          { label: "Project workspaces", to: "/features#workspaces" },
        ],
      },
    ],
    legal: "© 2026 Arbora. All rights reserved.",
    status: "Built in Rust",
  },

  home: {
    meta: {
      title: "Arbora — The fast, keyboard-first file manager built in Rust",
      description:
        "A dual-pane file manager with a Rust core. Folders stream in as they load, content search runs on ripgrep's engine, and SSH hosts open right beside your local files.",
    },
    hero: {
      announcement: { label: "Under the hood", text: "See what makes it fast", to: "/features#browse" },
      title: "Built in Rust.",
      highlight: "Keyboard-driven.",
      description:
        "Arbora is a dual-pane file manager that streams folders in as the disk reads them, searches file contents with ripgrep's engine, and opens SSH hosts right beside your local files.",
      primary: { label: "Download Arbora", to: "/download" },
      secondary: { label: "Tour the features", to: "/features" },
      note: "macOS · Windows · Linux · Vim keys · No account, no telemetry",
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
      eyebrow: "Built for developers",
      title: "Everything you need.",
      highlight: "Nothing that slows you down.",
      description:
        "A Rust core does the heavy lifting off the UI thread, so the interface stays responsive while it works through big folders, deep searches, and slow servers.",
      link: { label: "See every feature", to: "/features" },
      items: [
        {
          id: "automation",
          title: "Rust to the core",
          description: "Folders stream in as they're read, and work you've moved on from gets cancelled, not finished.",
          to: "/features#browse",
        },
        {
          id: "search",
          title: "ripgrep under the hood",
          description: "Regex content search across whole trees, with .git and node_modules skipped by default.",
          to: "/features#search",
        },
        {
          id: "connections",
          title: "SSH, zero setup",
          description: "Open hosts from your SSH config, with keys, agent, and jump hosts, right beside local folders.",
          to: "/features#connections",
        },
        {
          id: "keyboard",
          title: "Keyboard-first",
          description: "Vim or desktop keys, a command palette, and keymaps in plain JSON you can version.",
          to: "/features#personalize",
        },
        {
          id: "tabs",
          title: "Dual panes, real tabs",
          description: "Source and destination side by side, with tabs you can move between panes mid-load.",
          to: "/features#browse",
        },
        {
          id: "preview",
          title: "Preview, don't launch",
          description: "Code with line numbers, PDFs, Office docs, media, and repo READMEs, right beside your files.",
          to: "/features#preview",
        },
        {
          id: "sync",
          title: "Bulk edits with undo",
          description: "Preview every batch rename before it runs, then undo supported local changes in one step.",
          to: "/features#operations",
        },
        {
          id: "workspaces",
          title: "A workspace per repo",
          description: "Tabs, layout, theme, and settings saved per project. Switch with a single shortcut.",
          to: "/features#workspaces",
        },
      ],
    },
    showcases: [
      {
        id: "search",
        eyebrow: "Powered by ripgrep's engine",
        title: "Find the line.",
        highlight: "Not just the file.",
        description: "Search file contents across an entire tree with regex and precise filters. Hits stream in as they're found, refining a query reuses the walk already done, and you can stop anytime and keep the results.",
        points: ["Matching lines in context, as a tree or a flat list", ".git and node_modules skipped by default", "Over SSH, find and grep run on the server when available"],
        link: { label: "Explore search", to: "/features#search" },
      },
      {
        id: "connections",
        eyebrow: "SSH, natively",
        title: "Your servers.",
        highlight: "One pane over.",
        description: "Open any host from your ~/.ssh/config and work on it like a local folder. Browse, preview, and copy between your machine and the server side by side. No FTP client, no mounts.",
        points: ["Reuses OpenSSH aliases, keys, ssh-agent, and jump hosts", "Same-host copies stay on the server when supported", "Browse ZIPs like folders; peek inside 7z, TAR, and CAB"],
        link: { label: "Explore SSH and archives", to: "/features#connections" },
      },
      {
        id: "browse",
        eyebrow: "Dual panes, keyboard-first",
        title: "Two panes.",
        highlight: "One keyboard.",
        description: "Source on one side, destination on the other. Navigate with Vim keys or desktop shortcuts, find any command in the palette, and act on a folder's first entries while the rest are still streaming in.",
        points: ["Vim or desktop keymaps, fully rebindable", "Command palette with each action's shortcut", "Fuzzy jumps to frequent folders, local or remote"],
        link: { label: "Explore navigation", to: "/features#browse" },
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
      title: "Questions developers",
      highlight: "ask first",
      description: "How Arbora works, what it touches, and how it fits into your setup.",
      items: [
        {
          question: "What actually makes Arbora fast?",
          answer:
            "A Rust and Tokio backend does filesystem work off the UI thread. Local folders stream in batches, so you can act on the first entries before the scan finishes. Navigating away cancels the old read, thumbnails for your selection jump the queue and are cached, and only visible rows are rendered.",
        },
        {
          question: "How does SSH work?",
          answer:
            "Arbora reads your OpenSSH config, so aliases, keys, ssh-agent, and jump hosts work as they already do in your terminal. Authentication uses keys or an agent, with no password prompts. When GNU find and grep are available on the host, recursive searches run there instead of over the wire.",
        },
        {
          question: "Can I drive it entirely from the keyboard?",
          answer:
            "That's the idea. Choose a Vim-style or standard keymap, reach any action from the command palette, and record your own bindings in a searchable editor. Keymaps and preferences live in local JSON files you can edit by hand or keep in your dotfiles.",
        },
        {
          question: "Does Arbora phone home?",
          answer:
            "No. There's no account and no telemetry. Your settings, tags, and indexes stay on your machine, and the only network connections Arbora makes are to the SSH hosts you open.",
        },
        {
          question: "Does it replace Finder, Explorer, or Nautilus?",
          answer:
            "It can, but it doesn't have to. Arbora works alongside your system file manager on the folders you already have. There's nothing to import and no new folder structure.",
        },
        {
          question: "What if a batch operation goes wrong?",
          answer:
            "Batch rename shows every new name and collision before anything changes. After that, you can undo supported local file operations, including batch renames, during the current session.",
        },
      ],
    },
    cta: {
      title: "Point it at your",
      highlight: "biggest folder.",
      description: "Download Arbora, open the folder you dread opening, and watch it stream in. Then open the command palette and look around.",
      primary: { label: "Download Arbora", to: "/download" },
      secondary: { label: "See every feature", to: "/features" },
    },
  },

  features: {
    meta: {
      title: "Features — Arbora",
      description: "Everything in Arbora: a Rust core with streamed folders, ripgrep-powered content search, native SSH, Vim keys, rich previews, batch rename with undo, folder diffs, and more.",
    },
    heading: {
      eyebrow: "Features",
      title: "Fast where it counts.",
      highlight: "Thorough everywhere else.",
      description: "Arbora's killer features come first: a streaming Rust core, ripgrep-powered search, native SSH, and keyboard control. After that, everything else it does today.",
    },
    navigationLabel: "Explore features by category",
    groups: featureGroups,
    cta: {
      title: "Stop waiting on",
      highlight: "your file manager.",
      description: "A Rust core, ripgrep-powered search, and your SSH hosts one pane over. Try it on the folders you actually work in.",
      primary: { label: "Download Arbora", to: "/download" },
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
      caption: "Content search with matching lines in context",
      breadcrumb: ["Projects", "Aurora"],
      secondaryBreadcrumb: ["Search results"],
      label: "max_retries",
      detail: "File contents · Subfolders · Skipping .git, node_modules",
      rows: [
        { label: "src/net/client.rs", value: "let max_retries = config.max_retries.unwrap_or(3);" },
        { label: "config/default.toml", value: "max_retries = 5 # per request" },
        { label: "docs/networking.md", value: "Set max_retries to 0 to disable retries." },
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
      detail: "From ~/.ssh/config · ssh-agent",
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
  screenshot: {
    enlarge: "View larger",
    enlargeLabel: "view larger screenshot",
    close: "Close screenshot",
    previous: "Previous screenshot",
    next: "Next screenshot",
  },
} satisfies SiteCopy;
