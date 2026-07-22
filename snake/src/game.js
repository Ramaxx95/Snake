import './style.css'
import { Snake } from "./snake.js"

const MOVE_INTERVAL = 35; // update frame every interval

export class Game {

    // Attributes
    gameEnd = false;
    currentLoopCycle = 0;
    player = new Snake();

    // Functions
    start() {
        
        console.log("Game starts...");
        requestAnimationFrame(this.gameLoop.bind(this));

    }

    gameLoop(){
        
        // TODO: poner y completar condiciones de borde en su propia clase
        if (this.player.getHeadCoordinates()[0] > 980){
            this.gameEnd = true;
        }

        if (this.gameEnd){
            return;
        }

        // TODO: manejar la parte visual por separado
        const canvas = document.getElementById("game");
        const head = canvas.getContext("2d");
        const leftEye = canvas.getContext("2d");
        const rightEye = canvas.getContext("2d")
        const mouth = canvas.getContext("2d");
        const emptySpace = canvas.getContext("2d");

        // TODO: agregar estado fin de juego
        //while (!this.gameEnd)
        let headCoord = this.player.getHeadCoordinates();

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
        
        if (this.currentLoopCycle >= MOVE_INTERVAL){

            console.log("DEBUG - coord = " + headCoord[0] + ", " + headCoord[1]);
            this.player.move(20, 0);
            this.currentLoopCycle = 0;

        }
        else {
            console.log("DEBUG - currentLoopCycle = " + this.currentLoopCycle);
            this.currentLoopCycle++;
        }

        requestAnimationFrame(this.gameLoop.bind(this));

    }

    // update() {

    // }

    // draw() {

    // }

}