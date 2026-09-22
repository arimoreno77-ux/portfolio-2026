import fs from 'fs';
import path from 'path';

const imagePath = path.resolve('Ariel 1.png');
const imageBuffer = fs.readFileSync(imagePath);
const imageBase64 = imageBuffer.toString('base64');

const svgOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="520" viewBox="0 0 400 520">
  <!-- Definitions for 1-bit Macintosh dither and retro styling -->
  <defs>
    <style>
      .retro-title { font-family: "Courier New", Courier, monospace; font-weight: bold; font-size: 14px; fill: #000; }
      .retro-footer { font-family: "Courier New", Courier, monospace; font-weight: bold; font-size: 12px; fill: #000; }
      .retro-red { fill: #E61C1C; }
    </style>
    <filter id="threshold">
      <feColorMatrix type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0"/>
      <feComponentTransfer>
        <feFuncR type="discrete" tableValues="0 1"/>
        <feFuncG type="discrete" tableValues="0 1"/>
        <feFuncB type="discrete" tableValues="0 1"/>
      </feComponentTransfer>
    </filter>
  </defs>

  <!-- Background Paper -->
  <rect width="400" height="520" fill="#F4F1EA" />

  <!-- Brutalist Outer Border -->
  <rect x="20" y="20" width="360" height="480" fill="#FFFFFF" stroke="#000000" stroke-width="4" />
  <rect x="24" y="24" width="352" height="472" fill="none" stroke="#000000" stroke-width="1" />

  <!-- Window Title Bar -->
  <rect x="40" y="36" width="320" height="36" fill="#FFFFFF" stroke="#000000" stroke-width="2" />
  
  <!-- Left stripes -->
  <line x1="52" y1="44" x2="52" y2="64" stroke="#000000" stroke-width="2" />
  <line x1="57" y1="44" x2="57" y2="64" stroke="#000000" stroke-width="2" />
  <line x1="62" y1="44" x2="62" y2="64" stroke="#000000" stroke-width="2" />

  <!-- Title Text "Icon Editor" -->
  <text x="200" y="59" class="retro-title" text-anchor="middle">Icon Editor</text>

  <!-- Right stripes -->
  <line x1="338" y1="44" x2="338" y2="64" stroke="#000000" stroke-width="2" />
  <line x1="343" y1="44" x2="343" y2="64" stroke="#000000" stroke-width="2" />
  <line x1="348" y1="44" x2="348" y2="64" stroke="#000000" stroke-width="2" />

  <!-- Pixel Grid Viewport (Macintosh 1-bit style) -->
  <rect x="40" y="88" width="320" height="370" fill="#1a1a1a" stroke="#000000" stroke-width="3" />
  
  <!-- Rendered 1-bit dithered image of Ariel 1 -->
  <image href="data:image/png;base64,${imageBase64}" x="48" y="96" width="304" height="354" filter="url(#threshold)" style="image-rendering: pixelated;" />

  <!-- Footer Info -->
  <text x="40" y="482" class="retro-footer">RAMON ARIEL MORENO</text>
  <text x="360" y="482" class="retro-footer retro-red" text-anchor="end">1-BIT MAC</text>
</svg>`;

const outputPath = path.resolve('C:/Users/Asus/Desktop/portfolio/public/icon-editor-ariel.png');
fs.writeFileSync(outputPath, svgOutput);
console.log('Saved successfully to:', outputPath);
