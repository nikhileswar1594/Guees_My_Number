'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log((document.querySelector('.message').textContent = 'good score'));
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 30;
// document.querySelector('.guess').value = 11;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.floor(Math.random() * 20 + 1);
//console.log(secretNumber);
let score = 20;
let highscore = 0;

const dispMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  //document.querySelector('.message').textContent = 'Give Another Try';

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent =
    dispMsg('🧰 No input Given');

    // when input is correct
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent =
    dispMsg("Well Done that's a crct number...");

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // if input is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      dispMsg(
        guess > secretNumber
          ? 'Too High Give another try'
          : 'Too Low Give another try'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score <= 0) {
      // document.querySelector('.message').textContent =
      dispMsg("That's an Explosive Performance U lost 🤐");
    }
  }
  // else if (secretNumber > guess) {
  //   document.querySelector('.message').textContent = 'Too Low Give another try';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   // if input is big
  // } else if (secretNumber < guess) {
  //   //checking score
  //   if (score > 0) {
  //     document.querySelector('.message').textContent =
  //       'Too High Give another try';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else if (score <= 0) {
  //     document.querySelector('.message').textContent =
  //       "That's an Explosive Performance U lost 🤐";
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
