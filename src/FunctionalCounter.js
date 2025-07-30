import React, { useState } from 'react';

function FunctionalCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="counter-box">
      <h2>Function Component</h2>
      <p className="count">{count}</p>
      <div className="btn-group">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default FunctionalCounter;
