import Post from "./Post";
import classes from "./Posts.module.css";
import { useContext } from "react";
import "react-notifications/lib/notifications.css";
import { UserContext } from "../../store/user-context";

const Posts = (props) => {
  const userContext = useContext(UserContext);

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
          {userContext.posts &&
            userContext.posts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                onDelete={props.onDelete}
                onSetEditPostID={props.onSetEditPostID}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
