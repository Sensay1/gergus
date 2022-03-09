import React from 'react';
import logo from '../../resources/svg/logo.svg';
import { Divider } from '../atoms/Divider';
import './footer.scss';

export const Footer = (props) => (
    <footer>
        <Divider />
        <img id="logo" src={logo} alt="logo" />
        <p id="footerText">{props.title}</p>
    </footer>
);

