import classes from "./SideBar.module.css";
import dashImage from "../../assets/dashboardpic.png";

const SideBar = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.showList}>
        <div className={classes.dashMenu}>
          <img className={classes.dashImg} src={dashImage} alt="dash icon" />
          <a>Dashboard</a>
        </div>
        <div className={classes.submenuWrapper}>
          <a href="#">Main</a>
          <a href="#">User Insights</a>
        </div>
      </div>
      <div className={classes.showList}>
        <div className={classes.dashMenu}>
          <img
            className={classes.dashImg}
            src={require("../../assets/resourcespic.png")}
            alt="resource icon"
          />
          <a>Resources</a>
        </div>
        <div className={classes.submenuWrapper}>
          <a href="#">Addresses</a>
          <a href="#">Comments</a>
          <a href="#">Posts</a>
          <a href="#">Purchases</a>
          <a href="#">Roles</a>
          <a href="#">Tags</a>
          <a href="#">Users</a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
