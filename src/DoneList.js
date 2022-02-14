import React, { useContext } from "react";
import { TodoListContext } from "./App";

const DoneList = () => {
  const doneList = useContext(TodoListContext);
  return (
    <div>
      <h3>🤸‍♂️ I finished: {doneList} 🤸‍♂️</h3>
    </div>
  );
};

export default DoneList;
