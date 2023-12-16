const choices = document.querySelectorAll('.choice');
const userScore = document.getElementById('user-score');
const compScore = document.getElementById('comp-score');
const msg = document.getElementById('msg');

let userScoreValue = 0;
let compScoreValue = 0;

// Computer's choice
const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

// Update score and show moves
const updateScoreAndShowMoves = (userChoice, computerChoice) => {
  // Highlight user choice
  document.getElementById(userChoice).classList.add('user-choice');
  
  // Delay to simulate computer's choice (for visual effect)
  setTimeout(() => {
    // Remove highlight from user choice
    document.getElementById(userChoice).classList.remove('user-choice');
    
    // Highlight computer choice
    document.getElementById(computerChoice).classList.add('computer-choice');

    setTimeout(() => {
      // Remove highlight from computer choice after a delay (for visual effect)
      document.getElementById(computerChoice).classList.remove('computer-choice');

      const winner = getWinner(userChoice, computerChoice);
      if (winner === 'user') {
        userScoreValue++;
        userScore.textContent = userScoreValue;
        msg.textContent = 'You win!';
      } else if (winner === 'comp') {
        compScoreValue++;
        compScore.textContent = compScoreValue;
        msg.textContent = 'Computer wins!';
      } else {
        msg.textContent = 'It\'s a draw!';
      }
    }, 1000); // Adjust the delay (milliseconds) as needed
  }, 500); // Adjust the delay (milliseconds) as needed
};

// Function to get the winner
const getWinner = (userChoice, computerChoice) => {
  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'user';
  } else if (
    (userChoice === 'rock' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'rock')
  ) {
    return 'comp';
  } else {
    return 'draw';
  }
};

// Event listeners for user choice
choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    const computerChoice = getComputerChoice();
    updateScoreAndShowMoves(userChoice, computerChoice);
  });
});
