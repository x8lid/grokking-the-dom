function render(arrWords) {
    const ul = document.createElement("ul");

    for (let i = 0; i < arrWords.length; i++) {
        const li = document.createElement("li");
        li.textContent = arrWords[i];
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

console.log(render(["html", "css", "js"]))