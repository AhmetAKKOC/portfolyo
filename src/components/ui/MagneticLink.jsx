"use client";

import { useRef } from "react";

export function MagneticLink({ children, className = "", ...props }) {
  const linkRef = useRef(null);

  const resetPosition = () => {
    linkRef.current?.style.setProperty("--magnetic-x", "0px");
    linkRef.current?.style.setProperty("--magnetic-y", "0px");
  };

  const handleMouseMove = (event) => {
    const element = linkRef.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;

    element.style.setProperty("--magnetic-x", `${x.toFixed(2)}px`);
    element.style.setProperty("--magnetic-y", `${y.toFixed(2)}px`);
  };

  return (
    <a
      {...props}
      className={`magnetic-link ${className}`.trim()}
      onMouseLeave={resetPosition}
      onMouseMove={handleMouseMove}
      ref={linkRef}
    >
      {children}
    </a>
  );
}
