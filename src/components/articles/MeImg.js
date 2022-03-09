import React from 'react';
import './articles.scss';
import img from './../../resources/img/Me.jpg';

export const MeImg = () => (
    <div className="image" >
        <img src={img} alt="Me"></img>
    </div >
)

export default MeImg;