import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sort, setSort] = useState("input");

  let sortedItems;

  switch (sort) {
    case "description":
      sortedItems = [...items].sort((a, b) =>
        a.description.localeCompare(b.description),
      );
      break;
    case "packed":
      sortedItems = [...items].sort((a, b) => a.packed - b.packed);
      break;
    default:
      sortedItems = items;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="action">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by the input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>

      <button onClick={() => onClearItems()}>Clear list</button>
    </div>
  );
}
