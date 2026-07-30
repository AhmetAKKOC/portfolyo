export function ProjectStage({ project }) {
  const isTelrics = project.title === "Telrics";

  return (
    <div className={`project-stage ${isTelrics ? "telrics-stage" : "medium-stage"}`} aria-hidden="true">
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
