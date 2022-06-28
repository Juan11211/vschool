// const xhr = new XMLHttpRequest()
//         // method  // url                     // async?
// xhr.open("GET", "https://swapi.co/api/people", true)
// xhr.send()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         const JSONdata = xhr.responseText
//         const data = JSON.parse(JSONdata)
//         showData(data.results)
//     } 
// }


// // loops through the array and list the 10 names.

// function showData(arr){
//     for(let i = 0; i < arr.length; i++){
//         const h1 = document.createElement('h1')
//         h1.textContent = arr[i].name
//         document.body.appendChild(h1)
//     }
// }

// Use `https://api.vschool.io/pokemon` as your url for your XHR request to get the big list of pokemon.

// It will be easiest to do this in steps:

// - Step one - get the data
// - Step two - display the data 


// Write a function that gets the JSON and parses the JSON to create an array of objects that look like this: 

// {
//     name: 'Charmander',
//     resource_uri: 'api/v1/pokemon/8/'
// },
// {(Another pokemon object)},
// {(Another pokemon object)},
// {(Another pokemon object)},
// ...
// etc.

const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

    xhr.onreadystatechange = function(arrr){
        if (xhr.readyState === 4 && xhr.status === 200){
            const data = JSON.parse(xhr.responseText)
            const originalPokemon = []
             for (let i = 0; i <= 100; i++){
                 originalPokemon.push(data.objects[0].pokemon[i])
              }
             display(originalPokemon)
        }
    }
    //display data/////////
    function display(arr){
        for (let i = 0; i < arr.length; i++){
            const pokemon = document.createElement("h1")
            pokemon.textContent = arr[i].name 
            document.body.appendChild(pokemon)
        }
    }
