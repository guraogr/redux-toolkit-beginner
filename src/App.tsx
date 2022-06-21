import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Up
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Down
      </button>
    </div>
  );
};

export default App;
