const docsHref = "https://docs.boldvideo.com/";

export const announcementMessages = [
  "Growing out of Kajabi?",
  "Scaling past Circle?",
  "Outgrowing Teachable?",
];

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Docs", href: docsHref },
];

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "About", href: "/about" },
      { label: "Docs", href: docsHref },
      { label: "Migrate", href: "/migrate" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/boldvideo/",
      },
      { label: "Twitter", href: "https://twitter.com/boldvid" },
      { label: "Email", href: "mailto:support@boldvideo.com" },
    ],
  },
];

export const footerMetaLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "mailto:support@boldvideo.com" },
];

export const heroChatScenarios = [
  {
    query:
      "My student is stuck on pricing her SaaS. She crossed $40k MRR but feels like she is leaving money on the table.",
    context: "SaaS founder · $40k MRR · growth stage",
    answer: [
      { text: "Two frameworks address this directly. ", strong: true },
      {
        text: "Anchor the conversation on customer ROI. If your product saves them $50K a year, a $500 monthly price point stops feeling aggressive and starts feeling obvious. ",
      },
      { text: "Do not compete on cost. Compete on the math.", strong: true },
    ],
    citations: [
      { title: "Value-Based Pricing", timestamp: "14:23" },
      { title: "Pricing Teardown", timestamp: "08:47" },
      { title: "Niche Focuser", timestamp: "46:15" },
    ],
  },
  {
    query:
      "How do I find my customer's deepest emotional drivers? Our copy is not converting.",
    context: "Program owner · copy · advanced",
    answer: [
      {
        text: "Start with frustrations and wants. That is table stakes. ",
        strong: true,
      },
      {
        text: "Then push below the line into fear and aspiration. When someone says they are overworked, the real fear may be missing their family while building the business. ",
      },
      { text: "That is where persuasive copy actually lives.", strong: true },
    ],
    citations: [
      { title: "Niche Focuser", timestamp: "36:22" },
      { title: "Hot Button Issues", timestamp: "44:18" },
      { title: "Content Framework", timestamp: "12:05" },
    ],
  },
  {
    query:
      "Our library has 85% non-engagement. How do other programs fix discoverability?",
    context: "L&D director · 500+ students",
    answer: [
      { text: "This is the content graveyard problem. ", strong: true },
      {
        text: "The fix is a layered one: make every lesson searchable by concept, route students to the exact moment the answer appears, and connect implementation tools to the lesson so learning becomes action. ",
      },
      { text: "Bold closes all three loops.", strong: true },
    ],
    citations: [
      { title: "Scaling Libraries", timestamp: "22:10" },
      { title: "Implementation Gap", timestamp: "07:33" },
      { title: "Content ROI", timestamp: "31:45" },
    ],
  },
];

export const showcaseItems = [
  {
    name: "HRT University",
    category: "Healthcare",
    description:
      "Clinical education with always-on answers grounded in the curriculum.",
    mark: "HRTU",
    preview: "97+ lessons indexed into a cited teaching assistant.",
    backgroundClassName: "bg-[linear-gradient(145deg,#3d2b1d_0%,#1a0f08_100%)]",
  },
  {
    name: "FounderWell",
    category: "SaaS coaching",
    description:
      "Growth frameworks, pricing lessons, and positioning systems made searchable.",
    mark: "FounderWell",
    preview:
      "Support load drops while students get instant implementation help.",
    backgroundClassName: "bg-[linear-gradient(145deg,#1a1a2e_0%,#10141e_100%)]",
  },
  {
    name: "Viva Tuition",
    category: "Music education",
    description:
      "Technique and practice instruction delivered with timestamped precision.",
    mark: "Viva",
    preview:
      "A deep training library becomes a real-time coach for every student.",
    backgroundClassName: "bg-[linear-gradient(145deg,#e8f0f8_0%,#cfdbe7_100%)]",
  },
];

export const painStats = [
  {
    value: "85%",
    label: "Content unused",
    description:
      "Hundreds of hours of teaching exist, but students only ever reach a fraction of it. The rest becomes expensive archive material.",
  },
  {
    value: "10x",
    label: "Repeat questions",
    description:
      "Coaches answer the same implementation blockers on repeat, and every extra hire increases cost without fixing discoverability.",
  },
  {
    value: "60%",
    label: "Renewal ceiling",
    description:
      "Students love the content but churn anyway because the gap is not quality. It is guided support at scale.",
  },
];

export const valueFeatures = [
  {
    eyebrow: "Intelligence reports",
    theme: "insight" as const,
    title: "Every video is understood, not just transcribed",
    description:
      "Bold extracts structured understanding for every lesson: what it teaches, what it answers, and where the implementation friction lives. The model knows your library conceptually, not just by keyword frequency.",
  },
  {
    eyebrow: "Viewer context",
    theme: "context" as const,
    title: "Same question in, different answer out",
    description:
      "Bold knows who is asking. Beginners get foundations. Advanced students get nuance. The system adapts the answer to stage, role, and progress without losing the original source material.",
  },
  {
    eyebrow: "Bounded synthesis",
    theme: "synthesis" as const,
    title: "Accurate citations instead of hallucinated advice",
    description:
      "Two-tier retrieval narrows to the right lessons before synthesis begins. Every answer stays inside that evidence set, then returns timestamped citations anyone can verify.",
  },
];

export const fitItems = [
  { good: true, label: "Coaching programs with 50+ hours of video content" },
  { good: true, label: "Training academies with 100+ active students" },
  { good: false, label: "Individual creators with fewer than 50 videos" },
  { good: false, label: "Programs built mostly around written content" },
  {
    good: true,
    label: "Teams feeling churn despite strong curriculum quality",
  },
  { good: false, label: "Anyone shopping for cheap video hosting" },
];
