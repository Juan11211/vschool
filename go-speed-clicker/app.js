const display = document.getElementById("display")
const button = document.getElementById("click")
let count

if (!localStorage.getItem("count")){
    localStorage.setItem("count", 0)
}

display.textContent = localStorage.getItem("count");

button.addEventListener("click", increment)

function increment() {
    count = localStorage.getItem("count")
    count++
    display.textContent = count
    localStorage.setItem("count", count)
}

setTimeout(timeout, 10000)

function timeout(){
    button.disabled = true;
    display.textContent = `result: ${localStorage.getItem("count")}`
    localStorage.setItem("count", 0)
}