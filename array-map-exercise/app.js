// 1) Make an array of numbers that are doubles of the first array**
function doubleNumbers(arr){
     return arr.map(number => number * 2)
  }
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//   // Take an array of numbers and make them strings
 function stringItUp(arr){
    return arr.map(num => num.toString())
  }
  
 console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

 // Capitalize the first letter of each name and make the rest of the characters lowercase
 function capitalizeNames(arr){
     let lowerCase = arr.map(name => name.toLowerCase())
     return lowerCase.map(name => name.replace(name[0], name[0].toUpperCase()))
 }
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 


  
  // Output:
  // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  
  // Make an array of strings of the names

  function namesOnly(arr){
    return arr.map( i => i.name) 
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
         return arr.map(ageCheck)
     }
     function ageCheck(age){
         if (age.age >= 18){
             return `${age.name} can go`
         } else {
             return `${age.name} is too young!`
         }
     }
     function makeStrings(arr) {
         return arr.map( age => age.age >= 18 ? `${age.name} can go `: `${age.name} is too young`)
     }
  

  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  

 // Make an array of the names in h1s, and the ages in h2s

  function readyToPutInTheDOM(arr){
    let h1 = arr.map
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]

  function doubleNumberss(newArr) { 
    return newArr.map(numbers => numbers * 2)
  }

  console.log(doubleNumberss([10, 20, 30]));
