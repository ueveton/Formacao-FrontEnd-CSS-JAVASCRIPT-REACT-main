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
let p = 0;

while (p < 10 ) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}
//console.log("loop infinito");

// let x = 10;
// while (x > 5) {
//     console.log(`Imprimindo infinito ${x}`);
// }

// 11 - do while
let x = 10;

do {
    console.log(`Valor de x: ${x}`);
    x--
} while (x > 1);

// 12 - For
for ( let i = 0; i < 10; i++ ) {    
    console.log("Repetindo algo ...")
}

let y = 10;
for (y; y > 0; y = y - 1) {
    console.log(`O y está diminuindo: ${y}`);
}

console.log("for com tabuada")

for (let i = 0; i < 11; i++) {
    console.log("7 x " + i + " = " + 7 * i);
}

// 13 - identação
for (let u = 0; u < 11; u++){
    if (u * 2 > 10) {
        console.log(`Maior que ${u}`);
    } else {
        if (u / 2 ===0) {
            console.log("deu 0");
        }
    }
}

// 14 - break
for (let g = 20; g > 10; g--) {
    console.log (`O valor de g é ${g}`);
    if (g === 15) {
        console.log("O g é 15")
        break;
    }
}

// 15 - continue
for (let s = 0; s < 10; s++) {
    // operador de resto = %
    if (s % 2 ===0) {
        console.log("Numero par!");
        continue;
    }
    console.log(s);
}

// 16 - Switch
const job = "Advogado";

switch (job) {
    case "Programador":
        console.log("Programador");
        break;
    case "Advogado":
        console.log("Advogado");
        break;
    case "Engenheiro":
        console.log("Engenheiro");
        break;
    case "Contabilidade":
        console.log("Contabilidade");
        break;
    default:
        console.log("Profissão não encontrada");
}