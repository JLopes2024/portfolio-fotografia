import { ImageResponse } from "next/og";

export const alt = "Larissa Photographer";
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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#211A17",
          color: "#D7C2A7",
          padding: "72px 84px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Larissa Photographer
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 82,
            lineHeight: 0.96,
            letterSpacing: "-0.035em",
          }}
        >
          <span>Fotografia que</span>
          <span style={{ color: "#C9AB91" }}>permanece.</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#C9AB91",
          }}
        >
          <span>Retratos · Casamentos · Editorial</span>
          <span>São Paulo</span>
        </div>
      </div>
    ),
    size
  );
}
