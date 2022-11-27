import React from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { toggleCompletedTodo, removeTodo } from "../todo/todos";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleTodoHandler = (id) => {
    dispatch(toggleCompletedTodo(id));
  };

  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="container">
      <div className="BUTTON"
      onClick={() => toggleTodoHandler(todo.id)}>
        <button className="button-completed">Completed</button>
      </div>
      <div>
        <p className={`${todo.completed ? "completed" : ""}`}>{todo.text}</p>
      </div>
      <button className="button1" onClick={() => removeTodoHandler(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
