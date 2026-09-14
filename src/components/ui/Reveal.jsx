"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal.
 *
 * `immediate` opts an element out of the observer and paints it on first render. Use it
 * for anything above the fold — especially the LCP element. Gating the hero heading
 * behind hydration + IntersectionObserver put 76-82% of a 3.7s mobile LCP into render
 * delay, on text that was already present in the server HTML.
 */
export function Reveal({ children, className = "", delay = 0, immediate = false, ...rest }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;

    const element = ref.current;

    if (!element || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [immediate]);

  return (
    <div
      ref={ref}
      className={`reveal${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ "--reveal-delay": `${immediate ? 0 : delay}ms` }}
      {...rest}
    >
      {children}
    </div>
  );
}
