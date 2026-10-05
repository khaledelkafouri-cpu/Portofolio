/**
 * Site-wide content and configuration.
 *
 * Anything set to `null` is intentionally unset until the real value is
 * supplied — components hide the related UI rather than rendering a broken
 * or invented link.
 */

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export type SocialLink = {
  label: string;
  href: string | null;
};

export const site = {
  name: "Khaled Elsawy",
  url: siteUrl,
  title: "Khaled Elsawy | Social Media Content Creator & Video Producer",
  description:
    "Khaled Elsawy is a Social Media Content Creator and Video Producer helping founder-led and growing brands turn ideas into consistent, high-quality social content — combining strategy, production, digital marketing and AI-assisted workflows.",
  role: "Social Media Content Creator",
  specialties: ["Video Producer", "Digital Marketing", "AI Content & Systems"],
  intro:
    "I help founder-led and growing brands turn ideas into content that gets noticed — combining strategy, production, publishing and AI-assisted workflows.",

  /** Public path to the CV PDF, e.g. "/cv/khaled-elsawy-cv.pdf". */
  cvUrl: "/cv/khaled-elsawy-cv.pdf" as string | null,
  /** Public contact email. Used for the "Get In Touch" CTA. */
  email: "elsawykhaled662@gmail.com" as string | null,

  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/khaled-elsawy-695463a2/" },
    { label: "Behance", href: "https://www.behance.net/khaledkafouri" },
    { label: "YouTube", href: "https://www.youtube.com/@alexfisher_khaled" },
    { label: "Instagram", href: "https://www.instagram.com/alexfisher_khaled/" },
    { label: "TikTok", href: "https://www.tiktok.com/@alexfisher_khaled" },
    { label: "Facebook", href: "https://www.facebook.com/AlexFisher.Fishing.Vlogs" },
  ] satisfies SocialLink[],

  portrait: {
    src: "/assets/khaled/khaled-elsawy-hero.jpg",
    alt: "Khaled Elsawy smiling, sitting on stone steps at sunset with a camera in hand",
  },
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const metrics = [
  {
    icon: "audience",
    value: "600K+",
    label: "Audience",
    detail: "Across YouTube, Facebook and Instagram",
  },
  {
    icon: "chart",
    value: "Millions",
    label: "of Views",
    detail: "Organic content reaching millions of viewers",
  },
  {
    icon: "education",
    value: "MBA",
    label: "Digital Marketing",
    detail: "University of East London",
  },
  {
    icon: "calendar",
    value: "2020–Present",
    label: "Creator Experience",
    detail: "Content creation, production and brand work",
  },
] as const;

export const processSteps = [
  { icon: "idea", title: "Strategy", detail: "Research, objectives and audience" },
  {
    icon: "script",
    title: "Create",
    detail: "Concepts, scripting, filming and production",
  },
  {
    icon: "video",
    title: "Edit",
    detail: "Editing, motion graphics, sound and AI-assisted production",
  },
  {
    icon: "publish",
    title: "Publish",
    detail: "Platform-specific publishing and optimisation",
  },
  { icon: "chart", title: "Optimise", detail: "Performance analysis and iteration" },
] as const;

export const skillGroups = [
  {
    icon: "video",
    title: "Content Creation & Video Production",
    items: ["Premiere Pro", "After Effects", "Photoshop", "Higgsfield", "Kling", "ElevenLabs"],
  },
  {
    icon: "share",
    title: "Social Media",
    items: ["Instagram", "TikTok", "YouTube", "Facebook"],
  },
  {
    icon: "chart",
    title: "Digital Marketing & Strategy",
    items: ["Google Analytics", "Meta Ads", "SEO", "Content Strategy"],
  },
  {
    icon: "spark",
    title: "AI Systems & Vibe Coding",
    items: ["ChatGPT", "Claude", "Claude Code", "Codex", "VS Code"],
  },
] as const;

export const clientFocus = {
  statement:
    "I work best with founder-led and growing brands that know content matters but need a stronger, more consistent system for creating and publishing it.",
  primary: [
    "Founder-led lifestyle brands",
    "Hospitality brands",
    "Outdoor, sports & travel brands",
  ],
  secondary: ["Education & publishing", "Growing consumer brands"],
} as const;
