'use strict';

// document.querySelector('.message');
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click'),
  function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
    } else if (guess > secretNumber) {
      if (score > 0) {
        document.querySelector('.message').textContent = ' Too High!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost the game!';
      }
    } else if (guess < secretNumber) {
      if (score > 0) {
        document.querySelector('.message').textContent = ' Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost the game!';
      }
    }
  };
