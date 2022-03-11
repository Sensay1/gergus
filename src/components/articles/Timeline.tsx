import React from "react";
import TimelineAtricle from "./TimelineArticle.tsx";

export const Timeline = () => (
  <div className="textBox">
    <TimelineAtricle
      time="December 2017 - 2020"
      title="Started working as a climbing instructor"
      text="I have three formal educations in instructing: Klatreinstruktør inne, Trener 1 and Kurslærer Klatreinstruktør inne. I have held manny courses for bolth beginners and instructors."
      linkName="brattkompetanse.no"
      linkHref="https://www.brattkompetanse.no/"
    />
    <TimelineAtricle
      time="August 2020 - now"
      title="Became a developer for Dotkom"
      text="Dotkom is the development committee of the student association Online. We operate several projects, but the biggest is the website:"
      linkName="online.ntnu.no"
      linkHref="https://online.ntnu.no"
    />
    <TimelineAtricle
      time="January 2022 - now"
      title="Elected to Tindegruppa board"
      text="Responsibility for the website of Tindegruppa. A climbing group located at NTNU."
      linkName="ntnui.no/tindegruppa"
      linkHref="https://ntnui.no/tindegruppa/"
    />
    <TimelineAtricle
      time="February 2022 - now"
      title="Consultant at Experis"
      text="Started working for Helseplattformen on behaf of Experis. Setting upp a new medical database for all of Trøndelag with hopes of expanding to all of norway."
      linkName="helseplattformen.no"
      linkHref="https://helseplattformen.no/"
    />
  </div>
);

export default Timeline;
