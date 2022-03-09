import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { Footer } from "./components/footer/Index.js";
import { Titlepage } from "./components/titlepage/Index.js";
import { Container } from "./components/container/Index.tsx";
import Timeline from "./components/articles/Timeline.tsx";
import $ from "jquery";
import AboutMe from "./components/articles/AboutMe.js";
import MeImg from "./components/articles/MeImg.js";
import Links from "./components/articles/Links.js";
import Languages from "./components/articles/Languages";
import Tecnologies from "./components/articles/Tecnologies";
import TecText from "./components/articles/TecText";
import { Divider } from "./components/atoms/Divider.js";
import Campervan from "./components/articles/Campervan.js";

ReactDOM.render(
  <React.StrictMode>
    <Titlepage />

    <Container
      title="Who I am:"
      doc1={<MeImg />}
      doc2={<Links />}
      doc3={<AboutMe />}
    />
    <Container
      title="What I know:"
      doc1={<Tecnologies />}
      doc2={<Languages />}
      doc3={<TecText />}
    />
    <Container title="Timeline" type="noStyle" doc3={<Timeline />} />

    <h1>Projects:</h1>
    <Divider />
    <Container title="Bulit a drone" scroll={false} />
    <Container title="Built a campervan" scroll={false} doc1={<Campervan />} />
    <Container title="Built a removable linux OS" scroll={false} />
    <Container title="Cofounder of duckmouse.no" scroll={false} />

    <Footer title="gergus.no - 2022" />
  </React.StrictMode>,
  document.getElementById("root")
);

//For scrolls on page
$(".containerScroll").click(function (clicked_id) {
  $("html,body").animate(
    {
      scrollTop:
        $(this.parentElement).offset().top + this.parentElement.clientHeight,
    },
    "slow"
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
