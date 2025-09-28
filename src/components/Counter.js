import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h3>Counter Component</h3>
      <p>Current count: <strong>{count}</strong></p>
      <div className="counter-buttons">
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
};

export default Counter;