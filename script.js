// Global score variables
let humanScore = 0;
let computerScore = 0;

// Function to randomly return "rock", "paper", or "scissors"
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get the human player's choice
function getHumanChoice() {
  let choice = prompt("Enter your choice: rock, paper, or scissors");
  choice = choice.toLowerCase();
  if (["rock", "paper", "scissors"].includes(choice)) {
    return choice;
  } else {
    alert("Invalid choice. Please enter rock, paper, or scissors.");
    return getHumanChoice(); // Recursively ask again if input is invalid
  }
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

// Function to play 3 rounds and declare the winner
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 3; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(`Round ${i + 1}: ${result}`);
  }

  console.log(`Final Score — You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    return "You win the game!";
  } else if (computerScore > humanScore) {
    return "You lose the game!";
  } else {
    return "It's a tie game!";
  }
}

// To play the game, you would call:
console.log(playGame());

