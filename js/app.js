'use strict';


let userName = prompt('Welcome to the magical 5 questions game! First thing first is introductions. I am Cody, Whats your name?');



// Question one
let answerOne = prompt('Okay ' + userName + ' Lets begin the game. Yes or No answers only. Do you like Spirited Away?');


if(answerOne.toLowerCase() === 'yes'){
  alert('Hell yeah me too, who doesnt like Spirited Away?');
}else if(answerOne.toLowerCase() === 'no'){
  alert('oof, wrong answer, watch it then come back.');
}else{
  alert('That is not an answer G');
}

// Question two

let answerTwo = prompt('I love Berserk, its by far the best manga out there, do you? (RIP Kentaro)');

if(answerTwo.toLowerCase() === 'yes'){
  alert('Struggle on, struggler');
}else if(answerTwo.toLowerCase() === 'no'){
  alert('Everyones entitled to their own opinions. Even if they are wrong.');
}else{
  alert('That is not an answer G');
}

// Question three

let answerThree = prompt('Do you like Lord of the Rings?');

if(answerThree.toLowerCase() === 'yes'){
  alert('Me too man, I couldnt read the books other than The Hobbit though');
}else if(answerThree.toLowerCase() === 'no'){
  alert('Everyones entitled to their own opinions. Even if they are wrong.');
}else{
  alert('That is not an answer G');
}

// Question four

let answerFour = prompt('Do you like the Star Wars Prequels?');

if(answerFour.toLowerCase() === 'yes'){
  alert('Finally a real Star Wars enjoyer.');
}else if(answerFour.toLowerCase() === 'no'){
  alert('Stop being a prude.');
}else{
  alert('That is not an answer G');
}

// Question five

let answerFive = prompt('Do you like Harry Potter? (the story not the author)');

if(answerFive.toLowerCase() === 'yes'){
  alert('Im watching a movie every weekend until Halloween :)');
}else if(answerFive.toLowerCase() === 'no'){
  alert('Must be a death eater.');
}else{
  alert('That is not an answer G');
}

alert(userName + ' you may enter.');
