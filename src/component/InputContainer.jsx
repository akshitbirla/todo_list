import React from "react";

function Inputcontainer({inputVal, writeTodo, addTodo}) {
  return (
    <>
      <div className="input-container">
        <input className="input-field" type="text" value={inputVal} onChange={writeTodo}/>
        <button className="add-btn" onClick={addTodo}>Add a task</button>
      </div>
      <br />
    </>
  );
}

export default Inputcontainer;
