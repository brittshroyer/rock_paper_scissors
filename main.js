


var playerChoice = prompt("rock, paper, or scissors?");

var computerChoice = Math.random();

if (computerChoice < 0.34){
  computerChoice = 'rock';
}else if(computerChoice < 0.67){
  computerChoice = 'paper';
}else{
  computerChoice = 'scissors';
}

if (playerChoice === computerChoice){
  alert("We have a tie. Kiss your sister.");
}else if(playerChoice === 'rock'){
  if(computerChoice === 'paper'){
    alert("I win.");
    prompt("Wanna play again, loser?");
  }else{
    alert("You broke my scissors, you asshole!");
    prompt("You down to play again?");
  }
}else if(playerChoice === 'paper'){
  if(computerChoice === 'rock') {
    alert("Paper is for fags");
  }else{
    alert("Just sliced yo paper ass up!");
  }
}else(playerChoice === 'scissors'){
  if(computerChoice === 'rock'){
    alert("Smashed you up, fool.");
  }else{
    alert("Congrats, you finally won");
  }
}
