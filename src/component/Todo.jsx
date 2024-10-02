import React from "react";

function Todo({ todo, index, delTodo }) {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="actions">
        <input className="checkbox" type="checkbox" />
        <button className="delete-btn" onClick={() => delTodo(index)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
