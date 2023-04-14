// Game Variables
var gameBoard = document.getElementById("game-board");
var ballsContainer = document.getElementById("balls-container");
var colorContainer = document.getElementById("color-container");
var colors = ["red", "blue", "green", "yellow"];
var score = 0;

// Generate Balls
function generateBalls() {
	for (var i = 0; i < 20; i++) {
		var ball = document.createElement("div");
		ball.className = "ball";
		ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
		ballsContainer.appendChild(ball);
	}
}

// Match Balls
function matchBalls(color) {
	var balls = ballsContainer.querySelectorAll(".ball");
	var matchedBalls = [];

	for
