import React from "react";
import profileLogo from "../images/profile1-logo.jpeg";

export default function Header(props) {
    return (
        <div className="header--container">
            <img src={profileLogo} alt="" />
        </div>
    );
}
