import classes from "./Person.module.css";

const Person = (props) => {
  console.log(props.onClick);
  return (
    <tr className={classes.row} onClick={props.onClick}>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
    </tr>
  );
};

export default Person;
