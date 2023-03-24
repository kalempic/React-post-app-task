import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axios";
import Person from "./Person";
import classes from "./Users.module.css";
import { AiOutlineSearch} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Users = (props) => {
  const [users, setUsers] = useState();
  const [search, setSearch] = useState('');
  const navigation = useNavigate();

  const getAllUsers = async () => {
    const response = await axiosInstance.get("/users");
    setUsers(response.data);
  };
const navigateToUser = (userId)=>{
  console.log(userId);
  navigation(`user/${userId}`,{state:{userId:userId}})
}
  useEffect(() => {
    getAllUsers();
  }, []);

 const handleSearch = (event) => {
    setSearch(event.target.value);
  };


  return (<div className={classes.userWrap} >
    <h2>Users</h2>
    <div className={classes.user}>
    <label htmlFor="search">
    <AiOutlineSearch className={classes.icon}/><input className={classes.searchInput}type="text" placeholder="Search" onChange={handleSearch} ></input>
    </label>
    {/* <button className={classes.createUser} type="submit">Create User</button> */}
    </div>
    <table className={classes.tab}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.filter((item) =>
          item.name.toLowerCase().startsWith(search.toLowerCase())
        ).map((user) => (
            <Person
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              onClick={()=>navigateToUser(user.id)}
            />
          ))}
      </tbody>
    </table>
    </div>
  );
};

export default Users;
