  // inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  let intro = input.question("Let's play some Scrabble!\n\n\n Enter the word: ")
  return intro;
}
  

function simpleScore(word) {
  let letterPoints = word.length;
  return letterPoints;
}

function vowelBonusScore(word) {
  word = word.toUpperCase();
  let vowels = ['A', 'E', 'I', 'O', 'U'];
  for(i = 0; i < word.length; i++) {
    if(vowels.includes(word[i])) {
      letterPoints += 3;
    } else {
      letterPoints += 1;
    }
  }
  return;

} 

function scrabbleScore(word) {
  let letterPoints = 0
  for(let i = 0; i < word.length; i++) {
    for(letterPoints in newPointStructure) {
      if(newPointStructure[letterPoints].includes(word[i])) {

      }
    }
  }
  return letterPoints;
} 

const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scoreFunction: simpleScore
  },
  {
    name: "Bonus Vowels",
    desciption: "Vowels are 3pts, consonants are 1 pt.",
    scoreFunction: vowelBonusScore
  },
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoreFunction: scrabbleScore
  },
];

function scorerPrompt() {
    scoreQuestion = Number(input.question())
}

function transform() {};

let newPointStructure = transform(oldPointStructure);
newPointStructure = 0


function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

