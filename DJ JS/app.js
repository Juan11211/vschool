document.getElementById("square").addEventListener("mouseover", mouseover);
document.getElementById("square").addEventListener("mouseout", mouseOut);


function mouseover() {
    document.getElementById("square").style.backgroundColor = "blue";
}

function mouseOut() {
    document.getElementById("square").style.backgroundColor = "white";
  } 

document.getElementById("square").addEventListener("mousedown", mouseDown);
document.getElementById("square").addEventListener("mouseup", mouseUp);

function mouseDown() {
    document.getElementById("square").style.backgroundColor = "red"
}

function mouseUp() {
    document.getElementById("square").style.backgroundColor = "yellow"
}

document.getElementById("square").addEventListener("dblclick", dbClick);

function dbClick() {
  document.getElementById("square").style.backgroundColor = "green"
}

document.getElementById("body").addEventListener("wheel", myFunction);

function myFunction() {
  document.getElementById("body").style.backgroundColor = "orange";
}

function keyDown() { 
  
}