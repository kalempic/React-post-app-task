import { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/axios";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Dashboard from "../Layout/SideMenu";


const CreatePost=()=>{
const navigate = useNavigate(); 
const location= useLocation(); 
const [postTitle, setPostTitle]= useState('');
const [postContent, setPostContent]= useState('');
const savePost= async(event)=>{
    if(!location.state) return;
        event.preventDefault();
        const postObject={
            title:postTitle,
            body:postContent,
            userId:location.state.userId,
        }
        const response= await axiosInstance.post("/posts", postObject)
        setPostTitle('');
        setPostContent('');
        console.log(response);    
}

    
return(<Fragment>
    <Header/>
    <Dashboard/>
    <form>
        <div><label>Title</label><input onChange={(event)=>setPostTitle(event.target.value)} type='text'></input></div>
        <div><label>Content</label><input type="text" onChange={(event)=>setPostContent(event.target.value)}></input></div>
       <button onClick={()=>navigate(`/user/${location.state.userId}`,{state:{userId:location.state.userId}})}>Cancel</button>
       <button onClick={(event)=>savePost(event)}>Save post</button>
    </form>
    <Footer/>
    </Fragment>
)
};

export default CreatePost;