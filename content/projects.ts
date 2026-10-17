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
  /** Short description of the intended shot, shown on the placeholder. */
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
  /** What Khaled did on the project, shown as chips on the card. */
  skills: string[];
  tools: string[];
  /** Small badge in the card header: a logo image, or initials when no logo is supplied. */
  badge: { logo?: MediaAsset; initials: string };
  tone: ProjectTone;
  /** Card image, shown until a showreel is supplied. */
  hero: MediaAsset;
  /** Exactly three stills shown in a row under the description. */
  supporting: [MediaAsset, MediaAsset, MediaAsset];
  showreel?: Showreel;
  /** The project's most-viewed video. The card link only appears once `href` is set. */
  topVideo?: {
    href?: string;
    title?: string;
    /** Display string, e.g. "2.1M". */
    views?: string;
  };
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
      "My own fishing and outdoor channel. I film, edit and publish every video myself, and have built an audience of 600K+ across YouTube, Facebook and Instagram.",
    skills: ["Filming", "Editing", "Sound design", "Thumbnails", "YouTube SEO"],
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    year: "2020 to present",
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
    showreel: {
      src: "/assets/alexfisher/showreel/alexfisher-showreel.mp4",
      poster: "/assets/alexfisher/showreel/alexfisher-showreel-poster.webp",
    },
    topVideo: {
      title: "Why can't we keep a great white shark?",
      views: "2.1M",
      href: "https://www.instagram.com/reel/DCCFrfzoFK7/",
    },
    featured: true,
  },
  {
    slug: "bisi-and-friends",
    title: "Bisi and Friends",
    client: "TOC Publishing UK",
    role: "AI video producer, content & social media",
    category: "AI Video Production",
    description:
      "AI-animated children's stories for TOC Publishing UK. I take each episode from script to final cut, keeping the characters consistent, and adapt it for Instagram, TikTok and YouTube.",
    skills: ["AI animation", "Character consistency", "Lip-sync", "Editing"],
    tools: ["Higgsfield", "Kling", "ElevenLabs", "Premiere Pro"],
    year: "2025 to present",
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
    showreel: {
      src: "/assets/bisi-and-friends/showreel/bisi-showreel.mp4",
      poster: "/assets/bisi-and-friends/showreel/bisi-showreel-poster.webp",
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
      "Instagram videos and photos for Costa Coffee in South West London. I planned, shot and edited the content, and used how each post performed to shape the next one.",
    skills: ["Filming", "Photography", "Editing", "Instagram content"],
    tools: ["Premiere Pro", "Photoshop"],
    year: "2025 to 2026",
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
    showreel: {
      src: "/assets/costa/showreel/costa-showreel.mp4",
      poster: "/assets/costa/showreel/costa-showreel-poster.webp",
    },
    topVideo: { href: "https://www.instagram.com/reels/DUsKvuaAusc/" },
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

