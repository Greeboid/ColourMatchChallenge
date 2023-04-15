// Get the player name input element
var playerNameInput = document.getElementById("player-name-input");

// Get the start game button
var startButton = document.getElementById("start-button");

// Add a click event listener to the start game button
startButton.addEventListener("click", function() {
  // Get the player name from the input element
  var playerName = playerNameInput.value;

  // Set the player name in local storage
  localStorage.setItem("playerName", playerName);

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

      // Redirect to the game page
      window.location.href = "game.html";
    }
  }, 1000);
});
