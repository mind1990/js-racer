window.onload = function () {
  players = {
    player1: {
      div: document.getElementById("player1"),
      name: 'Player2'
    },
    player2: {
      div: document.getElementById("player2"),
      name: 'Player2'
    }
  };
};


//Players start positions
var player1Position = 0;
var player2Position = 0;


document.addEventListener("keydown", function(event) {
  var player1 = document.querySelector(".player1");
  var player2 = document.querySelector(".player2");
  var keydown = event.which;
  
  if (keydown === 90) {
    player1Position += 10;  
  } 
  if (keydown === 191) {
    player2Position += 10;
  }
});
