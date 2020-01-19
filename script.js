
let button = document.querySelector("div button");

function off() {
  document.getElementById("overlay").style.display = "none";
}

button.addEventListener("click", off);
