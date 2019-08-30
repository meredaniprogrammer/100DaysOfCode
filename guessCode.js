// A code that says True when 5 comes out in the random number generation

let guessNumber = function(guess){
    let min = 5
    let max = 10
    let guessMatrix = Math.floor(Math.random() * (max - min + 1)) + min
    return guessMatrix === guess
}
let matrixGuess = guessNumber(5)
console.log(matrixGuess)
