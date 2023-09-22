const ul = document.createElement("ul");
ul.classList.add("list");

const li = document.createElement("li");
li.textContent = "привет,мир";

console.log(ul);


ul.append(li)