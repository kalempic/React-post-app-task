import { useState } from "react";
import classes from "./SideBar.module.css";

const SideBar = (props) => {
  const [openDashboardSubmenu, setOpenDashboardSubmenu] = useState(false);
  const [openResourcesSubmenu, setOpenResourcesSubmenu] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.dashMenu}
        onClick={setOpenDashboardSubmenu.bind(this, !openDashboardSubmenu)}
      >
        <img
          className={classes.dashImg}
          src={require("../../assets/dashboardpic.png")}
          alt="dash icon"
        />
        <a>Dashboard</a>
      </div>
      {openDashboardSubmenu && (
        <div className={classes.submenuWrapper}>
          <a href="#">Main</a>
          <a href="#">User Insights</a>
        </div>
      )}
      <div
        className={classes.dashMenu}
        onClick={setOpenResourcesSubmenu.bind(this, !openResourcesSubmenu)}
      >
        <img
          className={classes.dashImg}
          src={require("../../assets/resourcespic.png")}
          alt="resource icon"
        />
        <a>Resources</a>
      </div>
      {openResourcesSubmenu && (
        <div className={classes.submenuWrapper}>
          <a href="#">Addresses</a>
          <a href="#">Comments</a>
          <a href="#">Posts</a>
          <a href="#">Purchases</a>
          <a href="#">Roles</a>
          <a href="#">Tags</a>
          <a href="#">Users</a>
        </div>
      )}
    </div>
  );
};

export default SideBar;
