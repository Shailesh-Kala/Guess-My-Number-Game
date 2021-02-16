'use strict';

//------------Selecting and Manipulating element-------------------------------------
// const myMessage = document.querySelector('.message');
// console.log(myMessage);

// myMessage.textContent = 'Correct Answer...';
// console.log((myMessage.textContent = 'correct answer'));

// document.querySelector('.number').textContent = 15;

// console.log(document.querySelector('.score').textContent);
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 9;
// console.log(document.querySelector('.guess').value);

// Coding Challange---------------------------------------------------------------------------

let score, heighScore, secretNumber;

const again = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber); //Print in console
  score = 20;
  heighScore = 0;
};
again();

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const reset = function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('❗No Number');
  } else if (guess === secretNumber) {
    displayMessage('✅Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (heighScore < score) {
      heighScore += score;
      document.querySelector('.highscore').textContent = heighScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(secretNumber < guess ? '⬆Too high...' : '⬇Too low...');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('☢ You lost the game');
    }
    reset();
  }
});
// //--Again play------------------------------------------------------------------------------------

document.querySelector('.again').addEventListener('click', function () {
  again();
  displayMessage('Start guessing...');
  reset();
  document.querySelector('.guess').value = ' ';
  document.querySelector('.score').textContent = score;
});
