import { useState, useEffect } from "react";
import Todo from "./Todo";
import classes from "./Todos.module.css"


const Todos = (props) => {
  const [todosList, setTodosList] = useState();

  const getTodosList = async () => {
    setTodosList(props.todos);
  };

  useEffect(() => {
    getTodosList();
    // eslint-disable-next-line
  }, []);

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
        {todosList &&
          todosList.map((todo) => (
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
