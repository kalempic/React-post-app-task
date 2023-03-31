import classes from "./User.module.css";

const User = ({ id, name, email, onClick }) => {
  return (
    <tr className={classes.row} onClick={onClick}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default User;
