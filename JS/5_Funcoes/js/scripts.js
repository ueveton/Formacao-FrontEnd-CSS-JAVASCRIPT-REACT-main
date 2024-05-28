// 1 - Criando uma função
console.log("----- 1 - Criando uma função -----");

function minhaFuncao (){
    console.log("Minha primeira função");
}

minhaFuncao();
/*------------------------------------------- */
const minhaFuncaoEmVariavel = function(){
    console.log("Função em variavel")
}

minhaFuncaoEmVariavel();
/*------------------------------------------- */
function funcaoComParametro (txt){
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro(`Imprimindo dados de função`);

// 2 - Return
console.log("----- 2 - Função retorno -----");

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
}
const resultado = soma (a, b);
console.log(resultado);
console.log(soma(c,d));

// 3 - Escopo da função
console.log("----- 3 - Testeando escopo da função -----");
let e = 10;

function testandoEscopo(){
    let e = 20;
    console.log(`E dentro da função ${e}`);
}

e = 15;

testandoEscopo();

console.log(`E fora da função ${e}`);

testandoEscopo();
/* --------------------------------------  */
console.log("Escopo de função com carros...");
let carro = "fiesta";

function ford () {
    let carro = "ka";
    console.log(`Carro dentro da função ${carro}`);
}

ford();

console.log(`Carro fora da função ${carro}`);

ford();


// 4 - Escopo aninhado
console.log("----- 4 - Escopo aninhado -----");

let f = 10;

function escopoAninhado() {
    let f = 20;
    if (true) {
        let f = 30;

        if (true) {
            let f = 40;
            console.log(f);
        }
        console.log(f);
    }
    console.log(f);
}

escopoAninhado();

console.log(f);
/*------------------------------------------- */
console.log("Escopo aninhado com refeição...");
let refeicao = "Feijão";

function refeicaoAninhado() {
    let refeicao = "Arroz";

    if (true) {
        let refeicao = "Macarrão";
        console.log(refeicao);
        if (true) {
            let refeicao = "Churrasco";
            console.log(refeicao);
        }
    }
    console.log(refeicao);
}

refeicaoAninhado();

console.log(refeicao);

// 5 Arrow Function
console.log("------ 5 - Arrow function -----");

const testeArrow = () => {
    console.log("Esta é uma Arrow function");
}

testeArrow();

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log("Par");
        return
    }

    console.log("Impar");
}

parOuImpar(5);
parOuImpar(10);

// 6 Arrow Function P2
console.log("------ 6 - Arrow function P2-----");

const raizQuadradar = (x) => {
    return x * x;
}

console.log(raizQuadradar(4));

// seguindo uma linha sem bloco
console.log("------ seguindo uma linha sem bloco -----");
const raizQuadradar2 = (x) => x * x;

console.log(raizQuadradar2(5));
console.log(raizQuadradar2(12));

const helloWorld = () => console.log("Bem Vindo");
helloWorld();

// 7 Parametro opcional
console.log("------ 7 - Parametro opcional-----");

const multiplication = (m, n) => {
    if (n === undefined){
        return m * 2;
    } else {
        return m * n;
    }
}

console.log(multiplication(5));
console.log(multiplication(2,4));

const greeting = (name) => {
    if (!name) {
        console.log("Olá!");
        return
    }
    console.log(`Olá! ${name}!`);
}

greeting();
greeting("Ueveton");

// 8 - Default
console.log("------ 8 - Default-----");
const custonGreeting = (name, greet = "ola") => {
    return `${greet}, ${name}!`;
}

console.log(custonGreeting("Ueveton"));
console.log(custonGreeting("Heitor", "Boa tarde"));

const repeatText = (text, repeat = 2) =>{
    for (let i = 0; i < repeat; i++){
        console.log(text);
    }
}
repeatText("Testando");
repeatText("Agora repetindo 5 x", 5);

// 9 - Closure
console.log("------ 9 - Closure p1-----");

function someFunction (){
    let txt = "Alguma coisa"

    function display(){
        console.log(txt);
    }
    display();
}

someFunction();

// 10 - Closure
console.log("------ 10 - Closure p2 -----");

const multiplicationClosure = (n) => {
    return (m) => {
        return n *m;
    };
}

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);
console.log(c1);
console.log(c2);
console.log(c1(5));
console.log(c2(10));

// 11 - Recursão
console.log("------ 11 - Recursão -----");

const untilTem = (n, m) => {
    if (n < 10){
        console.log("A função parou de executar!")
    } else {
        const x = n - m;
        console.log(x);
        untilTem(x, m);
    }
};

untilTem(100, 7);

function factorial(x){
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
};

const num = 6;
const result = factorial(num);
console.log(`O fatorial do numero ${num} é ${result}`);