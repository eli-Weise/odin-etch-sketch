const main = document.querySelector("#main");

for (let i = 0; i < 16; i++){
  const newDiv = document.createElement("div");
  main.appendChild(newDiv);
  console.log(main.children);
}

document.append