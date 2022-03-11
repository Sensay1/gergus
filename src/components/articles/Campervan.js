import React from 'react';
import './articles.scss';
import { Text } from "react";
import van1 from './../../resources/img/van1.jpg';
import van2 from './../../resources/img/van2.jpg';


export const Campervan = () => (
    <div className="textBox">
        <div className="textImage">
            <img src={van1} alt="van-img"></img>
        </div>
        <p>
            The summer of 2021 I decided to build something big. I am an active climber, so I decided I wanted to build myself a van for traveling and climbing. I bought an empty van and started to work. In the span of 2 months, I had built a really nice camper as well as been on a weeklong climbing adventure. The work manly consisted of building a nice wooden interior, kitchen, desk, bed, and drawers. However, the most technical part was probably the electrical systems. I built a 12-volt power-system independent from the cars own electronics. This included a house-battery, 230v inverter, shore power charging port, solar panel and regulator, fuse boxes, lights, and chargers. I also installed a diesel-heater and gas burner as well as an electric fridge and freezer. The car is isolated well and suited for all year camping as far north as Trondheim and with a good blanked probably further north. I have lived fulltime in the car for over half a year and driven it all the way down to Spain to climb in Siurana and Margalef. Although really fun, I think the time for adventuring in the car is over for a while.
        </p>

    </div >
);

export default Campervan;