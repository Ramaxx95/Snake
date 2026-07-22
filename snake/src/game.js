import './style.css'
import { Snake } from "./snake.js"

export class Game {

    gameEnd = false;

    start() {
        console.log("Game starts...");

        const player = new Snake();

        const canvas = document.getElementById("game");
        const head = canvas.getContext("2d");
        const leftEye = canvas.getContext("2d");
        const rightEye = canvas.getContext("2d")
        const mouth = canvas.getContext("2d");
        const emptySpace = canvas.getContext("2d");

        const MOVE_INTERVAL = 100; // 10 movements per second

        // TODO: agregar estado fin de juego
        //while (!this.gameEnd)
        let i = 0, now = 0;
        while (i < 500){

            if (now >= MOVE_INTERVAL){

                let headCoord = player.getHeadCoordinates();

                emptySpace.fillStyle = "black";
                emptySpace.fillRect(headCoord[0] - 20, headCoord[1], 20, 20); //(x, y, w, h)

                head.fillStyle = "green";
                head.fillRect(headCoord[0], headCoord[1], 20, 20); //(x, y, w, h)

                leftEye.fillStyle = "black";
                leftEye.fillRect(headCoord[0] + 2, headCoord[1] + 2, 2, 2);
                
                rightEye.fillStyle = "black";
                rightEye.fillRect(headCoord[0] + 14, headCoord[1] + 2, 2, 2);
                
                mouth.fillStyle = "black";
                mouth.fillRect(headCoord[0] + 2, headCoord[1] + 14, 18, 2);

                console.log("DEBUG - coord = " + headCoord[0] + ", " + headCoord[1]);
                player.move(20, 0);
                now = 0;

            }

            i++;
            now++;

        }
    }

    // update() {

    // }

    // draw() {

    // }

    // loop() {

    // }
}