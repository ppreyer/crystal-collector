// Game Object
var gameObject = {
  userScore: 0,
  cStatus: 'new game',
  dStatus: 'new game',
  gStatus: 'new game',
  rStatus: 'new game',
  crystalValue: 0,
  diamondValue: 0,
  gemstoneValue: 0,
  rubyValue: 0
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
    checkCrystal();
  })
  $("#diamond").on("click", function() {
    checkDiamond();
  })
  $("#gemstone").on("click", function() {
    checkGemstone();
  })
  $("#ruby").on("click", function() {
    checkRuby();
  })
})

// // Function that assigns stone value on click
// function assignStoneValue() {
//   if()
// }

// Function that generates a random number between 19 and 120
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create a function to check if the game is in progress
function checkCrystal() {
  // Check if game is new
  if(gameObject.cStatus === 'new game') {
    // Generate a random number between 1-12 and assign to gameObject crystal value
    gameObject.crystalValue = getRandomInt(1, 13);
    // Add crystal value to user score
    gameObject.userScore += gameObject.crystalValue;
    // Display new score
    $("#user-score").html(gameObject.userScore);
    // Change user status to 'playing'
    gameObject.cStatus = 'playing';
    } else if(gameObject.cStatus === 'playing') {
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


function checkDiamond() {
  // Check if game is new
  if(gameObject.dStatus === 'new game') {
    // Generate a random number between 1-12 and assign to gameObject crystal value
    gameObject.diamondValue = getRandomInt(1, 13);
    // Add crystal value to user score
    gameObject.userScore += gameObject.diamondValue;
    // Display new score
    $("#user-score").html(gameObject.userScore);
    // Change user status to 'playing'
    gameObject.dStatus = 'playing';
    } else if(gameObject.dStatus === 'playing') {
      // Set crystalValue
      var static = gameObject.diamondValue;
      // Add current crystal value to userScore
      gameObject.userScore += static;
      // Display new score
      $("#user-score").html(gameObject.userScore);
      } else {
      return;
    }
}

function checkGemstone() {
  // Check if game is new
  if(gameObject.gStatus === 'new game') {
    // Generate a random number between 1-12 and assign to gameObject crystal value
    gameObject.gemstoneValue = getRandomInt(1, 13);
    // Add crystal value to user score
    gameObject.userScore += gameObject.gemstoneValue;
    // Display new score
    $("#user-score").html(gameObject.userScore);
    // Change user status to 'playing'
    gameObject.gStatus = 'playing';
    } else if(gameObject.gStatus === 'playing') {
      // Set crystalValue
      var static = gameObject.gemstoneValue;
      // Add current crystal value to userScore
      gameObject.userScore += static;
      // Display new score
      $("#user-score").html(gameObject.userScore);
      } else {
      return;
    }
}

function checkRuby() {
  // Check if game is new
  if(gameObject.rStatus === 'new game') {
    // Generate a random number between 1-12 and assign to gameObject crystal value
    gameObject.rubyValue = getRandomInt(1, 13);
    // Add crystal value to user score
    gameObject.userScore += gameObject.rubyValue;
    // Display new score
    $("#user-score").html(gameObject.userScore);
    // Change user status to 'playing'
    gameObject.rStatus = 'playing';
    } else if(gameObject.rStatus === 'playing') {
      // Set crystalValue
      var static = gameObject.rubyValue;
      // Add current crystal value to userScore
      gameObject.userScore += static;
      // Display new score
      $("#user-score").html(gameObject.userScore);
      } else {
      return;
    }
}


