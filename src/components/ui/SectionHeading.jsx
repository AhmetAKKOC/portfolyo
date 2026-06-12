export function SectionHeading({ eyebrow, title, id, action }) {
  return (
    <div className={`section-heading${action ? " row" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {action}
    </div>
  );
}
