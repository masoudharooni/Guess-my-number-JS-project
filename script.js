'use strict';
let expectedNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('div.number').textContent = expectedNumber;
let score = 20;
const listOfScores = [];
document.querySelector('button.check').addEventListener('click', function () {
  let message = document.querySelector('p.message');
  const guessedNumber = Number(document.querySelector('.guess').value);
  if (!guessedNumber) {
    message.textContent = '⛔ Enter a number';
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
    alert('Gameover!');
    location.reload();
  }
  console.log(listOfScores);
});
// document.querySelector('span.highscore').textContent = Math.max(listOfScores);

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
