import { Fragment } from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Dashboard from "../Layout/SideMenu";
import Users from "../Users/Users";


const UsersPage = () =>{
    return(
     <Fragment>
      <Header/>
      <div className="wrapper">
       <Dashboard/>
       <Users/>
       </div>
      <Footer/>
     </Fragment>
    )
}
export default UsersPage;