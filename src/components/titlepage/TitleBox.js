import { React, useEffect } from "react";
import "./titleBox.scss";
import { Divider } from "../atoms/Divider";
import $ from 'jquery';

let title;
let text;
let newlength;
let loop;
let newText = "Gerhard's page"

const changeSingleLetter = () => {
  if (newText.length <= 1) {
    text = text.substring(0, text.length - 1) + newText.substring(0, 1);
    newText = newText.substring(1, newText.length);
    clearInterval(loop);
  } else if (newText.length !== newlength || text.length <= 1) {
    text = text.substring(0, text.length - 1) + newText.substring(0, 1) + "_";
    newText = newText.substring(1, newText.length);
  } else {
    text = text.substring(0, text.length - 2);
    text = text + "_";
  }
  title.innerText = text;
};

const timedloop = () => {
  loop = setInterval(changeSingleLetter, 100);
};

export const TitleBox = () => {
  useEffect(() => {
    const screen = $(document).width();

    if (screen > 600) {
      newText = "Gerhard Gustavsen's page";
    }

    title = document.getElementById("Title"); //Make sql
    text = title.innerText;
    newlength = newText.length;
    setTimeout(timedloop, 3000);
  });

  return (
    <div id="TitleBox">
      <h1 id="Title">gergus.no_</h1>{" "}
      <p id="UnderTitle">I like to code stuff</p>
    </div>
  );
};