// adding to the list 
const form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()

const inputBox = document.getElementById("title")
    const addTo = inputBox.value 

addItemsToList(addTo)
form.title.value = " "

})


function addItemsToList(things) {

var list = document.getElementById("list")
var items = document.createElement("li")
var dltButton = document.createElement("button")

dltButton.textContent = "X";
dltButton.style.margin = "10px"
items.textContent = things


dltButton.addEventListener("click", function(event){
    event.preventDefault()
        removeItem()
})

document.getElementById("list").appendChild(items)
    items.append(dltButton)

function removeItem(){ 
    items.remove()

}}
  


