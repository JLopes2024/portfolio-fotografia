import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#211A17",
          color: "#D7C2A7",
          fontSize: 28,
          letterSpacing: "-0.08em",
        }}
      >
        LP
      </div>
    ),
    size
  );
}
