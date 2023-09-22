const div = document.createElement("div");
const ul = document.createElement("ul");
const li = document.createElement("li");
const a = document.createElement("a");
const li_2 = document.createElement("li");
const a_2 = document.createElement("a");

a.href = "https://instagram.com/intocode";
a.textContent = "наш инстаграм";

a_2.href = "https://intocode.ru";
a_2.textContent = "наш сайт";


div.append(ul);
ul.append(li);
li.append(a);
ul.append(li_2);
li_2.append(a_2);

document.body.appendChild(div);
console.log(div)