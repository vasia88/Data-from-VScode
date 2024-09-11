function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  function hasPlayerWonTheRound(player, computer) {
    if(player = "Rock" && computer = "Scissors") {
      return true
    }
    
  }
  
  console.log(hasPlayerWonTheRound("Rock", "Scissors")); 
  console.log(hasPlayerWonTheRound("Scissors", "Rock")); 