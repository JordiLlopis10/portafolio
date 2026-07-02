import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

/** Favicon generado en build: monograma JL sobre fondo del tema. */
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
          background: "linear-gradient(135deg, #18181f 0%, #09090b 100%)",
          borderRadius: 96,
          border: "6px solid #26262e",
        }}
      >
        <div
          style={{
            fontSize: 220,
            fontWeight: 700,
            letterSpacing: -12,
            background: "linear-gradient(135deg, #f4f4f5 30%, #a5b4fc 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          JL
        </div>
      </div>
    ),
    size,
  );
}
