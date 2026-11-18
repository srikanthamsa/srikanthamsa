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

repos.forEach((r, i) => {
  const pillW = Math.round(r.lang.length * 6.2 + 40);
  const starPill = r.stars > 0
    ? `<rect x="560" y="66" width="56" height="19" rx="9.5" fill="#FFFFFF" fill-opacity="0.04" stroke="#FFFFFF" stroke-opacity="0.09"/>
  <text x="588" y="79.5" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="10.5" fill="#AEB9C4">★ ${r.stars}</text>`
    : "";

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="638" height="94" viewBox="0 0 638 94" role="img" aria-label="${esc(r.name)} — ${esc(r.desc)}">
  <defs>
    <linearGradient id="surface" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#141A23"/>
      <stop offset="1" stop-color="#0B0F15"/>
    </linearGradient>
    <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#46505E"/>
      <stop offset="0.45" stop-color="#232B35"/>
      <stop offset="1" stop-color="#151B22"/>
    </linearGradient>
    <linearGradient id="spec" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0"/>
      <stop offset="0.35" stop-color="#FFFFFF" stop-opacity="0.22"/>
      <stop offset="0.65" stop-color="#FFFFFF" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#93A6BD" stop-opacity="0.14"/>
      <stop offset="1" stop-color="#93A6BD" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#FFFFFF" stop-opacity="0.07"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="card"><rect x="1" y="1" width="636" height="92" rx="14"/></clipPath>
  </defs>

  <rect x="0.75" y="0.75" width="636.5" height="92.5" rx="14" fill="url(#surface)" stroke="url(#stroke)" stroke-width="1.5"/>
  <ellipse cx="120" cy="0" rx="240" ry="80" fill="url(#glow)"/>
  <rect x="3" y="2" width="632" height="1" fill="url(#spec)"/>

  <g clip-path="url(#card)">
    <rect x="-180" y="0" width="170" height="94" fill="url(#sheen)">
      <animate attributeName="x" values="-180; 700" dur="9s" begin="${(i * 2.2).toFixed(1)}s" repeatCount="indefinite"/>
    </rect>
  </g>

  <text x="24" y="34" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="16.5" font-weight="600" letter-spacing="0.2" fill="#F2F6FA">${esc(r.name)}</text>

  <text x="24" y="56.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="11" fill="#9AA5B1">${esc(r.desc)}</text>

  <circle cx="608" cy="31" r="14" fill="#0E131A" stroke="#2A323C" stroke-width="1.2"/>
  <path d="M603 36 L613 26 M605.5 26 H613 V33.5" fill="none" stroke="#87919C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>

  <rect x="22" y="66" width="${pillW}" height="19" rx="9.5" fill="#FFFFFF" fill-opacity="0.04" stroke="#FFFFFF" stroke-opacity="0.09"/>
  <circle cx="${22 + 10}" cy="75.5" r="3.5" fill="${r.color}"/>
  <text x="${22 + 19}" y="79.5" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="10.5" fill="#AEB9C4">${esc(r.lang)}</text>

  ${starPill}
</svg>
`;
  fs.writeFileSync(path.join(dir, r.file + ".svg"), svg);
});

console.log("wrote " + repos.length + " premium repo cards");
