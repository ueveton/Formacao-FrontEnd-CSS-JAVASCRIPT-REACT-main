// 1 - add eventos
console.log("---- 1 - add eventos ----");

const btn = document.querySelector("#my-button");
btn.addEventListener("click", (e)=> {
    console.log("Clicou aqui!")
});

// 2 - remove eventos
console.log("---- 2 - remove eventos ----");

const secondBtn = document.querySelector("#btn")
function imprimirMensagem() {
    console.log("teste")
}
secondBtn.addEventListener("click", imprimirMensagem);

const thirtBtn = document.querySelector("#other-btn")
thirtBtn.addEventListener("click", ()=>{
    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})

// 3 - argumento do eventos
console.log("---- 3 - argumento do eventos ----");

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (e)=>{
    console.log(e)
    console.log(e.offsetX)
    console.log(e.pointerType)
    console.log(e.target)
});

// 4 - propagação
console.log("---- 4 - propagação ----");