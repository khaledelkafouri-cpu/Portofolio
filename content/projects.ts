/**
 * Project / case-study content.
 *
 * Every project page and card reads from this file — add a new entry here to
 * add a project. Images without a `src` render as labelled placeholders until
 * the real asset is added to /public/assets/<project>/.
 */

export type MediaAsset = {
  /** Public path, e.g. "/assets/costa/cover.jpg". Omit until the real asset exists. */
  src?: string;
  alt: string;
  /** Short description of the intended shot — shown on the placeholder. */
  label: string;
  /** CSS object-position, e.g. "50% 10%". */
  position?: string;
  /** "contain" shows the whole image on the project backdrop (e.g. product cut-outs). Default "cover". */
  fit?: "cover" | "contain";
};

/** Background tone painted behind transparent images and placeholders. */
export type ProjectTone = "sea" | "studio" | "espresso";

export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  role: string;
  /** Project type shown on cards, e.g. "Creator Brand". */
  category: string;
  description: string;
  /** First two are shown on cards. */
  tags: string[];
  /** Small badge in the card header: a logo image, or initials when no logo is supplied. */
  badge: { logo?: MediaAsset; initials: string };
  tone: ProjectTone;
  /** Main card / case-study image. */
  hero: MediaAsset;
  /** Exactly three supporting images — the 1 large + 3 small card composition. */
  supporting: [MediaAsset, MediaAsset, MediaAsset];
  gallery?: MediaAsset[];
  videoUrl?: string;
  /** Main project website. */
  externalUrl?: string;
  /** Other public profiles for the project, e.g. channels. */
  links?: { label: string; href: string }[];
  year?: string;
  metrics?: { value: string; label: string }[];
  featured: boolean;
  caseStudySections?: CaseStudySection[];
};

export const projects: Project[] = [
  {
    slug: "alexfisher",
    title: "AlexFisher",
    client: "AlexFisher (own creator brand)",
    role: "Founder, video producer & social media creator",
    category: "Creator Brand",
    description:
      "Content around fishing, adventure and outdoor lifestyle — combining real experiences, useful knowledge and audience-focused storytelling.",
    tags: ["YouTube", "Lifestyle"],
    year: "2020–Present",
    externalUrl: "https://www.alexfisherofficial.com/",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/@alexfisher_khaled" },
      { label: "Instagram", href: "https://www.instagram.com/alexfisher_khaled/" },
      { label: "TikTok", href: "https://www.tiktok.com/@alexfisher_khaled" },
      { label: "Facebook", href: "https://www.facebook.com/AlexFisher.Fishing.Vlogs" },
    ],
    badge: { initials: "AF" },
    tone: "sea",
    hero: {
      src: "/assets/alexfisher/alexfisher-catch-sunset.webp",
      alt: "Khaled as AlexFisher on a boat at sunset, holding up a large silver fish in front of the sea and cliffs",
      label: "Khaled / AlexFisher on the water",
      position: "38% 50%",
    },
    supporting: [
      {
        src: "/assets/alexfisher/alexfisher-reel.webp",
        alt: "Close-up of a spinning fishing reel on a rod, with the sea behind",
        label: "Fishing reel",
      },
      {
        src: "/assets/alexfisher/alexfisher-underwater.webp",
        alt: "Underwater shot of a school of fish in blue sunlit water",
        label: "Underwater",
      },
      {
        src: "/assets/alexfisher/alexfisher-lure.webp",
        alt: "Close-up of a fishing lure resting on wet coastal rocks",
        label: "Fishing lure",
      },
    ],
    gallery: [
      {
        src: "/assets/alexfisher/alexfisher-tiny-planet.webp",
        alt: "Khaled holding up a fish and a fishing rod in a 360° tiny-planet shot of a palm-lined seafront",
        label: "Tiny-planet catch",
      },
    ],
    featured: true,
    caseStudySections: [
      {
        heading: "The creator brand",
        body: [
          "AlexFisher is a creator and media brand built around fishing, adventure and outdoor lifestyle — real experiences on the water, practical know-how and storytelling made for the audience.",
          "I built and manage a 600K+ cross-platform audience across YouTube, Facebook and Instagram, and own the full video lifecycle: research, concept, scripting, filming, editing, sound design, thumbnails, SEO, publishing and post-performance optimisation.",
          "Videos and social content have reached millions of views, with audience data, retention and engagement signals feeding back into what gets made next.",
        ],
      },
      {
        heading: "The AlexFisher platform",
        body: [
          "Alongside the channel, AlexFisher is growing into a digital platform and product ecosystem. The full write-up of this side of the project is in progress.",
        ],
      },
    ],
  },
  {
    slug: "bisi-and-friends",
    title: "Bisi and Friends",
    client: "TOC Publishing UK",
    role: "AI video producer, content & social media",
    category: "AI Video Production",
    description:
      "Children's storytelling produced with AI-assisted animation, character consistency, lip-sync and multi-platform social adaptation.",
    tags: ["AI Video", "Children's Content"],
    year: "2026–Present",
    badge: {
      initials: "TOC",
      logo: { src: "/assets/logos/toc-publishing-logo.png", alt: "TOC Publishing logo", label: "TOC Publishing" },
    },
    tone: "studio",
    hero: {
      src: "/assets/bisi-and-friends/episode-our-values.webp",
      alt: "Bisi and Friends episode artwork: Bisi, Mia and classmates outside their school under the title “Our values become our superpowers!”",
      label: "Our Values Become Our Superpowers",
    },
    supporting: [
      {
        src: "/assets/bisi-and-friends/bisi.png",
        alt: "Bisi character portrait",
        label: "Bisi",
        position: "50% 4%",
      },
      {
        src: "/assets/bisi-and-friends/funmi.png",
        alt: "Funmi character portrait",
        label: "Funmi",
        position: "50% 6%",
      },
      {
        src: "/assets/bisi-and-friends/mia.png",
        alt: "Mia character portrait",
        label: "Mia",
        position: "50% 6%",
      },
    ],
    gallery: [
      {
        src: "/assets/bisi-and-friends/episode-supers-special-lunch.webp",
        alt: "Bisi and Friends episode artwork: a boy with a medical-alert lanyard rides a dinosaur under the title “Super's Special Lunch”",
        label: "Super's Special Lunch",
      },
    ],
    featured: true,
    caseStudySections: [
      {
        heading: "The project",
        body: [
          "Bisi and Friends is a children's storytelling series for TOC Publishing UK, following Bisi, Mia, Dr Funmi and their classmates through everyday stories with a message.",
          "I produce social videos and AI story videos from script through AI-assisted production, character consistency, lip-sync, editing and final delivery.",
        ],
      },
      {
        heading: "Built for every platform",
        body: [
          "Each story is adapted for Instagram, TikTok and YouTube, alongside support for content planning, outreach and publishing.",
        ],
      },
    ],
  },
  {
    slug: "costa-coffee",
    title: "Costa Coffee",
    client: "Costa Coffee, South West London",
    role: "Social media content creator",
    category: "Social Media Content",
    description:
      "Instagram video, photography and branded social content created for Costa Coffee in South West London.",
    tags: ["Social Content", "Brand"],
    year: "2025–2026",
    badge: { initials: "CC" },
    tone: "espresso",
    hero: {
      src: "/assets/costa/costa-team.webp",
      alt: "Four Costa Coffee baristas behind the counter, three making heart shapes with their hands, under the store's coffee menu boards",
      label: "Costa Coffee team",
      position: "50% 45%",
    },
    supporting: [
      {
        src: "/assets/costa/costa-barista-machine.webp",
        alt: "Costa barista working at the espresso machine under the Famously Frothy menu board",
        label: "Barista",
        position: "50% 30%",
      },
      {
        src: "/assets/costa/costa-latte-pour.webp",
        alt: "Costa barista pouring steamed milk into a cup at the counter",
        label: "Latte pour",
        position: "50% 30%",
      },
      {
        src: "/assets/costa/costa-cup.webp",
        alt: "Costa Coffee takeaway cup",
        label: "Costa cup",
        fit: "contain",
      },
    ],
    featured: true,
    caseStudySections: [
      {
        heading: "The work",
        body: [
          "Instagram video, photography and branded social assets for Costa Coffee in South West London — focused on stronger engagement, visual consistency and local audience relevance.",
          "I planned, shot and edited the content while monitoring performance and refining the creative direction.",
        ],
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
