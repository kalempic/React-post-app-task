import Post from "./Post";
import classes from "./Posts.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../axios/axios";

const Posts = (props) => {
  const [postsList, setPostsList] = useState();
  const location = useLocation();

  const getPostsList = async () => {
    if (!location.state) return;
    setPostsList(props.posts);
  };

  useEffect(() => {
    getPostsList();
    //eslint-disable-next-line
  }, []);

  const handleDelete = async (deletedPostID) => {
    await axiosInstance.delete(`posts/${deletedPostID}`);
    const newPostsState = postsList.filter((post) => post.id !== deletedPostID);
    setPostsList(newPostsState);
  };
  return (
    <div>
      <table className={classes.tablePosts}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Manage post</th>
          </tr>
        </thead>
        <tbody>
          {postsList &&
            postsList.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                onDelete={handleDelete}
                onSetEditPostID={props.onSetEditPostID}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
