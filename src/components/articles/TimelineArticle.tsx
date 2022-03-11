import React from "react";
import "./timeline.scss";
import linkedIn from "../../resources/svg/linkedIn.svg";
import gitHub from "../../resources/svg/gitHub.svg";
import mail from "../../resources/svg/mail.svg";

interface TimelineArticleProps {
  time: string;
  title: string;
  text: any;
  linkName?: string;
  linkHref?: string;
}

export const TimelineAtricle = ({ time, title, text, linkName, linkHref }) => (
  <div className="timeline">
    <div className="timelineI">
      <svg
        className="timelineO"
        aria-hidden="true"
        focusable="false"
        data-prefix="fab"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
      >
        <ellipse
          strokeWidth="2"
          ry="14"
          rx="14"
          id="svg_1"
          cy="15"
          cx="15"
          stroke="current"
          fill="none"
        />
      </svg>
    </div>
    <div>
      <h3>
        {time} <br />
        {title}
      </h3>
      <div className="timelineText">
        <p>{text}</p>
        <a className="underline" href={linkHref}>
          {linkName}
        </a>
      </div>
    </div>
  </div>
);

export default TimelineAtricle;
