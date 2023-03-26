import { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import axiosInstance from "../../axios/axios";

const EditPost = (props) => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const getPost = async () => {
    const response = await axiosInstance.get(`posts/${props.postID}`);
    setPostTitle(response.data.title);
    setPostContent(response.data.body);
  };

  const savePost = async (event) => {
    event.preventDefault();
    const postObject = {
      title: postTitle,
      body: postContent,
    };
    const response = await axiosInstance.put(
      `posts/${props.postID}`,
      postObject
    );
    setPostTitle("");
    setPostContent("");
    console.log(response);
    props.onClose();
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Modal onClose={props.onClose}>
      <form>
        <div>
          <label>Title</label>
          <input
            value={postTitle ? postTitle : ""}
            onChange={(event) => setPostTitle(event.target.value)}
            type="text"
          ></input>
        </div>
        <div>
          <label>Content</label>
          <input
            value={postContent ? postContent : ""}
            type="text"
            onChange={(event) => setPostContent(event.target.value)}
          ></input>
        </div>
        <button onClick={props.onClose}>Cancel</button>
        <button onClick={(event) => savePost(event)}>Edit post</button>
      </form>
    </Modal>
  );
};

export default EditPost;
