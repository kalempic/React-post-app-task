import { Fragment } from "react";
import classes from "./Footer.module.css";
import { BsDot } from "react-icons/bs";

const Footer=(props)=>{
    return(
    <Fragment>
        <div className={classes.footer} >
            <p>Powered by Laravel Nova<BsDot/>v4.0.3 (Silver Surfer)</p>
            <p>&copy;2022 Laravel LLC<BsDot/>by Taylor Otwell and David Hemphill</p>
        </div>
    </Fragment>
    )
};

export default Footer;