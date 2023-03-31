const Todo = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>
        {props.completed ? (
          <img src={require("../../assets/true.png")} />
        ) : (
          <img src={require("../../assets/false.png")} />
        )}
      </td>
    </tr>
  );
};

export default Todo;
