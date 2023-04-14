// Add an event listener for the start button
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", function(event) {
  // Navigate to the player name input page
  window.location.href = "player-name.html";
});

// Add an event listener for the leaderboard button
var leaderboardButton = document.getElementById("leaderboard-button");
leaderboardButton.addEventListener("click", function(event) {
  // Navigate to the leaderboard page
  window.location.href = "leaderboard.html";
});
