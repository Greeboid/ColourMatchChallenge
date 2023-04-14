// Define the colors and their corresponding points
var colors = [
  {name: "red", points: 10},
  {name: "green", points: 20},
  {name: "blue", points: 30},
  {name: "yellow", points: 40}
];

// Define the game state variables
var score = 0;
var level = 1;
var time = 60;
var currentColor = null;

// Define the function to start a new round
function newRound() {
  // Choose a random color from the list of colors
  var randomIndex = Math.floor(Math.random() * colors.length);
  currentColor = colors[randomIndex];
  
  // Update the color name in the HTML
  var colorNameSpan = document.getElementById("color-name");
  if (colorNameSpan) {
    colorNameSpan.textContent = currentColor.name;
  }
  
  // Update the score and level displays
  var scoreSpan = document.getElementById("score");
  if (scoreSpan) {
    scoreSpan.textContent = score.toString();
  }
  var levelSpan = document.getElementById("level");
  if (levelSpan) {
    levelSpan.textContent = level.toString();
  }
}

// Define the function to handle a correct color match
function handleCorrectMatch() {
  // Add the points for the current color to the score
  score += currentColor.points;
  
  // Check if the player has earned enough points to advance to the next level
  if (score >= level * 100) {
    // Increase the level and reset the score
    level += 1;
    score = 0;
    
    // Show a message to indicate the level up
    var messageDiv = document.getElementById("message");
    if (messageDiv) {
      messageDiv.textContent = "Level up!";
      setTimeout(function() {
        messageDiv.textContent = "";
      }, 2000);
    }
  }
  
  // Start a new round
  newRound();
}

// Define the function to handle an incorrect color match
function handleIncorrectMatch() {
  // Show a message to indicate the incorrect match
  var messageDiv = document.getElementById("message");
  if (messageDiv) {
    messageDiv.textContent = "Incorrect match!";
    setTimeout(function() {
      messageDiv.textContent = "";
    }, 2000);
  }
}

// Add an event listener for the space bar input
document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    // Start a new game
    score = 0;
    level = 1;
    time = 60;
    newRound();
  }
});

// Add event listeners for the color buttons
var colorButtons = document.querySelectorAll(".color-button");
for (var i = 0; i < colorButtons.length; i++) {
  var colorButton = colorButtons[i];
  colorButton.addEventListener("click", function(event) {
    // Check if the clicked color matches the current color
    var clickedColor = event.target.getAttribute("data-color");
    if (clickedColor === currentColor.name) {
      // Handle a correct match
      handleCorrectMatch();
    } else {
      // Handle an incorrect match
      handleIncorrectMatch();
    }
  });
}

// Start a new game when the page loads
newRound();
