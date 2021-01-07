import React from "react";

export default props => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        textDecoration: props.todo.complete ? "line-through" : ""
      }}
      onClick={props.toggleComplete}
    >
      Task is:{props.todo.text} <br />Due Date is:{props.todo.duedate} status:{props.todo.expirydate}
    </div>
    <button className="btn btn-primary m-2" onClick={props.onDelete}>x</button>
  </div>
);
