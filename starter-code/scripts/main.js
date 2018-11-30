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
let player1Position = 0;
let player2Position = 0;


document.addEventListener("keydown", function(event) {
  let player1 = document.querySelector(".player1");
  let player2 = document.querySelector(".player2");
  let keydown = event.which;
  
  if (keydown === 90) {
    player1Position += 10;  
  } 
  if (keydown === 191) {
    player2Position += 10;
  }
});
