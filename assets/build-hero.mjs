import fs from "node:fs";
import path from "node:path";

const dir = path.dirname(new URL(import.meta.url).pathname);

const art = fs.readFileSync(path.join(dir, "hero-art.jpg")).toString("base64");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="2560" height="1080" viewBox="0 0 2560 1080" role="img" aria-label="Srikant Hamsa — apps for Mac, iOS, Windows and Android. Game ports. Mods. UI/UX.">
  <defs>
    <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="90"/>
    </filter>
    <linearGradient id="scrimLeft" x1="0" y1="0" x2="1500" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#07080B" stop-opacity="0.92"/>
      <stop offset="0.42" stop-color="#07080B" stop-opacity="0.8"/>
      <stop offset="0.6" stop-color="#07080B" stop-opacity="0.52"/>
      <stop offset="0.75" stop-color="#07080B" stop-opacity="0.26"/>
      <stop offset="0.88" stop-color="#07080B" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#07080B" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="scrimBottom" x1="0" y1="760" x2="0" y2="1080" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#07080B" stop-opacity="0"/>
      <stop offset="1" stop-color="#07080B" stop-opacity="0.55"/>
    </linearGradient>
    <linearGradient id="scrimTop" x1="0" y1="0" x2="0" y2="150" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#07080B" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#07080B" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="scrimRight" x1="2040" y1="0" x2="2560" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#07080B" stop-opacity="0"/>
      <stop offset="1" stop-color="#07080B" stop-opacity="0.62"/>
    </linearGradient>
    <radialGradient id="vignette" cx="0.5" cy="0.5" r="0.72">
      <stop offset="0.6" stop-color="#07080B" stop-opacity="0"/>
      <stop offset="1" stop-color="#07080B" stop-opacity="0.6"/>
    </radialGradient>
    <pattern id="scan" width="4" height="4" patternUnits="userSpaceOnUse">
      <rect width="4" height="1.2" fill="#000000" opacity="0.28"/>
    </pattern>
    <linearGradient id="nameBase" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FBFDFF"/>
      <stop offset="0.55" stop-color="#DEE6EE"/>
      <stop offset="1" stop-color="#9AA4AF"/>
    </linearGradient>
    <linearGradient id="nameSheen" x1="-900" y1="0" x2="-200" y2="0" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0"/>
      <stop offset="0.44" stop-color="#FFFFFF" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#FFFFFF" stop-opacity="0.9"/>
      <stop offset="0.56" stop-color="#FFFFFF" stop-opacity="0"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
      <animate attributeName="x1" values="-900; 1400" dur="7s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="-200; 2100" dur="7s" repeatCount="indefinite"/>
    </linearGradient>
    <linearGradient id="pulse" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#C9D1D9" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#FFFFFF" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#C9D1D9" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="2560" height="1080" fill="#0B0D10"/>

  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0; 0 -14; 0 0" dur="18s" repeatCount="indefinite"/>
    <g transform="translate(1280 540)">
      <g>
        <animateTransform attributeName="transform" type="scale" values="1.015; 1.045; 1.015" dur="26s" repeatCount="indefinite"/>
        <g transform="translate(-1280 -540)">
          <image x="160" y="0" width="2560" height="1080" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/jpeg;base64,${art}"/>
        </g>
      </g>
    </g>
  </g>

  <rect width="2560" height="1080" fill="#000000" opacity="0.10"/>
  <rect width="1500" height="1080" fill="url(#scrimLeft)"/>
  <rect x="2040" width="520" height="1080" fill="url(#scrimRight)"/>
  <rect y="760" width="2560" height="320" fill="url(#scrimBottom)"/>
  <rect width="2560" height="150" fill="url(#scrimTop)"/>
  <ellipse cx="560" cy="580" rx="660" ry="540" fill="#05060B" opacity="0.55" filter="url(#soft)"/>
  <rect width="2560" height="1080" fill="url(#scan)" opacity="0.5"/>
  <rect width="2560" height="1080" fill="url(#vignette)"/>

  <g transform="translate(200 395) scale(30)" fill="#E9C349" opacity="0.11" aria-hidden="true">
    <path d="M3 5.5 C4.6 6.3 6.2 6.2 7.5 5.6 C8 3.9 8.9 2.5 9.9 1.4 L11.2 4.1 C11.7 4 12.3 4 12.8 4.1 L14.1 1.4 C15.1 2.5 16 3.9 16.5 5.6 C17.8 6.2 19.4 6.3 21 5.5 C20.2 8 20.6 10.6 21.6 12.6 C19.6 14.4 17.4 14.6 15.2 12.8 C13.8 14.4 12.9 15 12 15 C11.1 15 10.2 14.4 8.8 12.8 C6.6 14.6 4.4 14.4 2.4 12.6 C3.4 10.6 3.8 8 3 5.5 Z"/>
  </g>

  <text x="180" y="352" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="25" font-weight="500" letter-spacing="13" fill="#C9D1D9" opacity="0.85">OPEN SOURCE / CROSS-PLATFORM / UI-UX</text>

  <g font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="158" font-weight="300" letter-spacing="17">
    <g opacity="0">
      <text fill="#FF3DCB" transform="translate(-3.5 0)">
        <tspan x="178" y="560">SRIKANT</tspan>
        <tspan x="178" y="752">HAMSA</tspan>
      </text>
      <text fill="#38E8FF" transform="translate(3.5 0)">
        <tspan x="178" y="560">SRIKANT</tspan>
        <tspan x="178" y="752">HAMSA</tspan>
      </text>
      <animate attributeName="opacity" values="0; 0; 0.7; 0; 0; 0; 0.5; 0" keyTimes="0; 0.88; 0.9; 0.92; 0.95; 0.96; 0.975; 1" dur="7s" repeatCount="indefinite"/>
    </g>
    <text fill="url(#nameBase)">
      <tspan x="178" y="560">SRIKANT</tspan>
      <tspan x="178" y="752">HAMSA</tspan>
    </text>
    <text fill="url(#nameSheen)">
      <tspan x="178" y="560">SRIKANT</tspan>
      <tspan x="178" y="752">HAMSA</tspan>
    </text>
  </g>

  <text x="182" y="846" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="33" font-weight="400" letter-spacing="1" fill="#DDE5EC">Apps for Mac, iOS, Windows &amp; Android. Game ports. Mods. UI/UX.</text>

  <rect x="182" y="884" width="420" height="2" fill="#2A3038"/>
  <rect x="182" y="883" width="110" height="4" rx="2" fill="url(#pulse)" opacity="0.9">
    <animate attributeName="x" values="182; 492; 182" dur="5.5s" repeatCount="indefinite"/>
  </rect>

  <text x="182" y="992" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="25" letter-spacing="2" fill="#B3BDC7">github.com/srikanthamsa</text>
  <rect x="560" y="970" width="14" height="28" fill="#E6EDF3">
    <animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.49;0.5;0.99;1" dur="1.2s" repeatCount="indefinite"/>
  </rect>
</svg>
`;

fs.writeFileSync(path.join(dir, "hero.svg"), svg);
console.log("wrote assets/hero.svg", (svg.length / 1024).toFixed(0) + " KB");
