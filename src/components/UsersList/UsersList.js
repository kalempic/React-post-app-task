import { useNavigate } from "react-router-dom";
import User from "../User/User";
import classes from "./UsersList.module.css";

const UsersList = ({ users, searchTerm }) => {
  const navigation = useNavigate();

  const navigateToUser = (userId) => {
    console.log(userId);
    navigation(`user/${userId}`, { state: { userId: userId } });
  };

  const renderUsers = () => {
    return (
      users &&
      users
        .filter((item) =>
          item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        )
        .map(({ id, name, email }) => (
          <User
            key={id}
            id={id}
            name={name}
            email={email}
            onClick={() => navigateToUser(id)}
          />
        ))
    );
  };

  return (
    <table className={classes.tab}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{renderUsers()}</tbody>
    </table>
  );
};

export default UsersList;
