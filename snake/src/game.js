import './style.css'

export class Game {

    start() {
        console.log("Game starts...");

        const canvas = document.getElementById("game");
        const box = canvas.getContext("2d");

        box.fillStyle = "green";
        box.fillRect(250, 250, 20, 20); //(x, y, w, h)
    }

    // update() {

    // }

    // draw() {

    // }

    // loop() {

    // }
}