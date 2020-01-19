//KEEP YOUR VARIABLE DECLARATIONS AT THE TOP.
let button = document.getElementById("Enter");

function off() {
  document.getElementById("overlay").style.display = "none";
}

button.addEventListener("click", off);
