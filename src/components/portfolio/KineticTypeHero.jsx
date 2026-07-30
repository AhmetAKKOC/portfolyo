"use client";

import { useEffect, useRef, useState } from "react";

export function KineticTypeHero() {
  const stageRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const current = {
      systemX: 0,
      systemY: 0,
      motionX: 0,
      motionY: 0,
      clearX: 0,
      clearY: 0,
      scroll: 0,
    };
    const target = { ...current };
    let motionFrame = 0;
    let readyFrame = 0;

    const applyMotion = () => {
      if (!stage) return;

      stage.style.setProperty("--system-x", `${current.systemX.toFixed(1)}px`);
      stage.style.setProperty("--system-y", `${current.systemY.toFixed(1)}px`);
      stage.style.setProperty("--motion-x", `${current.motionX.toFixed(1)}px`);
      stage.style.setProperty("--motion-y", `${current.motionY.toFixed(1)}px`);
      stage.style.setProperty("--clear-x", `${current.clearX.toFixed(1)}px`);
      stage.style.setProperty("--clear-y", `${current.clearY.toFixed(1)}px`);
      stage.style.setProperty("--type-scroll", `${current.scroll.toFixed(1)}px`);
    };

    const animateToTarget = () => {
      motionFrame = 0;
      let isMoving = false;

      Object.keys(current).forEach((key) => {
        current[key] += (target[key] - current[key]) * 0.12;
        if (Math.abs(target[key] - current[key]) > 0.08) isMoving = true;
      });

      applyMotion();
      if (isMoving) motionFrame = window.requestAnimationFrame(animateToTarget);
    };

    const requestMotion = () => {
      if (!motionFrame) motionFrame = window.requestAnimationFrame(animateToTarget);
    };

    const resetPointer = () => {
      target.systemX = 0;
      target.systemY = 0;
      target.motionX = 0;
      target.motionY = 0;
      target.clearX = 0;
      target.clearY = 0;
      requestMotion();
    };

    const updateMotionPreference = () => {
      const shouldReduce = motionQuery.matches;
      setReducedMotion(shouldReduce);

      if (shouldReduce) {
        Object.keys(current).forEach((key) => {
          current[key] = 0;
          target[key] = 0;
        });
        applyMotion();
      } else {
        updateScroll();
      }
    };

    const updateScroll = () => {
      if (!stage || motionQuery.matches) return;

      const scrollProgress = Math.min(1, window.scrollY / Math.max(window.innerHeight, 1));
      target.scroll = -scrollProgress * 74;
      requestMotion();
    };

    const updatePointer = (event) => {
      if (!stage || motionQuery.matches) return;

      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      target.systemX = x * -36;
      target.systemY = y * -20;
      target.motionX = x * 28;
      target.motionY = y * 14;
      target.clearX = x * -18;
      target.clearY = y * -10;
      requestMotion();
    };

    readyFrame = window.requestAnimationFrame(() => setIsReady(true));
    motionQuery.addEventListener("change", updateMotionPreference);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    document.addEventListener("mouseleave", resetPointer);
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    window.addEventListener("blur", resetPointer);
    updateMotionPreference();

    return () => {
      motionQuery.removeEventListener("change", updateMotionPreference);
      window.removeEventListener("pointermove", updatePointer);
      document.removeEventListener("mouseleave", resetPointer);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      window.removeEventListener("blur", resetPointer);
      if (motionFrame) window.cancelAnimationFrame(motionFrame);
      if (readyFrame) window.cancelAnimationFrame(readyFrame);
    };
  }, []);

  return (
    <div className={`kinetic-type-stage${reducedMotion ? " is-reduced" : ""}${isReady ? " is-ready" : ""}`} ref={stageRef} aria-hidden="true">
      <span className="kinetic-type-word kinetic-type-system">SYSTEMS</span>
      <span className="kinetic-type-word kinetic-type-motion">ARCHITECTURE</span>
      <span className="kinetic-type-word kinetic-type-clear">PRODUCTION READY</span>
      <span className="kinetic-type-coordinate">PRODUCT / INTERFACE / DELIVERY</span>
    </div>
  );
}
