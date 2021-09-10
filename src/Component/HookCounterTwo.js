import React, { useState } from "react";

function HookCounterTwo() {
  const initialState = 0;

  const [count, setcount] = useState(initialState);

  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setcount((prevState) => prevState + 1);
      //   setcount(count + 1);
    }
  };

  return (
    <div>
      <button>Count {count}</button>
      <button onClick={() => setcount(initialState)}>Reset</button>
      <button onClick={() => setcount((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setcount((prevState) => prevState - 1)}>
        Decrement
      </button>
      {/* btn increment five by for loop  */}
      <button onClick={() => IncrementFive(count)}>IncrementFive</button>
    </div>
  );
}

export default HookCounterTwo;
