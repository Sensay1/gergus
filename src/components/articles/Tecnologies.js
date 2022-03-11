import React from 'react';
import './articles.scss';
import linkedIn from '../../resources/svg/linkedIn.svg'
import gitHub from '../../resources/svg/gitHub.svg'
import mail from '../../resources/svg/mail.svg'

export const Tecnologies = () => (
    <div className="textBox">
        <div className="list">
            <h3>Tecnologies:</h3>
            <ul>
                <li>
                    <p>React/Svelte</p>
                </li>
                <li>
                    <p>Node.js</p>
                </li>
                <li>
                    <p>Maven</p>
                </li>
                <li>
                    <p>Django</p>
                </li>
                <li>
                    <p>Apollo Server</p>
                </li>
                <li>
                    <p>Firebase</p>
                </li>
                <li>
                    <p>REST</p>
                </li>
                <li>
                    <p>Linux</p>
                </li>
            </ul>
        </div>
    </div >
)

export default Tecnologies;