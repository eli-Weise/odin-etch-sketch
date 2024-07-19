//place new 'div's inside original 'div'
const main = document.querySelector("#main");

function makeGrid(sideNum) {
  //outer loop for each row of the grid
  for (let i = 0; i < sideNum; i++){
    const rowDiv = document.createElement("div")
    rowDiv.style.height = "" + (960 / sideNum);
    rowDiv.classList.add("rowDiv")
    //inner loop to create the actual 'div's
    for (let j = 0; j < sideNum; j++){
      const newDiv = document.createElement("div");
      newDiv.classList.add("gridDiv");
      newDiv.style.height = "" + (960 / sideNum);
      rowDiv.appendChild(newDiv);
    }
    main.appendChild(rowDiv);
  }

  //mouse over color change function
let squares = document.querySelectorAll(".gridDiv");

squares.forEach((p) => colorChange(p));

function colorChange(square1) {
  square1.addEventListener("mouseover", (event) => {
    square1.style.backgroundColor = "red";
  })
} 
}

makeGrid(16);



//new grid button
let but1 = document.querySelector("button");



but1.addEventListener("click", (event) => {
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }  
  let newSideNum;
  do {
  newSideNum = prompt("What size grid would you like? (1-100)");
  console.log(newSideNum);
  } while (newSideNum > 100 || newSideNum <= 0);

  
  makeGrid(newSideNum);
})