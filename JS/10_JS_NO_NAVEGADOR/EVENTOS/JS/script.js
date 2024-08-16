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

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", ()=>{
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log("Evento 2");
})

// 5 - preventDefault
console.log("---- 5 - preventDefault ----");

const a = document.querySelector("a")
a.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("Não vou para a pagina")
})

// 6 - Ações do teclado
console.log("---- 6 - Ações do teclado ----");

document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
})
document.addEventListener("keydown", (e) => {
    console.log(`Apertou a tecla ${e.key}`);
})

// 7 - Ações do mouse
console.log("---- 7 - Ações do mouse ----")

const mouse = document.querySelector("#mouse")
mouse.addEventListener("mousedown", (e) =>{
    console.log("Precionou o botão!");
})
mouse.addEventListener("mouseup", (e) =>{
    console.log("Soltou o botão!");
})
mouse.addEventListener("dblclick", (e) =>{
    console.log("Duplo click no botão!");
})

// 8 - Movimento do mouse
console.log("---- 8 - Movimento do mouse ----")

document.addEventListener("mousemove", (e) =>{
    // console.log(`No eico x ${e.x}`);
    // console.log(`No eico x ${e.y}`);
})

// 9 - Eventos por scroll
console.log("---- 9 - Eventos por scroll ----")

window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 20){
        console.log("Passamos do 20px")
    }
})

// 10 - Eventos por foco
console.log("---- 10 - Eventos por foco ----")

const input = document.querySelector("#my-input")
input.addEventListener("focus", (e) =>{
    console.log("Entrou no input")
})
input.addEventListener("blur", (e) =>{
    if (input.value = isNaN){
        alert("Preencher o campo")
    }
    console.log("Saiu do input")
})

// 11 - Eventos por carregamento de pagina
console.log("---- 11 - Eventos por carregamento de pagina ----")

window.addEventListener("load", ()=>{
    console.log("A pagina carregou")
})

window.addEventListener("beforeload", (e)=>{
    e.preventDefault();
    e.returnValue = "";
})

// 12 - tecnica debounce
console.log("---- 12 - tecnica debounce ----")

const debounce = (f, delay) =>{
    let timeout
    return(...arguments) =>{
        if(timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout(()=>{
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener("mousemove", debounce (()=>{
    console.log("Executando evento 400ms")
}, 400));