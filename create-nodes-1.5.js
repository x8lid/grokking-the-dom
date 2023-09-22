const divOne = document.createElement("div");
divOne.classList.add("red");

const divTwo = document.createElement("div");
divTwo.classList.add("green");

const divThree = document.createElement("div");
divThree.classList.add("blue");
divThree.textContent = "я вложен";

divOne.append(divTwo);
divTwo.append(divThree);


console.log(divOne)