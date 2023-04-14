// Get the player name from local storage
var playerName = localStorage.getItem("playerName");

// Get the countdown element
var countdown = document.getElementById("countdown");

// Set the initial countdown value
var countdownValue = 5;

// Start the countdown
var countdownInterval = setInterval(function() {
  // Update the countdown element with the current value
  countdown.textContent = countdownValue;
  
  // Decrement the countdown value
  countdownValue--;
  
  // If the countdown reaches zero, start the game
  if (countdownValue < 0) {
    // Clear the countdown interval
    clearInterval(countdownInterval);
    
    // Hide the countdown element
    countdown.style.display = "none";
    
    // Start the game
    startGame();
  }
}, 1000);

// Function to start the game
function startGame() {
  // Set up the initial game state
  var score = 0;
  var level = 1;
  
  // Get the color name element
  var colorName = document.getElementById("color-name");
  
  // Get the score element
  var scoreElement = document.getElementById("score");
  
  // Get the level element
  var levelElement = document.getElementById("level");
  
  // Get the canvas element
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  
  // Set up the canvas dimensions
  canvas.width = 400;
  canvas.height = 600;
  
  // Set up the game loop
  setInterval(function() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the falling color
    var fallingColor = drawFallingColor(ctx);
    
    // Update the color name element with the falling color
    colorName.textContent = fallingColor.name;
    
    // If the player clicks the correct color, update the score and level
    canvas.onclick = function(event) {
      if (event.offsetX > fallingColor.x && event.offsetX < fallingColor.x + 50 &&
          event.offsetY > fallingColor.y && event.offsetY < fallingColor.y + 50 &&
          event.button === 0) {
        score += level;
        level++;
        scoreElement.textContent = score;
        levelElement.textContent = level;
      }
    };
    
    // If the falling color goes off the bottom of the screen, end the game
    if (fallingColor.y > canvas.height) {
      // Display the game over message
      ctx.font = "bold 36px Arial";
      ctx.fillStyle = "red";
      ctx.fillText("GAME OVER", 60, canvas.height / 2 - 20);
      
      // Update the leaderboard with the player's score
      updateLeaderboard(playerName, score);
      
      // Stop the game loop
      clearInterval(this);
    }
  }, 1000 / 60);
}

// Function to draw a falling color
function drawFallingColor(ctx) {
  var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  var color = colors[Math.floor(Math.random() * colors.length)];
  var x = Math.random() * (ctx.canvas.width - 50);
  var y = 0;
  
  // Draw the falling color
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 50, 50);
  
  // Return the color and position of the falling color
  return {
    name: color,
    x: x,
    y: y
  };
}

// Function to update the leaderboard
function
