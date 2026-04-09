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
      <svg
        viewBox="0 0 2446 670"
        width="200"
        height="55"
        fill="#43c6a6"
      >
        <path d="M0,670 L0,21.1947287 L326.398821,21.1947287 C467.343767,21.1947287 527.748744,95.376279 527.748744,185.453876 C527.748744,256.456217 505.494279,310.502775 458.865876,345.474077 C537.286372,366.668806 575.436883,440.850356 575.436883,527.748744 C575.436883,578.439587 564.798901,630.120011 529.896194,670 L0,670 Z" />
        <path d="M1139.30733,670 L679.041861,670 C614.793443,602.542428 577.585794,499.840245 577.585794,366.668806 C577.585794,143.064418 719.590476,0 911.40277,0 C1106.39427,0 1240.9808,143.064418 1240.9808,366.668806 C1240.9808,499.840245 1203.1872,602.542428 1139.30733,670 Z" />
        <path d="M1811.81187,670 L1308.38511,670 C1278.09393,628.203566 1262.20497,569.947745 1262.20497,490.657969 L1262.20497,21.1947287 L1680.80086,21.1947287 L1680.80086,464.164558 L1806.90949,456.746403 L1811.81187,670 Z" />
        <path d="M1852.5076,670 L1852.5076,669.887695 C1852.5076,527.853176 1852.5076,314.801396 1852.5076,30.7323566 C1852.5076,30.7323566 1977.5565,14.8363101 2114.2625,14.8363101 C2390.85371,14.8363101 2445.96,207.708341 2445.96,379.385643 C2445.96,483.357525 2414.91214,594.306455 2343.80949,670 L1852.5076,670 Z" />
      </svg>

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
