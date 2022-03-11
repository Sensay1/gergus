import React from 'react';
import './articles.scss';
import drone1 from './../../resources/img/drone1.jpg';


export default class Drone extends React.Component {
    render() {
        return (
            <div className="textBox" >
                <div className="textImage">
                    <img src={drone1} alt="drone-img"></img>
                </div>
                <p>
                    This project I manly include because of how young I was. Being only 2000 years younger than Jesus I was only 13 in 2013. This was when I wanted to take my electrical knowledge to the next level.I bought 4 big motors, power supplies, radio transmitters and a one way to big lithium battery.I then built and configured a quadcopter.The monster of a flying machine had a frame of wood, was almost a meter in diameter, weighed more than a small dog and looked quite sketchy. First time turning it on I was in my living room. Oblivious to me I had configured the up and down directions reversed. The quadcopter was supposed to start with all the motors off, but since it thought it was upside down the onboard flight computer got super scared and decided to jump 3 meters high and do a barrel roll. 13-year-old me got a heartrate of well above 200 and panicky switched on the controller forgetting that it had not yet been configured. The throttle was reversed and as I threw the throttle down the quadcopter set all its motors to 100% thrust. It attacked the floor like it was personal and for a moment became the deadliest battle bot I have ever seen.
                    <br />
                    <br />

                    Having gotten more adrenaline than in my past life I then went full Rambo and suffocated the poor machine with a pillow while ripping out as many wired I could.
                    <br />
                    <br />

                    It died.
                    <br />
                    <br />

                    Anyways… I built another friendlier version and another after that. It never became especially graceful and to the last day it flew like a drunken squirrel. From this I learned manly 2 things, one that I should probably never be allowed to design self-driving cars, and two that I loved building droned much more than I liked fling them.        </p>
            </div>
        )
    }
};