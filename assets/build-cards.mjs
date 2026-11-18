import fs from "node:fs";
import path from "node:path";

const dir = path.dirname(new URL(import.meta.url).pathname);

const repos = [
  {
    file: "repo-sunshine",
    layout: "wide",
    name: "sunshine-macos-gamepads",
    desc: ["Sunshine fork adding virtual gamepads on macOS. No SIP changes, no paid HID broker."],
    lang: "C++",
    color: "#F34B7D",
    stars: 3,
  },
  {
    file: "repo-urban-reign",
    layout: "half",
    name: "urban-reign-macos",
    desc: ["Urban Reign (PS2) recompiled for native", "Apple Silicon. 60 FPS, 3x res, co-op."],
    lang: "C++",
    color: "#F34B7D",
    stars: 1,
  },
  {
    file: "repo-chess-sense",
    layout: "half",
    name: "chess-sense",
    desc: ["Reads your chess board off the screen", "and shows the best move in the Dynamic Island."],
    lang: "Swift",
    color: "#F05138",
    stars: 0,
  },
  {
    file: "repo-auge",
    layout: "wide",
    name: "auge",
    desc: ["Native macOS workspace for websites, files and widgets, one keystroke away."],
    lang: "Swift",
    color: "#F05138",
    stars: 0,
  },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

for (const r of repos) {
  const wide = r.layout === "wide";
  const W = wide ? 638 : 314;
  const H = 96;
  const nameY = wide ? 32 : 30;
  const descX = 20;
  const descY = wide ? 52 : 48;
  const metaY = wide ? 76 : 80;
  const dotCy = metaY - 3.5;
  const labelX = 34;
  const arrows = wide ? { d: "M600 28 L612 16 M600 16 H612 V28" } : { d: "M284 26 L294 16 M284 16 H294 V26" };
  const stars = r.stars > 0
    ? `<text x="${wide ? 616 : 294}" y="${metaY}" text-anchor="end" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="${wide ? 10.5 : 9.5}" fill="#8B949E">★ ${r.stars}</text>`
    : "";

  const desc = r.desc
    .map((line, i) => `<text x="${descX}" y="${descY + i * (wide ? 0 : 11.5)}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="${wide ? 10.5 : 9.8}" fill="#8B949E">${esc(line)}</text>`)
    .join("\n  ");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(r.name)}">
  <rect x="0.75" y="0.75" width="${W - 1.5}" height="${H - 1.5}" rx="10" fill="#0D1117" stroke="#21262D" stroke-width="1.5"/>

  <text x="20" y="${nameY}" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="${wide ? 15 : 13}" font-weight="600" letter-spacing="0.2" fill="#EDF2F7">${esc(r.name)}</text>

  ${desc}

  <circle cx="24" cy="${dotCy}" r="3.2" fill="${r.color}"/>
  <text x="${labelX}" y="${metaY}" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="${wide ? 10 : 9.5}" fill="#8B949E">${esc(r.lang)}</text>
  ${stars}

  <path d="${arrows.d}" fill="none" stroke="#6E7681" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  fs.writeFileSync(path.join(dir, `${r.file}-${r.layout}.svg`), svg);
}

console.log("wrote minimal bento tiles");
