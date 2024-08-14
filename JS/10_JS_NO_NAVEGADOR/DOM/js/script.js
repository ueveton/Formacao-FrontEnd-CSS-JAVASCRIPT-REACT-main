// 1 - Movendo-se pelo DOM
console.log("---- 1 - Movendo-se pelo DOM ----")
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - selecionando por tag
console.log("---- 2 - selecionando por tag ----")

const listItens = document.getElementsByTagName("li");
console.log(listItens)

// 3 - selecionando por id
console.log("---- 3 - selecionando por id ----")

const title = document.getElementById("title");
console.log(title)

// 4 - selecionando por classe
console.log("---- 4 - selecionando por classe ----")

const produtos = document.getElementsByClassName("produtos");
console.log(produtos)

// 5 - selecionando por queryselector
console.log("---- 5 - selecionando por queryselector ----")

console.log("-- selecionando por querySelectorAll --")
const produtosQuery = document.querySelectorAll(".product")
console.log(produtosQuery)

console.log("-- selecionando por querySelector --")
const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

// 5 - selecionando por queryselector
console.log("---- 5 - selecionando por queryselector ----")