export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked =
    numItems !== 0 ? Math.round((numPacked / numItems) * 100) : 0;

  return (
    <footer className="stats">
      You have {numItems} items on your list, and you already packed {numPacked}{" "}
      items ({percentPacked} %)
    </footer>
  );
}
