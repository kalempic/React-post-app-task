import Todo from "./Todo";
import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

const Todos = (props) => {
  const [todosList, setTodosList] = useState();
  // const location = useLocation();

  const getTodosList = async () => {
    // if (!location.state) return;
    setTodosList(props.todos);
  };

  useEffect(() => {
    getTodosList();
    // eslint-disable-next-line
  }, []);

  return (
    <table>
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
