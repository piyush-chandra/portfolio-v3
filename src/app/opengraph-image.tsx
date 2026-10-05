import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background: "#000",
                    color: "#fff",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                    <div style={{ width: 14, height: 14, borderRadius: 999, background: "#34d399" }} />
                    <div style={{ fontSize: 26, color: "#6ee7b7" }}>open to new opportunities</div>
                </div>
                <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -3 }}>Piyush Chandra</div>
                <div style={{ fontSize: 38, color: "#a3a3a3", marginTop: 12 }}>
                    Backend Engineer · Java / Python / SWIFT / LLMs
                </div>
                <div style={{ fontSize: 28, color: "#525252", marginTop: 28, fontFamily: "monospace" }}>
                    AU Small Finance Bank · Newgen Software · Jaipur, IN
                </div>
            </div>
        ),
        { ...size }
    );
}
