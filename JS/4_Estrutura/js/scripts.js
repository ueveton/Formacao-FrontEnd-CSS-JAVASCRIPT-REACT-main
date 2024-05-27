// 1 -variaveis
let nome = "Ueveton";

console.log(nome);

nome = "Ueveton Soares Pereira";
console.log(nome);

// const = não muda de valor
const idade = 34;
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

// 2 - mais sobre variaveis
let a = 10, b = 20, c = 30;
console.log(a, b, c);

const nomecompleto = "Ueveton Soares";
const nomeCompleto = "Heitor da Silva";

console.log(nomecompleto +`, `+ nomeCompleto);

let _teste = "ok";
let $teste = "ok";

console.log(_teste +`, `+ $teste);

// 3 - prompt
/*const age = prompt("Digite a sua idade: ");
console.log(`Você tem ${age} anos.`);*/
// travado pois iria atrapalhar o alert

// 4 - alert
/*alert("Testando o alert")
const z = 10;
alert(`O numero é ${z}`);*/
// travado para dar procedimento ao curso

// 5 - math
console.log(Math.max (5,4,3,8,7));
console.log(Math.floor(5.14));
console.log(Math.ceil(5.14));

// 6 - console
console.log("teste");
console.error("erro ao gravar!");
console.warn("Preencha o campo teste");

// 7 - if
const m = 10;

if (m > 5) {
    console.log("M e maior que 5!");
}

// if (m > 5) {
//     console.log(`M e maior que ${m}!`);
// }

const user = "Heitor"

if (user === "Heitor") {
    console.log(`Olá ${user}`);
}

if (user === "Ueveton") {
    console.log("Olá Maria");
}

// 8 - else

const loggedin = false;

if (loggedin) {
    console.log("Está autenticado!");
} else {
    console.log("Não esta autenticado!");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log("Números mais altos");
} else {
    console.log("Os Números não são mais altos");
}

let i = 2;

if (i == 3) {
    console.log("Acresentar numeros")
} else {
    console.log("Numeros não acresentados");
}

console.log("Teste if e else com semaforo");
const semaforo = "vermelho";

if (semaforo == "verde") {
    console.log("Pista Liberada!");
} else {
    console.log("Pare, pista não esta liberada!")
}

console.log("Teste if e else com idade");
const anos = 25;

if (anos < 25) {
    console.log("Menor de idade!");
} else {
    console.log("Maior de idade!");
}

// 9 - else if
console.log("Trabalhando com Else if");
if (1 > 2) {
console.log("Teste");
} else if (2 > 3){
    console.log("Teste 2");
} else if (5 > 1) {
    console.log("Agora sim!")
}

const userName = "Heitor";
const userAge = 34;

if (userName === "José"){
    console.log("Bem vindo José");
} else if (userName === "Heitor" && userAge === 34){
    console.log("Olá Heiror, voce tem 34 anos");
} else {
    console.log("Não encontrado!");
}

console.log("Else if com Semaforo, indição PARE");
const stoplight = "vermelho";

if (stoplight === "verde") {
    console.log("Sinal está verde, pode prosseguir!");
} else if (stoplight === "amarelo") {
    console.log("Atençaõ Amarelo, favor reduzir a velocidade!");
} else {
    console.log("PARE, inpossivel prosseguir!")
}

console.log("Else if, com idade");
const age = 25;

if (age < 18) {
    console.log("Você tem menos de 18 anos. Menor de idade, inpossivel tirar carteira de motorista");
} else if (age >= 18 && age <= 24) {
    console.log("Você e maior que 18 anos e menor que 24 anos. Maior de idade, esta apto a tirar carteira de motorista categora A e B");
} else if (age >= 25) {
    console.log("Você tem mais de 25 anos, Maior de idade, esta apto a tirar carteira de motorista categora D");
} else {
    console.log("Nenhuma idade encontrdada")
}

// 10 while
