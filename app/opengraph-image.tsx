import { ImageResponse } from "next/og";

export const alt =
  "Bold — Turn your video library into an AI teaching assistant";
export const contentType = "image/png";
export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background:
          "radial-gradient(circle at top left, rgba(67,198,166,0.24), transparent 32%), radial-gradient(circle at 80% 10%, rgba(20,92,255,0.18), transparent 28%), linear-gradient(180deg, #fdfaf3 0%, #f8f1e8 100%)",
        color: "#151515",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "64px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "18px",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#43c6a6",
            borderRadius: "28px",
            color: "#0d1511",
            display: "flex",
            fontSize: 36,
            fontWeight: 700,
            height: "72px",
            justifyContent: "center",
            width: "72px",
          }}
        >
          B
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}
        >
          Bold
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "26px",
          maxWidth: "900px",
        }}
      >
        <div
          style={{
            color: "#187963",
            fontSize: 24,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
          }}
        >
          Video intelligence platform
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-0.06em",
            lineHeight: 0.94,
          }}
        >
          Your video library, finally searchable
        </div>
        <div
          style={{
            color: "#5f564d",
            fontSize: 30,
            lineHeight: 1.4,
            maxWidth: "840px",
          }}
        >
          An AI teaching assistant that answers student questions with cited
          timestamps from your actual content.
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          display: "flex",
          gap: "18px",
        }}
      >
        {[
          "Cited answers",
          "Concept search",
          "Auto-generated chapters",
        ].map((item) => (
          <div
            key={item}
            style={{
              background: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(19,15,11,0.08)",
              borderRadius: "999px",
              color: "#5f564d",
              fontSize: 18,
              letterSpacing: "0.14em",
              padding: "16px 24px",
              textTransform: "uppercase",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
