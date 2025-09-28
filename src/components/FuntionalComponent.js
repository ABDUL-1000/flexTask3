import React, { useState, useEffect } from 'react';

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello from Functional Component!');

  useEffect(() => {
    console.log('Functional Component mounted or updated');
    return () => {
      console.log('Functional Component will unmount');
    };
  }, [count]);

  return (
    <div className="functional-component">
      <h4>Functional Component with Hooks</h4>
      <p>{message}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <button onClick={() => setMessage('Message updated!')}>
        Change Message
      </button>
    </div>
  );
};

export default FunctionalComponent;