import React from 'react';
import './articles.scss';
import linkedIn from '../../resources/svg/linkedIn.svg'
import gitHub from '../../resources/svg/gitHub.svg'
import mail from '../../resources/svg/mail.svg'

export const Links = () => (
    <ul class="links">
        <li>
            <a href="https://www.linkedin.com/" class="underline">
                <img src={linkedIn} alt="" />
                LinkedIn
            </a>
        </li>
        <li>
            <a href="https://www.github.com/" class="underline">
                <img src={gitHub} alt="" />
                GitHub</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/" class="underline">
                <img src={mail} alt="" />
                Mail
            </a>
        </li>
    </ul>
);

export default Links;