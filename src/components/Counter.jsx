import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="counter">
        <div>This is count : {count}</div>
        <button onClick={() => setCount(count + 1)} className="inc">
          Increament++
        </button>
        <button onClick={() => setCount(count - 1)} className="dec">
          Decreament--
        </button>
      </div>
    </>
  );
};

export default Counter;
