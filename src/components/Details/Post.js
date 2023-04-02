import classes from "./Posts.module.css";

const Post = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>
        <div className={classes.managePost}>
          <button
            className={classes.edit}
            onClick={() => props.onSetEditPostID(props.id)}
          >
            Edit
          </button>
          <button
            className={classes.delete}
            onClick={() => props.onDelete(props.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Post;
