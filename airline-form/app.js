const customer= {
    diet: [],
}

document.addEventListener("submit", (e) => {
    e.preventDefault();
    customer.firstName = document.form["firstName"].value
    customer.lastName = document.form["lastName"].value
    customer.age = document.form.age.value
    customer.gender = document.form.gender.value
    customer.destination = document.form.destination.value
    for (let i = 0; i < document.form.diet.length; i++){
        if(document.form.diet[i].checked === true){
            customer.diet.push(document.form.diet[i].value)
        }
    }
    alert(`Name: ${customer.firstName} ${customer.lastName}\n 
    Age: ${customer.age}\nGender: ${customer.gender}\nDesination: ${customer.destination}\n 
    Diet: ${customer.diet}`
    )
})


//     
//      





// easier way to get value from arrays. 
// document.animals.addEventListener("submit", function(e){
//     e.preventDefault()
//     var checkedAnimals = [];
//     var checkedBoxes = document.querySelectorAll("input[name=likes]:checked");
//     for (var i = 0; i < checkedBoxes.length; i++) {
//         checkedAnimals.push(checkedBoxes[i].value);
//     }
//     console.log(checkedAnimals)
// });
