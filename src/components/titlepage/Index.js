import React from 'react';
import { Scroll } from '../atoms/Scroll';
import { Canvas } from './Canvas';
import { TitleBox } from './TitleBox';
import './index.scss';

export const Titlepage = () => (
    <div id="titlePageWrapper">
        <Canvas />
        <TitleBox />
        <Scroll />
    </div>
);
