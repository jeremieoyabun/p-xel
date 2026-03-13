import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "P-XEL Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#0A0A0F",
          padding: "80px",
        }}
      >
        {/* Accent square + logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              backgroundColor: "#6608F9",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#F5F5F7",
              letterSpacing: "-0.02em",
            }}
          >
            P-XEL Studio
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#F5F5F7",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: "900px",
            margin: 0,
          }}
        >
          {isFr ? "Studio Digital Premium" : "Premium Digital Studio"}
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: "24px",
            color: "#8A8A9A",
            marginTop: "24px",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          {isFr
            ? "Sites web, applications, MVP, branding et UX/UI. Du concept au produit livre."
            : "Websites, web apps, MVPs, branding and UX/UI. From concept to shipped product."}
        </p>

        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #6608F9, transparent)",
            display: "flex",
          }}
        />

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: "#5A5A6A",
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
            }}
          >
            p-xel.be
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
