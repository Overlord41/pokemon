import React from "react";
import { Link } from "react-router-dom";
import './ButtonForm.css';

const Buttonform = (props) => {
        return (
            <Link to={props.link}>
                <a className="Button_form">
                    {props.props}
                </a>
            </Link>
        )
}

export default Buttonform;