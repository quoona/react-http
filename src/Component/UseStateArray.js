import React, { useState } from "react";

function UseStateArray() {
  const [item, setItem] = useState([]);
  const clickHandler = () => {
    setItem([
      ...item,
      {
        id: item.length,
        number: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={clickHandler}>Add item</button>
      <ul>
        {item.map((item) => (
          <li key={item.id}>{item.number}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseStateArray;
