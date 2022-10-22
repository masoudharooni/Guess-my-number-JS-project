'use strict';
let expectedNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
const listOfScores = [];
document.querySelector('button.check').addEventListener('click', function () {
  let message = document.querySelector('p.message');
  const guessedNumber = Number(document.querySelector('.guess').value);
  if (guessedNumber <= 0 || guessedNumber > 20) {
    message.textContent = '⛔ Enter a valid number';
  } else if (guessedNumber === expectedNumber) {
    message.textContent = '🎉 Right choice';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('div.number').textContent = expectedNumber;
    document.querySelector('div.number').style.width = '30rem';
    listOfScores.push(score);
  } else if (guessedNumber > expectedNumber) {
    message.textContent = '👆 Too large';
    score--;
  } else if (guessedNumber < expectedNumber) {
    message.textContent = '👇 Too low';
    score--;
  }
  document.querySelector('span.score').textContent = score;
  if (score <= 0) {
    alert('You lose the game, try it again 💁‍♂️');
  }

  let largestElement = 0;
  for (let i = 0; i < listOfScores.length; i++) {
    if (listOfScores[i] > largestElement) largestElement = listOfScores[i];
  }
  document.querySelector('span.highscore').textContent = largestElement;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  expectedNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('p.message').textContent = 'Start guessing...';
});
