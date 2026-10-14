"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let disposed = false;
    let initializationId = 0;
    let lenis: { raf: (time: number) => void; destroy: () => void } | undefined;
    let animationFrameId: number | undefined;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    const stopLenis = () => {
      initializationId += 1;
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = undefined;
      }
      lenis?.destroy();
      lenis = undefined;
    };

    const initLenis = async () => {
      if (disposed || motionPreference.matches || lenis) return;
      const currentInitializationId = ++initializationId;

      try {
        const LenisModule = (await import("lenis")).default;
        if (disposed || motionPreference.matches || currentInitializationId !== initializationId) return;

        lenis = new LenisModule({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.5,
        });

        function raf(time: number) {
          if (!lenis || disposed) return;
          lenis.raf(time);
          animationFrameId = requestAnimationFrame(raf);
        }

        animationFrameId = requestAnimationFrame(raf);
      } catch (err) {
        if (!disposed) console.error("Lenis initialization error:", err);
      }
    };

    const onMotionPreferenceChange = () => {
      if (motionPreference.matches) stopLenis();
      else void initLenis();
    };

    motionPreference.addEventListener("change", onMotionPreferenceChange);
    void initLenis();

    return () => {
      disposed = true;
      motionPreference.removeEventListener("change", onMotionPreferenceChange);
      stopLenis();
    };
  }, []);

  return <>{children}</>;
}
