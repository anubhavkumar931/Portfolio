import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/profile";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "46px",
          backgroundColor: "#08101F",
          color: "#E6EEFC",
        }}
      >
        <div
          style={{
            display: "flex",
            borderRadius: 999,
            border: "1px solid rgba(54, 185, 203, 0.5)",
            padding: "9px 16px",
            fontSize: 19,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#9DB0CD",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 62, fontWeight: 600 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 28, color: "#BBD3F5" }}>{siteConfig.roleTagline}</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

