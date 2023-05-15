import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem('count') || '0');
    setCount(storedCount);
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleSubtract}>Subtract 1</button>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}
