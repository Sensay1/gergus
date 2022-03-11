import React from 'react';
import './articles.scss';
import usb1 from './../../resources/img/usb1.jpg';

export const ArchUSB = () => (
    <div className="textBox">
        <div className="textImage">
            <img src={usb1} alt="usb-img"></img>
        </div>
        <p>
            The year I started studying at NTNU I quickly got introduced for Linux. I got help installing Manjaro as a dual boot on my laptop from some of the other developers at Dotkom. Pretty fast I fell in love with the package managers and how everything could be done through a terminal. After a while I became hungry for a cleaner distro and that’s when I got introduced to arch. Being quite new to Linux I did the sensible thing and installed a pure arch Linux system on my only laptop. I decided that a trial through fire was the best and fastest way to learn a new operating system. However, it quickly became apparent that this was less than ideal and when exams rolled around ended up failing a whole course manly because of Linux not being great with the eclipse specific testing library the professor had given us. A short month later I accidently did a “rm * -rf” in the root dictionary and had to retreat back to windows.
            <br />
            <br />

            Last semester I got the courage to try again, but this time wanted something even nerdier. I installed arch on a removable small usb drive. This installation was superlight with a headless start and i3 tile manager instead of a desktop environment. I got it configured for most laptops and since it is a usb I omitted the swap drive. This has so far been a great success. I use the usb for all my developing, and windows for documents and specific software. In the future I also want to find a way to bypass secure boot.
            <br />
            <br />

            Link to my rice: <a href="https://github.com/Sensay1/rice" className="underline">github/myrice.com</a>
        </p>
    </div>
);

export default ArchUSB;