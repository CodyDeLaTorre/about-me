'use strict';

let score = 0;

let userName = prompt('Welcome to my icebreaker game! Where you can learn about me and I can learn about you. Now for introductions. I am Cody, What\'s your name?');



// Question one

function spiritedAway(){
  let answerOne = prompt(`Okay ${userName} Lets begin the game. Yes or No answers only. Do I like Spirited Away?`);


  if(answerOne.toLowerCase() === 'yes'){
    alert('Hell yeah, who doesn\'t like Spirited Away?');
    score++;
  }else if(answerOne.toLowerCase() === 'no'){
    alert('oof, wrong answer.');
  }else{
    alert('That is not an answer G');
  }
}

spiritedAway();



// Question two

function berserk() {
  let answerTwo = prompt('Do I like Berserk? (RIP Kentaro)');

  if(answerTwo.toLowerCase() === 'yes'){
    alert('Yes, I love Berserk, its by far the best manga out there');
    score++;
  }else if(answerTwo.toLowerCase() === 'no'){
    alert('wrong');
  }else{
    alert('That is not an answer G');
  }
}
berserk();



// Question three

let answerThree = prompt('Do I like Lord of the Rings?');

if(answerThree.toLowerCase() === 'yes'){
  alert('Yes, but I couldnt read the books other than The Hobbit. Im not a fan of Tolkiens writing style');
  score++;
}else if(answerThree.toLowerCase() === 'no'){
  alert('wrong.');
}else{
  alert('That is not an answer G');
}

// Question four

let answerFour = prompt('Do I like the Star Wars Prequels?');

if(answerFour.toLowerCase() === 'yes'){
  alert('Im a real Star Wars enjoyer.');
  score++;
}else if(answerFour.toLowerCase() === 'no'){
  alert('wrong.');
}else{
  alert('That is not an answer G');
}

// Question five

let answerFive = prompt('Do I like Harry Potter? (the story not the author)');

if(answerFive.toLowerCase() === 'yes'){
  alert('Im watching a movie every weekend until Halloween :)');
  score++;
}else if(answerFive.toLowerCase() === 'no'){
  alert('wrong');
}else{
  alert('That is not an answer G');
}

//Question Six

let guessAmount = 4;

let siblings = 6;

let trial = false;

for(let i = 0; i < guessAmount ; i++){
  let userGuess = prompt('Now for a number, you only get 4 chances on this one. How many siblings do I have?');
  if(userGuess > siblings){
    alert('too high');
  }else if(userGuess < siblings){
    alert('too low');
  }else{
    alert('you got it!');
    trial = true;
    score++;
    break;
  }
}

if(trial === false){
  alert(`you're out of guesses, the correct answer was ${siblings}`);
}

//Question 7

let guessAmount2 = 6;

let states = ['california' , 'washington' , 'utah' , 'colorado', 'arizona', 'missouri', 'hawaii', 'nevada'];

let inStates = false;

for(let i = 0; i < guessAmount2; i++){
  let userGuess = prompt('Name a state I\'ve been to?');

  for(let j = 0; j < states.length; j++){
    if(userGuess.toLowerCase() === states[j]){
      inStates = true;
      alert('you\'re correct');
      score++;
    }
  }
  while(inStates === false){
    alert('Wrong, try again.');
    break;
  }
  if(inStates === true){
    break;
  }
}

if(inStates === false){
  alert(`You're out of guesses, some answers were ${states.join(', ')}`);
}




alert(`${userName} your score was ${score} out of 7, you may enter.`);
