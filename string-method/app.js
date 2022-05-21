// step 1 
var upperCaseName = "hello"
var updated = upperCaseName.toUpperCase()
// console.log(updated)

// step 2 
var lowerCase = "HELLO"
var newOne = lowerCase.toLowerCase()
// console.log(newOne)

// function 
function together(updated, newOne) {
     updated + newOne; 
}

// final result 
var final = updated.concat(newOne)
    console.log(final)

// returns half the string 
var middleIndex = "hello"
var index =  middleIndex.length / 2 
// shows final result, to the nearest whole. 
    console.log(Math.floor(index))

 // get first half of hello
var firstHalf = newOne.slice(0, 2)
//   console.log(firstHalf)

// slicing first half 
var lastHalf = updated.slice(0, 2)
var secondHalf = newOne.slice(2, 5)
   var thirdHalf = lastHalf.concat(secondHalf)
        console.log(thirdHalf)