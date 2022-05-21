var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// removes last item from vegetables array
    vegetables.pop()
//       console.log(vegetables)

// removes first 
  fruit.shift()
 //     console.log(fruit)

// find the index of orange. 
    var someFruits = fruit.indexOf("orange") 
 // console.log(someFruits);

// adding the number to the end of the array
    fruit.push(someFruits)
//     console.log(fruit)

// using the length property to find the length of the vegetable array
var amount = console.log(vegetables.length)
  //      console.log(amount)

// pushing that number to the end of the vegetables array
var newVeg = vegetables.push("3")
//    console.log(vegetables)

// putting two array together and making them one. 
const food = fruit.concat(vegetables)
 //   console.log(food)

// removing 2 elements from the new array, starting at index 4. 
const newFood = food.splice(4, 2)
 // console.log(food)

// reverse the array 
food.reverse()
    console.log(food)