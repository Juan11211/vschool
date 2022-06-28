// task 1 to help this function return an array of animals, no matter how many animals are passed to it: 


// const collectAnimals = (...a) => {
//     return [...a]
// }
// console.log(collectAnimals('pig', 'cat', 'dog', 'fish', 'bear', 'lion',))                                                                                                                                                                                                                  
// task 2 - Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

//  function combineFruit(Fruit, Sweet, Vegatables){
//      return {}
//  }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])
// //  {
// //         fruit: ["apple", "pear"],
// //         sweets: ["cake", "pie"],
// //         vegetables: ["carrot"]
// //      }

 const combineFruit = (Fruit, Sweets, vegatables) => ({Fruit, Sweets, vegatables})
 console.log(combineFruit(['apple', 'pear'], ['cake', 'pie'], ['carrots', 'broccoli']))

// const combinedFruit = (fruit, sweets, vegetables) => ({ fruit, sweets, vegetables })
// console.log(combinedFruit(['apple', 'pear'], ['cake', 'ice cream'], ['corn', 'cabbage']))

// task 3 - Use destructuring to use the property names as variables. Destructure the object in the parameter:
// deconstructing 
// const trip = 
// { location: "Bahamas",
//   duration: "10 months"}
// // adding sentence + trip together
// function parseSentence({location, duration}) {
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
//   // result.
// console.log(parseSentence(trip));

// Use array destructuring to make this code ES6:
//   let items = ['macBooks', 'hps', 'iPad']
//     const firstItem = items => items[0] /*change this line to be es6*/
//      console.log(items[0])

// task 4 - take Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(firstFav, secondFav, thirdFav, ...arr) {
//     return `My top three favorite activities are, ${firstFav} ,   ${secondFav} , and   ${thirdFav}`;
// }
// console.log(returnFavorites(...favoriteActivities))

// task 5 - Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.
// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// const combineAnimals = (...animals) => {
//     return animals.reduce((a, b) => a.concat(...b), [])
// }
// const allAnimals = combineAnimals(realAnimals, mysteriousAnimals, magicalAnimals)
// console.log(allAnimals)

// task 6 - Try to make the following function more ES6y: 

// const product = (a, b, c, d, e) => {
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce((acc, number) => {
//       return 5 * 6;
//     }, 1)
//   } 
//   console.log(product())
  

// task 7 -- Make the following function more ES6y. Use at least both the rest and spread operators:

const arr1 = ['a', 'b', 'c']
const arr2 = ['d', 'e']
const arr3 = [...arr1, ...arr2]

const unshift = (arr, ...arr4) => {
    console.log(arr, arr4)
    return arr4.concat(arr)
}
console.log()
console.log(unshift(arr2, 'a', 's'))

  
// task 8 Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

// const names = [ 
//     { firstName: firstName },
//     { lastName: lastName }
// ]

// function populatePeople(names) {
//     return 
// } 
// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]