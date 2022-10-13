console.log("*****Number Guess*****\n");

// prompt users for their username.
let username = prompt("Username: ")
console.log(`Welcome ${username} \n`);


let isPlaying = true;

let stage = 1;


// Set range as function parameter 
const gameplay = ([min, max]) => {
  // generated number between the given range
  let generatedNum = Math.floor(Math.random() * ((max + 1) - min) + min);


  //prompt the player to predict number
  let guess = parseInt(prompt(`Guess between ${min} and ${max}: `))

  // At a correct guess
  if (guess === generatedNum) {
    console.log("Mad oh, That's Correct!")
    stage += 1;
  } else {
    console.log(`Oops Wrong! The Number is ${generatedNum}`)
    console.log("\n****Game Over.****")
    isPlaying = false;
  }

}

while (isPlaying) {
  let range = [1, stage + 1];
  console.log(`---Stage ${stage}---`)
  gameplay(range)
  console.log("\n")
}

console.log(`${username}, You got ${stage - 1} Points.`)
