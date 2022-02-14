import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import DoneList from "./DoneList";

const todoList = {
  pending: "Work on react hooks",
  done: "Finishing 10 js videos",
};
export const TodoListContext = createContext(todoList);

function App() {
  const [count, setCount] = useState(0);

  return (
    <TodoListContext.Provider value={todoList}>
      <div className="App">
        <h1> hey there, i am count {count}</h1>
        <button onClick={() => setCount(count + 1)}>
          <h1>click to increment</h1>
        </button>
        <DoneList />
      </div>
    </TodoListContext.Provider>
  );
}

export default App;
