import { useEffect, useRef } from "react";



export default function useVideoObserver() {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {

        // 3. Tento kód se spustí, když se komponenta "připojí"
        const videoElement = videoRef.current;
        if (!videoElement) return; // Pojistka, kdyby video ještě neexistovalo

        // 4. Vytvoříme observer
        const observer = new IntersectionObserver(
            (entries) => {
                // 'entries' je pole sledovaných prvků, nás zajímá jen ten první
                const entry = entries[0];

                // 5. Zkontrolujeme, zda je prvek viditelný
                if (entry.isIntersecting) {
                    // Pokud ano, spustíme video
                    videoElement.play();
                } else {
                    // Pokud ne, pozastavíme ho
                    videoElement.pause();
                }
            },
            {
                // Spustí se, když je vidět 50 % videa
                // Můžete změnit na 0.1 (10 %) pokud chcete, aby se spustilo dříve
                threshold: 0.5,
            }
        );

        // 6. Začneme sledovat video element
        observer.observe(videoElement);

        // 7. Funkce pro "úklid" - když komponenta zmizí, přestaneme sledovat
        return () => {
            observer.disconnect();
        };
    }, []); // Prázdné pole znamená, že se useEffect spustí jen jednou

    return videoRef;

}