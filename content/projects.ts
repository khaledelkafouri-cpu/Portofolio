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
  /** Main card / case-study image. An array renders a line-up of cut-outs. */
  hero: MediaAsset | MediaAsset[];
  /** Exactly three supporting images — the 1 large + 3 small card composition. */
  supporting: [MediaAsset, MediaAsset, MediaAsset];
  gallery?: MediaAsset[];
  videoUrl?: string;
  externalUrl?: string;
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
    role: "Creator, presenter & producer",
    category: "Creator Brand",
    description:
      "Content around fishing, adventure and outdoor lifestyle — combining real experiences, useful knowledge and audience-focused storytelling.",
    tags: ["YouTube", "Lifestyle"],
    badge: { initials: "AF" },
    tone: "sea",
    hero: {
      alt: "Khaled as AlexFisher, fishing on the water",
      label: "Khaled / AlexFisher on the water",
    },
    supporting: [
      { alt: "Close-up of a fishing reel", label: "Fishing reel" },
      { alt: "Underwater sea and fishing environment", label: "Sea / underwater" },
      { alt: "Close-up of a fishing lure", label: "Fishing lure" },
    ],
    featured: true,
    caseStudySections: [
      {
        heading: "The creator brand",
        body: [
          "AlexFisher is a creator and media brand built around fishing, adventure and outdoor lifestyle — real experiences on the water, practical know-how and storytelling made for the audience.",
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
    role: "AI video production",
    category: "AI Video Production",
    description:
      "Children's storytelling produced with AI-assisted animation, character consistency, lip-sync and multi-platform social adaptation.",
    tags: ["AI Video", "Children's Content"],
    badge: {
      initials: "TOC",
      logo: { src: "/assets/logos/toc-publishing-logo.png", alt: "TOC Publishing logo", label: "TOC Publishing" },
    },
    tone: "studio",
    hero: [
      {
        src: "/assets/bisi-and-friends/funmi.png",
        alt: "Funmi, a Bisi and Friends character, in a teal shirt and navy trousers",
        label: "Funmi",
      },
      {
        src: "/assets/bisi-and-friends/bisi.png",
        alt: "Bisi, the lead Bisi and Friends character, in her school uniform",
        label: "Bisi",
      },
      {
        src: "/assets/bisi-and-friends/mia.png",
        alt: "Mia, a Bisi and Friends character with red curly hair and glasses",
        label: "Mia",
      },
    ],
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
    featured: true,
  },
  {
    slug: "costa-coffee",
    title: "Costa Coffee",
    client: "Costa Coffee, South West London",
    role: "Social media video & photography",
    category: "Social Media Content",
    description:
      "Instagram video, photography and branded social content created for Costa Coffee in South West London.",
    tags: ["Social Content", "Brand"],
    badge: { initials: "CC" },
    tone: "espresso",
    hero: { alt: "Costa Coffee branded social content", label: "Costa Coffee hero shot" },
    supporting: [
      { alt: "Coffee close-up", label: "Coffee" },
      { alt: "Costa Coffee store front", label: "Store" },
      { alt: "Behind-the-scenes content capture", label: "Content" },
    ],
    featured: true,
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

/** First image of a project — used for Open Graph and listings. */
export function primaryImage(project: Project): MediaAsset {
  return Array.isArray(project.hero) ? project.hero[0] : project.hero;
}
