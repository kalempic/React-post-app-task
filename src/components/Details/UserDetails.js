import UserImg from "../../assets/user.png"
import classes from "./UserDetails.module.css"

const UserDetails=(props)=>{
    return(<div className={classes.userForm}>
        <div><span className={classes.avatar}>Avatar:</span><img src={UserImg} className={classes.imgUser}></img></div>
        <div><span>Name:</span>
            {props.user.name}
        </div>
        <div><span>UserId:</span>{props.user.id}</div>
        <div><span>Email:</span>{props.user.email}</div>
    </div>)
}

export default UserDetails;