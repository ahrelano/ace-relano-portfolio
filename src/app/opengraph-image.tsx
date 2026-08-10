import { ImageResponse } from "next/og";

import { portfolio } from "@/data/portfolio";

export const alt =
  "Ace Relano — E-commerce and ERP Developer / Technical Project Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#f3f0e9",
        color: "#171717",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "64px 72px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#1557ff",
          height: 12,
          left: 0,
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", fontSize: 24, fontWeight: 700 }}>
          {portfolio.profile.displayName}
        </div>
        <div
          style={{
            alignItems: "center",
            background: "#171717",
            borderRadius: 999,
            color: "#f3f0e9",
            display: "flex",
            fontSize: 18,
            fontWeight: 700,
            height: 72,
            justifyContent: "center",
            width: 72,
          }}
        >
          AR
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontFamily: "serif",
            fontSize: 92,
            fontWeight: 600,
            letterSpacing: "-5px",
            lineHeight: 0.88,
            maxWidth: 1000,
          }}
        >
          Commerce systems, clearly led.
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(23,23,23,.18)",
            display: "flex",
            fontSize: 21,
            justifyContent: "space-between",
            marginTop: 44,
            paddingTop: 24,
          }}
        >
          <span>{portfolio.profile.role}</span>
          <span style={{ color: "#1557ff", fontWeight: 700 }}>
            ace.relano / portfolio
          </span>
        </div>
      </div>
    </div>,
    size,
  );
}
