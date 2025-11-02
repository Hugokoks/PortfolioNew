import { motion } from "framer-motion";

/**
 * Moderní, minimalistická ikona myši s animací levého kliku.
 * Používá Framer Motion.
 */
function ClickingMouseIcon({
  size = 40, // ZMĚNA: Menší výchozí velikost
  strokeWidth = 2, // Tloušťka obrysu
  color = "#FFFFFF", // Barva obrysu a výplně při kliku
}) {
  const height = size * 1.5; // Výška je 1.5x větší než šířka
  const radius = size / 2 - strokeWidth / 2; // Poloměr zaoblení

  // Varianty animace jsme odstranili, budeme animovat přímo

  return (
    <motion.svg
      width={size}
      height={height}
      viewBox={`0 0 ${size} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        filter: `drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))`, // Jemný stín pro viditelnost
        zIndex: 100,
      }}
    >
      {/* 1. Tělo myši (obrys) */}
      <motion.rect
        x={strokeWidth / 2}
        y={strokeWidth / 2}
        width={size - strokeWidth}
        height={height - strokeWidth}
        rx={radius}
        ry={radius}
        stroke={color}
        strokeWidth={strokeWidth}
      />

      {/* 2. Dělící čára (mezi tlačítky) */}
      <line
        x1={size / 2}
        y1={strokeWidth}
        x2={size / 2}
        y2={height / 2 - strokeWidth / 2} // Dělící čára končí zhruba v polovině myši
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* 3. Levá část myši (tlačítko) - animovaná */}
      <motion.path
        // Toto definuje tvar levého tlačítka.
        d={`M${strokeWidth / 2},${radius} A${radius},${radius} 0 0 1 ${
          size / 2
        },${strokeWidth / 2} 
            L${size / 2},${height / 2 - strokeWidth / 2} L${strokeWidth / 2},${
          height / 2 - strokeWidth / 2
        } Z`}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        // --- ZMĚNA: NOVÁ ANIMAČNÍ LOGIKA ---

        initial={{ fill: "none", y: 0 }} // Výchozí stav (průhledná, nahoře)
        // Keyframes: Definujeme celý cyklus
        animate={{
          fill: [
            "none", // 0% - Začátek (idle)
            "none", // 80% - Většinu času je idle
            color, // 85% - Rychlý klik (vybarví se)
            color, // 95% - Drží stisknuté (vybarvená)
            "none", // 100% - Rychlé puštění (průhledná)
          ],
          y: [
            0, // 0%
            0, // 80%
            2, // 85% - Pohyb dolů
            2, // 95% - Drží dole
            0, // 100% - Zpět nahoru
          ],
        }}
        // Transition: Nastavíme, jak dlouho celý cyklus trvá
        transition={{
          repeat: Infinity, // Nekonečné opakování
          repeatType: "loop", // Začíná znovu
          duration: 3.0, // Celková délka jednoho cyklu (3 sekundy)
          ease: "linear", // Plynulý průběh celého cyklu
        }}
      />
    </motion.svg>
  );
}

export default ClickingMouseIcon;
