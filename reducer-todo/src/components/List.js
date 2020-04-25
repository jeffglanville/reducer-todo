import React from "react";
import Todo from "./Todo";

export default function TodoList({ toggleComplete, todos }) {
  if (todos) {
    return (
      <div>
        <ul>
          {todos.map((todo) => (
            <Todo key={todo.id} toggleComplete={toggleComplete} todo={todo} />
          ))}
        </ul>
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }
}
