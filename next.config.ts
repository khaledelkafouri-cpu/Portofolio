import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    localPatterns: [{ pathname: "/assets/**" }],
  },
  // The site is a single page now; send old project-page links to the work section.
  async redirects() {
    return [
      { source: "/work", destination: "/#work", permanent: true },
      { source: "/work/:path*", destination: "/#work", permanent: true },
    ];
  },
};

export default nextConfig;
