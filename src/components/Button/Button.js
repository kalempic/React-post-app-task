import classes from "./Button.module.css";

const Button = ({ content, onClick }) => (
  <button className={classes.button} onClick={onClick}>
    {content}
  </button>
);

export default Button;
