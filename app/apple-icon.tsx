import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#43c6a6",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          color: "#0d1511",
          fontSize: 120,
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        B
      </div>
    </div>,
    size,
  );
}
