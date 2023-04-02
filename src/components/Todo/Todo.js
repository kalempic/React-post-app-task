import trueImage from "../../assets/true.png"
import falseImage from "../../assets/false.png"


const Todo = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>
        {props.completed ? (
          <img src={trueImage} />
        ) : (
          <img src={falseImage} />
        )}
      </td>
    </tr>
  );
};

export default Todo;
