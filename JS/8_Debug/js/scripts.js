// 1 - strict
console.log("----- 1 - strict -----")
"use strict";
// opa = "teste";
const opa = "teste";
// const undefined = 10;
// delete [].length;

// 2 - console.log
console.log("----- 2 - console.log -----")

let a = 1;
let b = 2;

if (a == 1){
    a = b + 2;
}
console.log(a);
for (let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a);
}

if (a > 5){
    a = 25;
}

console.log(a);

// 3 - debugger
console.log("----- 3 - debugger -----")
let c = 1;
let d = 2;
if (c ==1) {
    c = d + 2;
}

// debugger;
for (let i = 0; i < d; i++) {
    c = c + 2;
}

console.log("executou o loop")
 //debugger;
if (c > 5){
    c = 25;
}

// 4 - tratamento de dados
console.log("----- 4 - tratamento de dados -----")

function chekNumber (n) {
    const result = Number(n);
    if (Number.isNaN(result)) {
        console.log("valor incorreto");
        return;
    }

    console.log("Valor correto");
    return result;
}

chekNumber(5);
chekNumber("10");
chekNumber({});
chekNumber("teste");

// 5 - Excepition
console.log("----- 5 - Excepition -----")
let x = 10;
if (x != 11) {
    // throw new Error ("O valor de x não pode ser difirente de 11")
}

// 6 - Try Catch
console.log("----- 6 - Try Catch -----")

try {
    const soma = x + y;
} catch (err) {
    console.log(`Erro no programa: ${err}`)
}

// 7 - finally
console.log("----- 7 - finally -----")
try {
    const value = chekNumber("asd")
    if (!value) {
        throw new Error ("valores invalidos")
    }
} catch (err) {
    console.log(`Aconteceu problema ${err}`);
} finally {
    console.log("O codigo foi executado");
}

// 8 - assertion
console.log("----- 8 - assertion -----")
function checkArray(arr) {
    if (arr.length === 0){
        throw new Error("O array precisa ter elementos");
    
    } else {
    console.log(`O array tem ${arr.length} elementos`);
    }
}

checkArray([1,2,3])