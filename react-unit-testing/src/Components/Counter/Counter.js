import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <h2>Counter|Testing Events with state and updating state</h2>
      <p>
        initial value is:
        <span data-testid="valueTxt">{value}</span>
      </p>
      <button data-testid="incrmntBtn" onClick={handleIncrement}>
        +
      </button>
      <button data-testid="decrmntBtn" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
