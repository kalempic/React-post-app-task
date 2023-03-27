import UserImg from "../../assets/user.png";
import classes from "./UserDetails.module.css";

const UserDetails = (props) => {
  return (
  
    <div className={classes.userForm}>
      <div>
        <p className={classes.avatar}>Avatar:</p>
        <img src={UserImg} className={classes.imgUser} alt="User"></img>
      </div>
      <div>
        <p>Name:</p>
        <p>{props.user.name}</p>
      </div>
      <div>
        <p>UserId:</p>
        <p>{props.user.id}</p>
      </div>
      <div>
        <p>Email:</p>
        <p>{props.user.email}</p>
      </div>
    </div>
    
  );
};

export default UserDetails;
