const readline = require("readline-sync")

const message =`you're in a locked room, try to escspe.`
    console.log(message)

// defining my variables 
const choices = ["Put your hand in the hole", "Look for the key", "Try to open the door"]
let outcome = "";
const dead = "you are dead";
const escape = "Congrats, you have escaped!";
// create a loop with if statements involved. 
while (!outcome) {
    let choiceIndex = readline.keyInSelect(choices, "What do you do? ")
    if (choiceIndex === 0) {
        console.log(`Something ate your hand.`)
        outcome = dead;      
    } else if (choiceIndex === 1) {
        console.log("you found the key under the mattress!")
        outcome = escape;
    } else if (choiceIndex === 2) {
        console.log("you tried to open the door and nothing happened.")
    } else {
        console.log("you're stuck in the room for years\n")
        console.log(message)
    }

}

console.log(outcome)