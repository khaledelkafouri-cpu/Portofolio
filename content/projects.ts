/**
 * Project content for the Selected Work cards on the homepage.
 *
 * Add a new entry here to add a project. Images without a `src` render as
 * labelled placeholders until the real asset is added to /public/assets/<project>/.
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

/** A short looping showreel that plays in the card in place of the hero image. */
export type Showreel = {
  /** H.264 MP4 in /public (muted autoplay, so keep it small and faststart). */
  src: string;
  /** Still frame shown while the video loads and behind it as a blurred backdrop. */
  poster: string;
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
  /** Card image, shown until a showreel is supplied. */
  hero: MediaAsset;
  showreel?: Showreel;
  /** The project's most-viewed video. The card link only appears once `href` is set. */
  topVideo?: { title: string; views: string; href?: string };
  year?: string;
  featured: boolean;
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
    badge: { initials: "AF" },
    tone: "sea",
    hero: {
      src: "/assets/alexfisher/alexfisher-catch-sunset.webp",
      alt: "Khaled as AlexFisher on a boat at sunset, holding up a large silver fish in front of the sea and cliffs",
      label: "Khaled / AlexFisher on the water",
      position: "38% 50%",
    },
    showreel: {
      src: "/assets/alexfisher/showreel/alexfisher-showreel.mp4",
      poster: "/assets/alexfisher/showreel/alexfisher-showreel-poster.webp",
    },
    topVideo: { title: "Why can't we keep a great white shark?", views: "2.1M" },
    featured: true,
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
    year: "2025–Present",
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
    featured: true,
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
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

