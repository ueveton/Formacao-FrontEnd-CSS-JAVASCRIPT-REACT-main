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

const produtos = document.getElementsByClassName("product");
console.log(produtos)

// 5 - selecionando por queryselector
console.log("---- 5 - selecionando por queryselector ----")

console.log("-- selecionando por querySelectorAll --")
const produtosQuery = document.querySelectorAll(".product")
console.log(produtosQuery)

console.log("-- selecionando por querySelector --")
const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

// 6 - insertbefore
console.log("---- 6 - insertbefore ----")

const p = document.createElement("p");
const header = title.parentElement;
header.insertBefore(p, title)

// 7 - appendChild
console.log("---- 7 - appendChild ----")

const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

// 8 - replaceChild
console.log("---- 8 - replaceChild ----")

const h2 = document.createElement("h2");
h2.textContent = "Meu titulo modificado";
header.replaceChild(h2, title)
p.textContent = "Acrescentando um paragrafo novo";
mainContainer.appendChild(p);

// 9 - createTextNode
console.log("---- 9 - createTextNode ----")

const myText = document.createTextNode("Um novo titulo add")
console.log(myText)
const h3 = document.createElement("h3");
h3.appendChild(myText);
console.log(h3)
mainContainer.appendChild(h3);

// 10 - Atributos
console.log("---- 10 - Atributos ----")

const fristlink = navLinks.querySelector("a");
console.log(fristlink);
fristlink.setAttribute("href", "http://google.com");
console.log(fristlink.getAttribute("href"));
fristlink.setAttribute("target", "_blank");

const fristlink2 = navLinks.querySelector(".linkP");
fristlink2.setAttribute("href", "http://mercadolivre.com")
fristlink2.setAttribute("target", "_blank");

// 11 - altura e largura
console.log("---- 11 - altura e largura ----")

const footer = document.querySelector("footer")
console.log(`Altura ${footer.offsetHeight}`)
console.log(`Largura ${footer.offsetWidth}`)
console.log(footer.clientHeight)
console.log(footer.clientWidth)

// 12 - getClientBoundingReact
console.log("---- 12 - getClientBoundingReact ----")

const produtos1 = produtos[0];
console.log(produtos1.getBoundingClientRect())

// 13 - style css
console.log("---- 13 - style css ----")

mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "5px";

// 14 - alterando style
console.log("---- 14 - alterando style ----")

for (const li of listItens) {
    li.style.backgroundColor ="red"
    li.style.fontFamily = "Helvetica";
    li.style.fontSize = "1.5em";
}