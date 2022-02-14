import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return (
    <div className="App">
      <h1> hey there, i am count {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        <h1>click to increment</h1>
      </button>
    </div>
  );
}

export default App;
