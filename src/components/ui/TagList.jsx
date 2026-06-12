export function TagList({ items, className = "tags" }) {
  return (
    <div className={className}>
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
