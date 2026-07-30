"use client";

import { useRef } from "react";

export function ProjectStage({ project }) {
  const isTelrics = project.title === "Telrics";
  const stageRef = useRef(null);

  const resetPerspective = () => {
    const stage = stageRef.current;
    if (!stage) return;

    stage.style.setProperty("--stage-rotate-x", "0deg");
    stage.style.setProperty("--stage-rotate-y", "0deg");
    stage.style.setProperty("--stage-pointer-x", "50%");
    stage.style.setProperty("--stage-pointer-y", "50%");
  };

  const updatePerspective = (event) => {
    const stage = stageRef.current;
    if (!stage) return;

    const bounds = stage.getBoundingClientRect();
    const pointerX = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
    const pointerY = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height));

    stage.style.setProperty("--stage-rotate-x", `${((0.5 - pointerY) * 3).toFixed(2)}deg`);
    stage.style.setProperty("--stage-rotate-y", `${((pointerX - 0.5) * 4).toFixed(2)}deg`);
    stage.style.setProperty("--stage-pointer-x", `${(pointerX * 100).toFixed(1)}%`);
    stage.style.setProperty("--stage-pointer-y", `${(pointerY * 100).toFixed(1)}%`);
  };

  return (
    <div
      className={`project-stage ${isTelrics ? "telrics-stage" : "medium-stage"}`}
      aria-hidden="true"
      onMouseLeave={resetPerspective}
      onMouseMove={updatePerspective}
      ref={stageRef}
    >
      <span className="stage-tracker stage-tracker-x" />
      <span className="stage-tracker stage-tracker-y" />
      <div className="stage-status">
        <span>{isTelrics ? "LIVE OPERATIONS" : "APPLICATION FLOW"}</span>
        <i />
      </div>
      {isTelrics ? (
        <>
          <div className="telrics-sidebar">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="telrics-board">
            <div className="board-heading">
              <span>Usage overview</span>
              <b>+ 18.4%</b>
            </div>
            <div className="signal-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="stage-table">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="stage-spine" />
        </>
      ) : (
        <>
          <div className="medium-sheet">
            <div className="sheet-brand">e</div>
            <div className="sheet-progress">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="sheet-line long" />
            <div className="sheet-line" />
            <div className="sheet-field" />
            <div className="sheet-field short" />
          </div>
          <div className="stage-stamp">verified</div>
          <div className="stage-lines">
            <i />
            <i />
            <i />
          </div>
        </>
      )}
    </div>
  );
}
