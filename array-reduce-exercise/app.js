//1 Turn an array of numbers into a total of all the numbers

// function total(arr) {
//   return arr.reduce((a, b) => a += b)
//  }
 
//  console.log(total([1,2,3])); // 6

//2 Turn an array of numbers into a long string
// function stringConcat(arr) {
//     return arr.reduce((string, num) => string += num += "")
//  }
 
//  console.log(stringConcat([1,2,3])); // "123"
 
//3 Turn an array of voter objects into a count of how many people voted
// function totalVotes(arr) {
//     return arr.reduce((count, person) => {
//              if (person.voted === true){
//              count ++
//                 } 
//              return count
//            },0)  
//  }
 
//  var voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters)); // 7
 
//4 Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
//  function shoppingSpree(arr) {
//    return arr.reduce(function(amount, item) { 
//         return amount += item.price
//     }, 0) 
//  }
 
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005
 
//5 Given an array of arrays, flatten them into a single array

//  function flatten(arr) {
//     return arr.reduce((newArr, oldArr) => newArr.concat(oldArr), [])
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//6 Given an array of potential voters, return an object representing the results of the vote 

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    return arr.reduce((result, voter) => {
      if (18 <= voter.age && voter.age <= 25){
        result.youth++
        if (voter.voted === true){
          result.youngVotes++
        }
      }
      if (26 <= voter.age && voter.age <= 35){
        result.mids++
        if (voter.voted === true){
          result.midVotes++
        }
      }
      if (36 <= voter.age && voter.age <= 55){
        result.olds++
        if (voter.voted === true){
          result.oldVotes++
        }
      }
      return result
    },{
      youngVotes: 0,
      youth: 0,
      midVotes: 0,
      mids: 0,
      oldVotes: 0,
      olds: 0
    })
  }
    


console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

 