/* variables we need for the game */
var choices = ["rock", "paper", "scissors"];
var won = 0;
var lost = 0;
var drew = 0;
var played = 0;

$("#how-to-play").hide();
$("#results").hide();

$("#how-to-play-show").click(function(event) {
  $("#how-to-play").show();
  });

$("#how-to-play-hide").click(function(event) {
  $("#how-to-play").hide();
  });

$("#play-again").click(function(event) {
  $("#buttons").show();
  $("#results").hide();
  });

/* listen for a button click */
$("#buttons button").click(function(event) {
  var play_you = this.getAttribute("value");
  $("#play_you").text(play_you);
  var play_machine = computer_move();
  var verdict = compare(play_you, play_machine);
  score(verdict);

    $("#buttons").hide();
    $("#results").show();
  });

function computer_move() {
  var play_machine = Math.floor(Math.random() * (3 - 0)) + 0;

  play_machine = choices[play_machine];
  $("#play_machine").text(play_machine);

  return play_machine;
}

function compare(you, machine) {
  var verdict = "lose!";
  if ( you == machine ) {
    verdict = "draw!";
  }
  else if ( (you == "rock") && (machine == "scissors") ) {
    verdict = "win!";
  }
  else if ( (you == "scissors") && (machine == "paper") ) {
    verdict = "win!";
  }
  else if ( (you == "paper") && (machine == "rock") ) {
    verdict = "win!";
  }
  $("#verdict").text(verdict);
  return verdict;
}
  /* if ( (you == "rock") && (machine == "scissors") ) || ( (you == "scissors") && (machine == "paper") ) || ( (you == "paper") && (machine == "rock") ) { verdict = "win"; } */

function score(verdict) {
  switch (verdict) {
    case "win":
      won++;
      $("#game_won").text(won);
        break;
    case "lose":
      lost++;
      $("#game_lost").text(lost);
      break;
    case "draw":
      drew++;
      $("#game_drew").text(drew);
      break;
  }

  played++;
  $("#game_played").text(played);
}
