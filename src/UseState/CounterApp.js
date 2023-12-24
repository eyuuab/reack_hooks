import React, { useState } from "react";

const IncrementDecrementLogger = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    // Increment the counter and log the changed state
    const newCounter = counter + 1;
    setCounter(newCounter);
    console.log("Counter incremented. New value:", newCounter);
  };

  const decrementCounter = () => {
    // Decrement the counter and log the changed state
    const newCounter = counter - 1;
    setCounter(newCounter);
    console.log("Counter decremented. New value:", newCounter);
  };

  return (
    <div>
      <h2>Increment Decrement Logger</h2>
      <p>Counter: {counter}</p>
      <button onClick={decrementCounter}>-</button>
      <button onClick={incrementCounter}>+</button>
    </div>
  );
};

export default IncrementDecrementLogger;
