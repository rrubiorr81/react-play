import React, { useState } from "react";
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleTask } from "./todoSlice";

export function Todo() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addTask(newTask));
    setNewTask("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newTask"
          id="newTask"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <input type="submit" value="Create Task" />

        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <span
                  style={
                    todo.completed ? { textDecoration: "line-through" } : {}
                  }
                >
                  {todo.name}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(toggleTask(index));
                  }}
                >
                  {todo.completed ? "uncomplete" : "complete"}
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
}
