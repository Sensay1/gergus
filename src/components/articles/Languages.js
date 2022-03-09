import React from 'react';
import './articles.scss';
import linkedIn from '../../resources/svg/linkedIn.svg'
import gitHub from '../../resources/svg/gitHub.svg'
import mail from '../../resources/svg/mail.svg'

export const Languages = () => (
    <div className="textBox" >
        <div className="list">
            <h3>Languages:</h3>
            <ul>
                <li>
                    <p>C/C++</p>
                </li>
                <li>
                    <p>C#</p>
                </li>
                <li>
                    <p>Java</p>
                </li>
                <li>
                    <p>Python</p>
                </li>
                <li>
                    <p>JavaScript/TypeScript</p>
                </li>
                <li>
                    <p>G-code</p>
                </li>
                <li>
                    <p>HTML/CSS</p>
                </li>
            </ul>
        </div>
    </div >
)

export default Languages;