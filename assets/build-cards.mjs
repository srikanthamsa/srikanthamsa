import fs from "node:fs";
import path from "node:path";

const dir = path.dirname(new URL(import.meta.url).pathname);

const repos = [
  {
    file: "repo-sunshine",
    name: "sunshine-macos-gamepads",
    desc: "Sunshine fork adding virtual gamepads on macOS. No SIP changes, no paid HID broker.",
    lang: "C++",
    color: "#F34B7D",
    stars: 3,
  },
  {
    file: "repo-urban-reign",
    name: "urban-reign-macos",
    desc: "Urban Reign (PS2) recompiled for native Apple Silicon — 60 FPS, 3x resolution, co-op.",
    lang: "C++",
    color: "#F34B7D",
    stars: 1,
  },
  {
    file: "repo-chess-sense",
    name: "chess-sense",
    desc: "Reads your chess board off the screen and shows the best move in the Dynamic Island.",
    lang: "Swift",
    color: "#F05138",
    stars: 0,
  },
  {
    file: "repo-benchboss",
    name: "benchboss",
    desc: "5-player Cricket 19 controller router with live bench swaps via virtual Xbox pads.",
    lang: "Rust",
    color: "#DEA584",
    stars: 0,
  },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

for (const r of repos) {
  const star = r.stars > 0
    ? `<text x="598" y="68.5" text-anchor="end" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" fill="#8B949E">★ ${r.stars}</text>`
    : "";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="638" height="86" viewBox="0 0 638 86" role="img" aria-label="${esc(r.name)} — ${esc(r.desc)}">
  <defs>
    <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#2A313A"/>
      <stop offset="0.5" stop-color="#39414B"/>
      <stop offset="1" stop-color="#2A313A"/>
    </linearGradient>
    <linearGradient id="accent" x1="16" y1="0" x2="150" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#E6EDF3" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#E6EDF3" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="shine" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.03"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect x="0.75" y="0.75" width="636.5" height="84.5" rx="10" fill="#0D1117" stroke="url(#edge)" stroke-width="1.5"/>
  <rect x="16" y="1.5" width="134" height="2" rx="1" fill="url(#accent)"/>
  <rect x="16" y="3" width="606" height="30" rx="8" fill="url(#shine)"/>

  <text x="20" y="31" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="15.5" font-weight="600" letter-spacing="0.2" fill="#E6EDF3">${esc(r.name)}</text>

  <text x="20" y="50.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="11" fill="#8B949E">${esc(r.desc)}</text>

  <circle cx="24" cy="65.5" r="4" fill="${r.color}"/>
  <text x="34" y="69" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="10.5" fill="#8B949E">${esc(r.lang)}</text>
  ${star}

  <path d="M600 30 L614 16 M602 16 H614 V28" fill="none" stroke="#586069" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  fs.writeFileSync(path.join(dir, r.file + ".svg"), svg);
}

console.log("wrote " + repos.length + " repo cards");
