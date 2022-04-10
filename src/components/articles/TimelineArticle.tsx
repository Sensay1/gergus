import React from "react";
import "./timeline.scss";

interface TimelineArticleProps {
  time: string;
  title: string;
  text: any;
  linkName?: string;
  linkHref?: string;
}

export const TimelineAtricle: React.FC<TimelineArticleProps> = (props) => (
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
        {props.time} <br />
        {props.title}
      </h3>
      <div className="timelineText">
        <p>{props.text}</p>
        <a className="underline" href={props.linkHref}>
          {props.linkName}
        </a>
      </div>
    </div>
  </div>
);

export default TimelineAtricle;
