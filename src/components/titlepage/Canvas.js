import { React, useEffect } from 'react';
import './canvas.scss';
import $ from 'jquery';
import mountain from '../../resources/svg/mountain.svg';

export const Canvas = () => {
    useEffect(() => {

        //canvas props
        const canvas = document.getElementById("animation");
        const context = canvas.getContext("2d");

        //animation props
        const fps = 60;
        const updateTime = 1000 / fps;

        //easy variables for easy coding life
        const _sin = Math.sin;
        const _cos = Math.cos;

        //ShootingStar array:
        let shootingStars = []
        //star array:
        let stars = []

        //Utillity functions:
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        class shootingStar {
            constructor(speed, length, maxlength, x, y) {
                this.length = (length) ? (length) : (5); // tail length, default = 20
                this.maxlength = (maxlength) ? (maxlength) : (20)
                this.speed = (speed) ? (speed) : (10);

                this.oX = x;
                this.oY = y;
                this.headX = x; // horizontal head position
                this.headY = y; // vertical head position
                this.tailX = x; // horizontal tail position
                this.tailY = y; // vertical tail position

                const angleRadian = Math.random() * (0.4) + 0.2;

                this.xSpeed = _cos(angleRadian) * this.speed; // speed on x axis
                this.ySpeed = _sin(angleRadian) * this.speed; // speed on y axis

                this.markOfDeath = false;

                this.transform = function () {
                    const size = Math.sqrt((this.headX - this.oX) ** 2 + (this.headY - this.oY) ** 2);

                    //Move head:
                    if (this.maxlength > size) {
                        this.headX += this.xSpeed; // update x
                        this.headY += this.ySpeed; // update y
                    }

                    //Move tail:
                    if (size > this.length) {
                        this.tailX += this.xSpeed; // update x
                        this.tailY += this.ySpeed; // update y
                    }

                    if (this.tailX > this.headX) {
                        this.markOfDeath = true; //Setting mark of DEATH
                    }
                }

                this.draw = function () {
                    context.strokeStyle = "white";
                    context.beginPath();
                    context.moveTo(this.headX, this.headY);
                    context.lineTo(this.tailX, this.tailY);
                    context.stroke();
                };
            }
        }

        class star {
            constructor() {
                this.x = getRandomInt(0, canvas.width)
                this.y = getRandomInt(0, 3 * canvas.height / 4);

                this.red = false
                if (getRandomInt(0, 30) === 1) {
                    this.red = true
                }

                this.brightness = 200;
                this.size = getRandomInt(1, 2);

                this.realBright = this.brightness;
                this.direction = 1;

                this.changespeed = getRandomInt(1, 20)

                this.transform = function () {
                    this.x = this.x + 0.08;
                    this.y = this.y + 0.04;

                    if (this.realBright > this.brightness)
                        this.direction = -1;
                    else if (this.brightness - 100 > this.realBright) {
                        this.direction = 1;
                        this.changespeed = getRandomInt(1, 20)
                    }
                    this.realBright = this.realBright + this.direction * this.changespeed;
                }

                this.draw = function () {
                    context.fillStyle = "rgb(" + (this.realBright + 55) + "," + (this.realBright + 55) + "," + (this.realBright + 55) + ")";
                    if (this.red)
                        context.fillStyle = "rgb(" + (this.realBright + 55) + ", 80, 80)";
                    context.fillRect(this.x, this.y, this.size, this.size);
                };
            }
        }

        function animate() {
            context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;


            if (getRandomInt(0, 100) === 1) {
                const sx = getRandomInt(0, canvas.width)
                const sy = getRandomInt(0, canvas.height / 3);
                newShootingStar(sx, sy);
            }


            for (let i = 0; i < shootingStars.length; i++) {

                if (shootingStars[i].markOfDeath) {
                    shootingStars.splice(i, 1);
                }
                else {
                    shootingStars[i].transform();
                    shootingStars[i].draw();
                }
            }

            //limiting number of stars:
            for (let i = 0; i < (canvas.width * canvas.height / 1500); i++) {
                if (i < stars.length) {
                    if (stars[i].y > (3 * canvas.height / 4) || stars[i].x > canvas.width) {
                        stars.splice(i, 1);
                    }
                }
                else
                    stars.push(new star());
                stars[i].transform();
                stars[i].draw();
            }
            stars.splice(0, 1);
        }

        const newShootingStar = (xC, yC) => {
            //make shure mouse is inside canvas:
            const relSize = canvas.getBoundingClientRect().height;
            if (yC <= relSize) {
                //make new shooting star:
                const speed = getRandomInt(5, 15);
                const length = getRandomInt(80, 150);
                const maxlength = getRandomInt(200, 600);

                let s = new shootingStar(speed, length, maxlength, xC, yC);

                shootingStars.push(s)
            }
        }

        const starClick = (e) => {
            if (e.pageY < (canvas.height))
                newShootingStar(e.pageX, e.pageY);
        }

        const Init = () => {
            setInterval(function () {
                animate();
            }, updateTime);
        }

        Init();

        document.addEventListener("click", starClick);
        console.log("startnightJS is loaded!");
    })

    return (
        <div id="wallpaper" >
            <canvas id="animation" />
            <img id="mount" src={mountain} alt="mountain" />
        </div>
    )
};
