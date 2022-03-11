import React from 'react';
import './articles.scss';
import linkedIn from '../../resources/svg/linkedIn.svg'
import gitHub from '../../resources/svg/gitHub.svg'
import mail from '../../resources/svg/mail.svg'
import cv from '../../resources/svg/cv.svg'

export const Links = () => (
    <div class="links">
        <a href="https://www.linkedin.com/" class="underline">
            <img src={linkedIn} alt="" />
            LinkedIn
        </a>
        <a href="https://www.github.com/" class="underline">
            <img src={gitHub} alt="" />
            GitHub
        </a>
        <a href="https://www.linkedin.com/" class="underline">
            <img src={mail} alt="" />
            Mail
        </a>
        <a href="https://www.linkedin.com/" class="underline">
            <img src={cv} alt="" />
            CV
        </a>
    </div>
);

export default Links;