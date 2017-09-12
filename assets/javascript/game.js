// Game Object
var gameObject = {
  userScore: 0,
  status: 'new game',
  crystalValue: 0
}

// Create a function to generate random number for the user to target as their score
$(document).ready(function() {
  // When target-score is clicked...
  $("#target-score").on("click", function() {
    // Generate a random number between 19-120
    var randomNumber = getRandomInt(20, 121);
    // Add random number into the target-score element
    $("#target-score").html(randomNumber);
  });
  $("#crystal").on("click", function() {
    checkGame();
  })
})


// Function that generates a random number between 19 and 120
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create a function to check if the game is in progress
function checkGame() {
  // Check if game is new
  if(gameObject.status === 'new game') {
    // Generate a random number between 1-12 and assign to gameObject crystal value
    gameObject.crystalValue = getRandomInt(1, 13);
    // Add crystal value to user score
    gameObject.userScore += gameObject.crystalValue;
    // Display new score
    $("#user-score").html(gameObject.userScore);
    // Change user status to 'playing'
    gameObject.status = 'playing';
    } else if(gameObject.status === 'playing') {
      // Set crystalValue
      var static = gameObject.crystalValue;
      // Add current crystal value to userScore
      gameObject.userScore += static;
      // Display new score
      $("#user-score").html(gameObject.userScore);
      } else {
      return;
    }
}



