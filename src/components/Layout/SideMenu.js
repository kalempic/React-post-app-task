import { useState } from "react";
import classes from "./SideMenu.module.css";
import { RxDashboard } from "react-icons/rx";
import { CgSize } from "react-icons/cg";

const Dashboard = (props) => {
const [openDashboardSubmenu, setOpenDashboardSubmenu] = useState(false);
const [openResourcesSubmenu, setOpenResourcesSubmenu] = useState(false);


  return (
    <div className={classes.wrapper}>
    <div style={{display:'flex',justifyContent:'space-between'}} onClick={setOpenDashboardSubmenu.bind(this,!openDashboardSubmenu)}>
      <a> <RxDashboard/>Dashboard</a>
      </div>
      {openDashboardSubmenu &&<div className={classes.submenuWrapper}>
        <a href="#">Main</a>
        <a href="#">User Insights</a>
        </div>}
        <div style={{display:'flex',justifyContent:'space-between'}} onClick={setOpenResourcesSubmenu.bind(this,!openResourcesSubmenu)}>
      <a> <CgSize size={'21px'} style = {{transform: 'rotate(90deg)' }}/>Resources</a>
      </div>
      {openResourcesSubmenu && <div className={classes.submenuWrapper}>
      <a href="#">Addresses</a>
      <a href="#">Comments</a>
      <a href="#">Posts</a>
      <a href="#">Purchases</a>
      <a href="#">Roles</a>
      <a href="#">Tags</a>
      <a href="#">Users</a>
      </div>}
    </div>
  );
};

export default Dashboard;
