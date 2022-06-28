// const name = "John"
// let age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])


// // ### **Task 1**

// // Re-write this `.map()` using an arrow function:
// // Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map((carrot) => ({ type: "carrot", name: carrot }));
// } 

// // task 2 - Re-write this .filter() ’s callback function using an arrow function: 

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter((people) => people.friendly)
//     } 

  
// task3 - Re-write the following functions to be arrow functions:

const doMath = (a,b) => a + b;

var produceProduct = (a,b) => a * b;

// Task 4 -- Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following: 

// const printString = (firstName = 'Jane', lastName = 'Doe', age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    } 
 ];

 const animalsThatStartWithD = arr => arr.filter(animal => animal.type === "dog" ? true : false)
 
    console.log(animalsThatStartWithD(animals))