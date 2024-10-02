import { useState } from "react";
import "./App.css";
import Inputcontainer from "./component/Inputcontainer";
import TodoContainer from "./component/TodoContainer";

function App() {
  const [inputVal, setInputVal] = useState("");

  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal != "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }

  return (
    <main>
      <h1>To-do List</h1>

      <Inputcontainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoContainer todos={todos} delTodo = {delTodo} />
    </main>
  );
}

export default App;
