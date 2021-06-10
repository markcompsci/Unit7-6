const MY_AGE = 44
let guessNum = 0
let userGuess
let lowhi

while (userGuess !== MY_AGE) {
  if (userGuess > MY_AGE) {
    lowhi = 'lower'
  } else {
    lowhi = 'higher'
  }
  console.log(lowhi)
  if (guessNum !== 0) {
  userGuess = parseInt(prompt(`Try Again!\nWhat is my age?\nHint: My age is ${lowhi} than your guess.`))
  } else {
    userGuess = parseInt(prompt('What is my age?'))
  }
  guessNum++
}
