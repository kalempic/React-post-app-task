import { Fragment, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/axios";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Dashboard from "../Layout/SideMenu";


const EditPost=()=>{
const navigate = useNavigate();
const [post, setPost] = useState();
const location= useLocation(); 
const [postTitle, setPostTitle]= useState('');
const [postContent, setPostContent]= useState('');
const getPost = async () =>{
    if(!location.state) return;
    const response = await axiosInstance.get(`posts/${location.state.postId}`);
    setPost(response.data);
    setPostTitle(response.data.title);
    setPostContent(response.data.body);
}

const savePost= async(event)=>{
    if(!location.state) return;
        event.preventDefault();
        const postObject={
            title:postTitle,
            body:postContent,
        }
        const response= await axiosInstance.put(`posts/${location.state.postId}`, postObject)
        setPostTitle('');
        setPostContent('');
        console.log(response); 
    
}

useEffect(()=>{
    getPost();
},[])
    
return(<Fragment>
    <Header/>
    <Dashboard/>
    <form>
        <div><label>Title</label><input value={postTitle ? postTitle: ''} onChange={(event)=>setPostTitle(event.target.value)} type='text'></input></div>
        <div><label>Content</label><input value={postContent ? postContent : ''} type="text" onChange={(event)=>setPostContent(event.target.value)}></input></div>
       <button onClick={()=>navigate(`/user/${location.state.userId}`,{state:{userId:location.state.userId}})}>Cancel</button>
       <button onClick={(event)=>savePost(event)}>Edit post</button>
    </form>
    <Footer/>
    </Fragment>
)
};

export default EditPost;