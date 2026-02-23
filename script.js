const score = {
  player: 0,
  computer: 0
};

function clearScore() {
    score.player = 0;
    score.computer = 0;
    document.getElementById(`playerScore`).textContent = score.player
    document.getElementById(`ComputerScore`).textContent = score.computer
    document.getElementById('ComputerBox').textContent = ""
    document.getElementById('PlayerBox').textContent = ""
    document.querySelector('.text').textContent ="The game has been reset!!"
    };
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const emojis ={
      rock : "✊",
      scissors : "✌️",
      paper :  "✋"
    };
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById('ComputerBox').textContent = emojis[computerChoice];
    document.getElementById('PlayerBox').textContent = emojis[playerChoice];

    if (playerChoice === computerChoice) {
      document.querySelector('.text').textContent = "It's a tie!"
      }
    else if (
      (playerChoice === 'rock' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'rock')
    ) {
      score.computer++;
      document.querySelector('.text').textContent =`Oh! you Lose!`
      document.getElementById(`ComputerScore`).textContent = score.computer;

    } else {
      document.querySelector('.text').textContent =`Nice job! You got a point!`
      score.player++;
      document.getElementById(`playerScore`).textContent = score.player;
    };
    if (score.player === 7){
      Swal.fire("Congrats!!\nYou Win!");
      clearScore()
      
    }
    else if(score.computer === 7) {
        Swal.fire("Game Over!!\nYou Lose!");
        clearScore()
    };
  }