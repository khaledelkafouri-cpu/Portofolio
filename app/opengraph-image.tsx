import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const portrait = await readFile(join(process.cwd(), "public", site.portrait.src));
  const portraitSrc = `data:image/png;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "radial-gradient(60% 80% at 80% 50%, #e2c9a2 0%, #f5f1ea 70%)",
          color: "#161514",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 72px", width: 720 }}>
          <div style={{ fontSize: 20, letterSpacing: 8, color: "#5c574f" }}>SOCIAL MEDIA CONTENT CREATOR</div>
          <div style={{ fontSize: 92, fontWeight: 700, marginTop: 20, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: "#8c1c2c", marginTop: 20 }}>{site.role}</div>
          <div style={{ fontSize: 26, color: "#5c574f", marginTop: 16 }}>{site.specialties.join("  •  ")}</div>
        </div>
        <img
          src={portraitSrc}
          alt=""
          width={560}
          height={560}
          style={{ position: "absolute", right: 0, bottom: -70, objectFit: "cover" }}
        />
      </div>
    ),
    size,
  );
}
