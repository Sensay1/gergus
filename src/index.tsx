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
import Campervan from "./components/articles/Campervan.js";
import Drone from "./components/articles/Drone.js";
import ArchUSB from "./components/articles/ArchUSB.js";
import Diamond from "./components/atoms/Diamond.js";

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
      type="noStyle"
    />
    <Container title="Timeline" type="noStyle" doc3={<Timeline />} />

    <Diamond text="Projects:" />

    <Container title="Built drones" doc3={<Drone />} />
    <Container title="Built a campervan" doc3={<Campervan />} />
    <Container
      title="Built a removable Arch-OS"
      scroll={false}
      doc3={<ArchUSB />}
    />

    <Footer title="gergus.no - 2022" />
  </React.StrictMode>,
  document.getElementById("root")
);

//Comment out for debugging!
window.onerror = function (message, url, lineNumber) {
  // code to execute on an error
  return true; // prevents browser error messages
};

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
