import { useEffect, useState } from 'react';
import arielImg from '../../Ariel 1.png';

export function IconEditorPhoto() {
  const [pixels, setPixels] = useState<boolean[][] | null>(null);

  const COLS = 26;
  const ROWS = 32;

  useEffect(() => {
    const img = new Image();
    img.src = arielImg;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = COLS;
      canvas.height = ROWS;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0, COLS, ROWS);
      const imgData = ctx.getImageData(0, 0, COLS, ROWS);
      const data = imgData.data;

      const grid: boolean[][] = [];
      for (let r = 0; r < ROWS; r++) {
        const row: boolean[] = [];
        for (let c = 0; c < COLS; c++) {
          const idx = (r * COLS + c) * 4;
          const red = data[idx];
          const green = data[idx + 1];
          const blue = data[idx + 2];
          const gray = 0.299 * red + 0.587 * green + 0.114 * blue;
          row.push(gray < 130);
        }
        grid.push(row);
      }
      setPixels(grid);
    };
  }, []);

  const exportToPNG = () => {
    const canvas = document.createElement('canvas');
    const scale = 12;
    const width = COLS * scale + 60;
    const height = ROWS * scale + 100;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background paper
    ctx.fillStyle = '#F4F1EA';
    ctx.fillRect(0, 0, width, height);

    // Outer brutalist border (4px black)
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    // Window Title Bar
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(20, 20, width - 40, 32);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.strokeRect(20, 20, width - 40, 32);

    // Stripes
    for (let i = 0; i < 3; i++) {
      ctx.fillStyle = '#000000';
      ctx.fillRect(28 + i * 4, 28, 2, 16);
      ctx.fillRect(width - 38 + i * 4, 28, 2, 16);
    }

    // Title text
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 13px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Icon Editor', width / 2, 36);

    // Pixel Grid Container Background
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(30, 64, width - 60, ROWS * scale + 8);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 3;
    ctx.strokeRect(30, 64, width - 60, ROWS * scale + 8);

    // Draw pixels
    if (pixels) {
      const startX = 34;
      const startY = 68;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          ctx.fillStyle = pixels[r][c] ? '#000000' : '#FFFFFF';
          ctx.fillRect(startX + c * scale, startY + r * scale, scale, scale);
          ctx.strokeStyle = 'rgba(0,0,0,0.25)';
          ctx.lineWidth = 0.5;
          ctx.strokeRect(startX + c * scale, startY + r * scale, scale, scale);
        }
      }
    }

    // Footer Info
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('RAMON ARIEL MORENO', 30, height - 24);
    ctx.fillStyle = '#E61C1C';
    ctx.textAlign = 'right';
    ctx.fillText('1-BIT MAC', width - 30, height - 24);

    // Download
    const link = document.createElement('a');
    link.download = 'icon-editor-ariel.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="bg-[#F4F1EA] text-black border-4 border-black p-4 shadow-[8px_8px_0px_0px_#000000] flex flex-col items-center relative select-none">
      {/* Retro Macintosh Window Title Bar */}
      <div className="w-full bg-white border-2 border-black mb-3 flex items-center justify-center relative py-1 shadow-[2px_2px_0px_0px_#000000]">
        {/* Left stripes */}
        <div className="absolute left-2 flex items-center gap-0.5">
          <div className="w-0.5 h-3 bg-black"></div>
          <div className="w-0.5 h-3 bg-black"></div>
          <div className="w-0.5 h-3 bg-black"></div>
        </div>
        
        <span className="font-mono text-xs font-black uppercase tracking-widest bg-white px-3">
          Icon Editor
        </span>

        {/* Right stripes */}
        <div className="absolute right-2 flex items-center gap-0.5">
          <div className="w-0.5 h-3 bg-black"></div>
          <div className="w-0.5 h-3 bg-black"></div>
          <div className="w-0.5 h-3 bg-black"></div>
        </div>
      </div>

      {/* Pixel Grid Container (Macintosh 1-bit style) */}
      <div className="bg-[#222] border-3 border-black p-1 shadow-inner w-full flex justify-center overflow-hidden">
        {pixels ? (
          <div 
            className="grid bg-[#1a1a1a] border border-black w-full max-w-[280px]"
            style={{ 
              gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
              aspectRatio: `${COLS} / ${ROWS}`
            }}
          >
            {pixels.map((row, rIdx) =>
              row.map((isDark, cIdx) => (
                <div
                  key={`${rIdx}-${cIdx}`}
                  className={`w-full h-full border-[0.5px] border-black/30 ${
                    isDark ? 'bg-black' : 'bg-white'
                  }`}
                />
              ))
            )}
          </div>
        ) : (
          <div className="h-48 flex items-center justify-center font-mono text-xs text-white">
            LOADING_1BIT_DATA...
          </div>
        )}
      </div>

      {/* Footer Info & Export Button */}
      <div className="w-full mt-3 pt-2 border-t-2 border-black flex flex-col gap-2 font-mono text-[11px]">
        <div className="flex justify-between items-center">
          <span className="font-bold">RAMON ARIEL MORENO</span>
          <span className="text-[#E61C1C] font-black">1-BIT MAC</span>
        </div>
        <button
          onClick={exportToPNG}
          className="w-full bg-black text-white hover:bg-[#E61C1C] border-2 border-black py-2 font-black uppercase tracking-wider text-xs shadow-[3px_3px_0px_0px_#000000] cursor-pointer transition-colors active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#000000]"
        >
          ⬇ EXPORTAR icon-editor-ariel.png
        </button>
      </div>
    </div>
  );
}
