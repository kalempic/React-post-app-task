import { useLocation, useNavigate } from "react-router-dom";

const Post=(props)=>{

// const navigate = useNavigate();
const location= useLocation(); 
// const navigateToEditPost=(postId)=>{
//     if(!location.state) return;
//     navigate(`/editpost/${postId}`,{state:{postId:postId,userId:location.state.userId}});
// }
return(
    <tr>
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td> <div>
            <button onClick={()=> props.onSetEditPostID(props.id)}>Edit</button>
            <button onClick={() => props.onDelete(props.id)}>Delete</button>
            </div></td>
    </tr>
)
};

export default Post;