import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "James Win — Founder, Builder, Storyteller. TalentOS, Build Myanmar, and original writing.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portrait = await readFile(join(process.cwd(), "public/profile.png"));
  const portraitSrc = `data:image/png;base64,${portrait.toString("base64")}`;
  const metrics = [
    { value: "$200K", label: "ARR · first product", color: "#eee6fa" },
    { value: "15K", label: "Product users", color: "#e1ebf5" },
    { value: "450K+", label: "Media followers", color: "#e2eedf" },
    { value: "30", label: "Build Myanmar team", color: "#faefd1" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#fbfbf7",
          color: "#1b1c18",
          padding: "44px 60px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 17,
            letterSpacing: 2,
            color: "#55574e",
          }}
        >
          <span>JAMESWIN.CAPITAL</span>
          <span>MYANMAR → SAN FRANCISCO</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 48,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 112,
                fontWeight: 700,
                letterSpacing: -7,
                lineHeight: 1.05,
              }}
            >
              <span>James Win</span>
              <span style={{ color: "#8c77ab" }}>.</span>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 20,
                fontSize: 34,
                letterSpacing: -1,
                fontWeight: 600,
              }}
            >
              <span>Founder. Builder. </span>
              <span
                style={{
                  background: "#eee6fa",
                  padding: "0 7px",
                  marginLeft: 7,
                }}
              >
                Storyteller.
              </span>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 18,
                fontSize: 23,
                color: "#575a50",
              }}
            >
              AI products. Media. Communities.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: 186,
              height: 206,
              padding: 7,
              background: "#ece7dc",
              borderRadius: 24,
              transform: "rotate(4deg)",
            }}
          >
            <img
              src={portraitSrc}
              alt="James Win"
              width={172}
              height={192}
              style={{ borderRadius: 18, objectFit: "cover" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            borderTop: "1px solid #dedfd6",
            marginTop: 42,
            paddingTop: 26,
            gap: 25,
          }}
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              style={{ display: "flex", flexDirection: "column", width: 245 }}
            >
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    background: metric.color,
                    padding: "2px 8px",
                    fontSize: 44,
                    fontWeight: 700,
                    letterSpacing: -2,
                  }}
                >
                  {metric.value}
                </span>
              </div>
              <span style={{ marginTop: 10, fontSize: 17, color: "#55594e" }}>
                {metric.label}
              </span>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            fontSize: 17,
            color: "#55594e",
            justifyContent: "space-between",
          }}
        >
          <span>TalentOS · Build Myanmar · How to Become a Glitch</span>
          <span>win@talentos.so</span>
        </div>
      </div>
    ),
    size,
  );
}
