import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Icono para dispositivos Apple (sin esquinas redondeadas: las aplica iOS). */
export default function AppleIcon() {
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
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            letterSpacing: -4,
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
