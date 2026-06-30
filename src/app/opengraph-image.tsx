import { ImageResponse } from "next/og";

import { SITE } from "@/config/site";

/**
 * Default Open Graph / Twitter card (buildSEO points every page here unless a
 * page overrides ogImage). Generated at build time. ImageResponse can't read the
 * CSS-variable tokens, so the brand values are mirrored literally from
 * tokens.css — keep them in sync if the palette changes.
 */
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#071629",
          padding: "80px",
          color: "#eef2f0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "40px", fontWeight: 700 }}>
          <span style={{ width: "16px", height: "16px", borderRadius: "999px", background: "#2fb98c", display: "flex" }} />
          {SITE.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: "78px", fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.02em", maxWidth: "960px" }}>
            Work comes in. Too much slips away.
          </div>
          <div style={{ display: "flex", fontSize: "30px", color: "#9ba6ae" }}>
            Smart websites for service businesses and specialist clinics.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
