import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1> hey there, i am count {count}</h1>
      <button onClick={increment}>
        <h1>click to increment</h1>
      </button>
    </div>
  );
}

export default App;
