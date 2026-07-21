import { Game } from "./game.js"

const startButton = document.getElementById("menu");
const game = new Game();

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    game.start();
});