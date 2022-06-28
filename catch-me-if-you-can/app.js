// try { 
//     if ( 2 !== 2){ 
//         throw "Hey this is an error"
//     }
//     console.log("Did i console log?")
// }
// catch(err){ 
//     console.log(err)
// }
// finally { 
//     console.log("I am running no matter what")
// }

// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:


function sum(x, y) {

    try{
        if(typeof (x, y) !== "number"){
            throw "not a number"
        }
    }
    catch(err){
        return(err)
    }

    return x + y
}