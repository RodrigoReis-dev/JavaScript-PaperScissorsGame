   //* -------------------------- //
  //?  Paper Scissor Rock 'Game' //
 //* -------------------------- //

// Declare and store 
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let result

// Function addEventListener cick on button
// Call function to generator computer choice
// Display user choice using .innerHTML
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))


// Function computer choice by random number
// Display choice using .innerHTML
// condition declaration
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or use possibleChoices.lenght

  if ( randomNumber === 1 ){
    computerChoice = 'rock'
  }
  if ( randomNumber === 2 ){
    computerChoice = 'scissors'
  }
  if ( randomNumber === 3 ) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

// Function to get the result
// Declaration of the conditions
// Display the result by .innerHTML
function getResult() {
  if ( computerChoice === userChoice ){
    result = 'Its a draw'
  }
  if ( computerChoice === 'rock' && userChoice === 'paper' ){
    result = ' You Win! '
  }
  if ( computerChoice === 'rock' && userChoice === 'scissors' ){
    result = ' You Lose! '
  }
  if ( computerChoice === 'paper' && userChoice === 'scissors' ) {
    result = ' You Win! '
  }
  if ( computerChoice === 'paper' && userChoice === 'rock' ) {
    result = ' You Lose! '
  }
  if ( computerChoice === 'scissors' && userChoice === 'rock' ) {
    result = ' You Win! '
  }
  if ( computerChoice === 'scissors' && userChoice === 'paper' ) {
    result = ' You Lose! '
  }
  resultDisplay.innerHTML = result
}