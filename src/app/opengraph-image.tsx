import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/profile";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px",
          backgroundColor: "#F6F8FB",
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(11, 114, 133, 0.18), transparent 30%), radial-gradient(circle at 80% 10%, rgba(11, 114, 133, 0.12), transparent 30%)",
          color: "#0E1729",
        }}
      >
        <div
          style={{
            display: "flex",
            borderRadius: 999,
            border: "1px solid #D7DEE8",
            padding: "10px 18px",
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#475467",
          }}
        >
          Finance + FinTech Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 68, fontWeight: 600 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 34, color: "#1F334F" }}>{siteConfig.roleTagline}</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}

