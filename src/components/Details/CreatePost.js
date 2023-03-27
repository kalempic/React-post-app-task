import { useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import axiosInstance from "../../axios/axios";

const CreatePost = (props) => {
  const location = useLocation();
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const savePost = async (event) => {
    if (!location.state) return;
    event.preventDefault();
    const postObject = {
      title: postTitle,
      body: postContent,
      userId: location.state.userId,
    };
    const response = await axiosInstance.post("/posts", postObject);
    setPostTitle("");
    setPostContent("");
    console.log(response);
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <form>
        <div>
          <label>Title</label>
          <input
            onChange={(event) => setPostTitle(event.target.value)}
            type="text"
          ></input>
        </div>
        <div>
          <label>Content</label>
          <input
            type="text"
            onChange={(event) => setPostContent(event.target.value)}
          ></input>
        </div>
        <button
          onClick={props.onClose}
        >
          Cancel
        </button>
        <button onClick={(event) => savePost(event)}>Save post</button>
      </form>
    </Modal>
  );
};

export default CreatePost;
