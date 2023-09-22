arr = [
    {
        name: 'Google',
        url: 'https://google.com'
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com'
    },
    {
        name: 'intocode',
        url: 'https://intocode.ru'
    },
];

function f(arr) {
    const ul = document.createElement("ul")

    for (let i = 0; i < arr.length; i++) {

        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = arr[i].url;
        a.textContent = arr[i].name;

        ul.appendChild(li).appendChild(a);
    }
    document.body.appendChild(ul)
}
console.log(f(arr))
