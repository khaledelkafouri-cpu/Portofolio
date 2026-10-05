import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public", site.portrait.src));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", color: "#161514" }}>
        {/* 1672×941 photo scaled to cover 1200×630 (1200×675, centred vertically) */}
        <img
          src={photoSrc}
          alt=""
          width={1200}
          height={675}
          style={{ position: "absolute", left: 0, top: -22 }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            background: "linear-gradient(90deg, #f5f1ea 0%, #f5f1ea 30%, rgba(245,241,234,0.7) 50%, rgba(245,241,234,0) 70%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 64px", width: 780, position: "relative" }}>
          <div style={{ fontSize: 18, letterSpacing: 7, color: "#5c574f" }}>SOCIAL MEDIA CONTENT CREATOR</div>
          <div style={{ fontSize: 84, fontWeight: 700, marginTop: 18, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 36, color: "#8c1c2c", marginTop: 18 }}>{site.role}</div>
          <div style={{ fontSize: 21, color: "#5c574f", marginTop: 14 }}>{site.specialties.join("  •  ")}</div>
        </div>
      </div>
    ),
    size,
  );
}
