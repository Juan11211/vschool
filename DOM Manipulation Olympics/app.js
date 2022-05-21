var h1 = document.createElement("h1")
    h1.textContent = ("Javascript made this!")
    h1.style.textAlign = "center"
header.appendChild(h1);

var p = document.createElement("p")
p.innerHTML = '<span class="name">Juan</span> made this!';
    h1.appendChild(p);


const messages = document.getElementsByClassName("message"); 
    messages[0].textContent = "Hello";
    messages[1].textContent = "How are you doing today";
    messages[2].textContent = "God Bless You";
    messages[3].textContent = "Thank you so much for everything"

    
var btnClear = document.getElementById("clear")
    let input = document.querySelector(".messages")
        console.log(input)

btnClear.addEventListener("click", () => {
    input.textContent = " "
})