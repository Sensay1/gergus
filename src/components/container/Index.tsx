import React from "react";
import { Scroll } from "../atoms/Scroll.js";
import "./index.scss";
import { Divider } from "../atoms/Divider";

export const Container = ({
  title = "",
  doc1 = <></>,
  doc2 = <></>,
  doc3 = <></>,
  type = "vanilla",
  scroll = true,
}) => {
  if (scroll)
    return (
      <div className={"container " + type}>
        <h1 className="containerTitle">{title}</h1>
        <div className="grid">
          {doc1}
          {doc2}
        </div>
        {doc3}
        <Scroll />
      </div>
    );
  else
    return (
      <div className={"container " + type}>
        <h1 className="containerTitle">{title}</h1>
        <div className="grid">
          {doc1}
          {doc2}
        </div>
        {doc3}
      </div>
    );
};
