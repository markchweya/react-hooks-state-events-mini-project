import React from "react";

function Task() {
  function Task({text, category, handleDelete}) {
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
      <div className="label">{category}</div> 
      <div className="text">{text}</div>
      <button onClick={handleDelete} name = {text} className="delete">X</button> {/* add event listener*/}
    </div>
  );
}

export default Task;
