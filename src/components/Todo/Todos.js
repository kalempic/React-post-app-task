import { useState, useEffect } from "react";
import Todo from "./Todo";
import classes from "./Todos.module.css";
import { useContext } from "react";
import { UserContext } from "../../store/user-context";

const Todos = (props) => {
  const userContext = useContext(UserContext);

  return (
    <table className={classes.todoTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {userContext.todos &&
          userContext.todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
      </tbody>
    </table>
  );
};

export default Todos;
