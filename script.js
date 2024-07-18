//place new 'div's inside original 'div'
const main = document.querySelector("#main");

//outer loop for each row of the grid
for (let i = 0; i < 16; i++){
  const rowDiv = document.createElement("div")
  rowDiv.classList.add("rowDiv")
  //inner loop to create the actual 'div's
  for (let j = 0; j < 16; j++){
    const newDiv = document.createElement("div");
    newDiv.classList.add("gridDiv");
    rowDiv.appendChild(newDiv);
  }
  main.appendChild(rowDiv);
}

let squares = document.querySelectorAll(".gridDiv");

squares.forEach((p) => colorChange(p));

function colorChange(square1) {
  square1.addEventListener("mouseover", (event) => {
    square1.style.backgroundColor = "red";
  })
} 