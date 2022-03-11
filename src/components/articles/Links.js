import React from 'react';
import './articles.scss';
import linkedIn from '../../resources/svg/linkedIn.svg'
import gitHub from '../../resources/svg/gitHub.svg'
import mail from '../../resources/svg/mail.svg'
import cv from '../../resources/svg/cv.svg'

export const Links = () => (
    <div className="links">
        <a href="https://www.linkedin.com/in/gerhard-gustavsen-237146234/" className="underline">
            <img src={linkedIn} alt="" />
            LinkedIn
        </a>
        <a href="https://github.com/Sensay1" className="underline">
            <img src={gitHub} alt="" />
            GitHub
        </a>
        <a href="mailto:gerhard.gustavsen@outlook.com" className="underline">
            <img src={mail} alt="" />
            Mail
        </a>
        <a href="https://folk.ntnu.no/gerhargu/CV/CV.pdf" className="underline">
            <img src={cv} alt="" />
            CV
        </a>
    </div>
);

export default Links;