import React, { useEffect, useState } from "react";
import API from "../services/api";

function ItemList() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    API.get("/items")
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Items</h2>

      {items.map(item => (
        <div key={item.itemId}>
          {item.itemName} - {item.status}
        </div>
      ))}
    </div>
  );
}

export default ItemList;