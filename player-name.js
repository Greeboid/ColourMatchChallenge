// Add an event listener for the player form submission
var playerForm = document.getElementById("player-form");
playerForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get the player name from the input field
  var playerNameInput = document.getElementById("player-name");
  var playerName = playerNameInput.value;
  
  // Store the player name in local storage
  localStorage.setItem("playerName", playerName);
  
  // Navigate to the game page
  window.location.href = "game.html";
});
