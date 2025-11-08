// hooks/useDeviceType.ts
import { useEffect, useState, useCallback } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

export default function useDeviceType() {
  const [device, setDevice] = useState<DeviceType>(() => {
    // SSR safe default
    return typeof window === "undefined" ? "desktop" : detectDevice();
  });

  // detection logic in one place (callable from init + resize)
  const update = useCallback(() => {
    setDevice(detectDevice());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Use rAF to avoid many reflows on continuous resize
    let raf = 0;
    const onResize = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        update();
        raf = 0;
      });
    };

    // pointer change (some devices can change pointer capability)
    const pointerMq = window.matchMedia?.("(pointer: coarse)");
    const pointerListener = () => update();

    window.addEventListener("resize", onResize, { passive: true });
    pointerMq?.addEventListener?.("change", pointerListener);
    // some browsers still have addListener
    pointerMq?.addListener?.(pointerListener);

    // also update once on mount
    update();

    return () => {
      window.removeEventListener("resize", onResize);
      pointerMq?.removeEventListener?.("change", pointerListener);
      pointerMq?.removeListener?.(pointerListener);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [update]);

  return {
    device,
    isMobile: device === "mobile",
    isTablet: device === "tablet",
    isDesktop: device === "desktop",
  };
}

/* helper: thresholds — uprav podle potřeby */
const TABLET_MIN = 600; // >= 600 considered tablet candidates
const TABLET_MAX = 1024; // <= 1024 considered tablet

function detectDevice(): DeviceType {
  if (typeof window === "undefined") return "desktop";

  const ua = navigator.userAgent || "";
  const width = window.innerWidth;
  const maxTouchPoints = navigator.maxTouchPoints ?? 0;
  const supportsTouchEvent = "ontouchstart" in window;
  const pointerCoarse =
    window.matchMedia?.("(pointer: coarse)").matches ?? false;

  // quick UA hits for phones (fallback)
  const isMobileUA = /Mobi|Android|iPhone|iPod|Windows Phone/i.test(ua);

  // heuristics:
  // 1) if viewport small -> mobile
  if (width < TABLET_MIN) return "mobile";

  // 2) if width in tablet band -> tablet candidate
  if (width >= TABLET_MIN && width <= TABLET_MAX) {
    // if it has touch characteristics -> tablet, else treat as tablet too
    if (
      maxTouchPoints > 0 ||
      supportsTouchEvent ||
      pointerCoarse ||
      isMobileUA
    ) {
      return "tablet";
    }
    return "tablet";
  }

  // 3) large viewports: could still be touch-enabled (large tablet / 2-in-1)
  if (width > TABLET_MAX) {
    // If big screen but touch-first (e.g. iPad Pro in landscape) -> tablet
    if (maxTouchPoints > 0 && pointerCoarse) {
      return "tablet";
    }
    // Otherwise desktop
    return "desktop";
  }

  return "desktop";
}
