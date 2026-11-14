import { ImageResponse } from "next/og";
import { company } from "@/content/company";

export const alt = `${company.name}: agricultural produce sourcing, purchasing and supply in Nigeria`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#183F32", color: "#F7F5EF", padding: "68px 76px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ width: 80, height: 3, background: "#C5A36A", marginBottom: 34 }} />
        <div style={{ fontSize: 66, fontWeight: 700, letterSpacing: 3 }}>{company.wordmark}</div>
        <div style={{ fontSize: 27, marginTop: 16 }}>{company.wordmarkSubtitle}</div>
      </div>
      <div style={{ fontSize: 38, maxWidth: 900, lineHeight: 1.4 }}>{company.description}</div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, borderTop: "1px solid #597367", paddingTop: 26 }}>
        <span>Incorporated in Nigeria, {company.incorporationYear}</span>
        <span>RC No. {company.registrationNumber}</span>
      </div>
    </div>,
    size,
  );
}
