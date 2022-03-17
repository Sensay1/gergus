import { React, useEffect } from "react";
import "./diamond.scss";
import { Divider } from "./Divider";

export const Diamond = ({ text = "" }) => (
    <div className="diamondContainer">
        <div className="diamond">
            <h1 >{text}</h1>
            <div className="top"></div>
            <div className="bottom"></div>
        </div>
    </div>
);

export default Diamond;