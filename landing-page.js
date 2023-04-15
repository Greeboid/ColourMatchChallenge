// Get the start game button
var startButton = document.getElementById("start-button");

// Add a click event listener to the start game button
startButton.addEventListener("click", function() {
  // Get the player name from local storage
  var playerName = localStorage.getItem("playerName");

  // If the player name is not set, redirect to the player name input page
  if (!playerName) {
    window.location.href = "player-name.html";
  }
  // Otherwise, redirect to the game page
  else {
    window.location.href = "game.html";
  }
});
