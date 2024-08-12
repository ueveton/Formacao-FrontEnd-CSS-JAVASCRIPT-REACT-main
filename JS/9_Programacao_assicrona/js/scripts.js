// 1 - setTimeout
console.log("----- 1 - setTimeout -----")

console.log("ainda não executou 1")
setTimeout(function(){
    console.log("requisição assicrona");
}, 2000)

console.log("ainda não executou 2")

// 2 - setInterval
console.log("----- 2 - setInterval -----")

console.log("ainda não executou 3")
//setInterval (function(){
    console.log("Interval assicrona")
//}, 3000)
console.log("ainda não executou 4")

// 3 - Promises
console.log("----- 3 - Promises -----")

const promesa = Promise.resolve(5 + 5)
console.log("Algum codigo")
promesa.then(value => {
    console.log(`A soma é R$ ${value} reais`)
    return value;
}).then((value) => value - 1)
.then((value) => console.log(`Agora é  R$ ${value} reais`));

console.log("Outro codigo")

// 4 - falha Promises
console.log("----- 4 - Falha Promises -----")

Promise.resolve( 4 * "asd").then((n) =>{
    if (Number.isNaN(n)){
        throw new Error("valores invalidos");
    }
}).catch((err) => console.log(`Um erro ocorreu: ${err}`));

// 5 - Rejeitando Promises
console.log("----- 5 - Rejeitando Promises -----")
function checkNumber(p) {
    return new Promise ((resolve, reject) =>{
        if (p > 10) {
            resolve(`O numero e maior que 10`)
        } else {
            reject(new Error("Numero muito baixo"))
        }
    });
}

const a = checkNumber (20);
const b = checkNumber (10);
a.then((v) => console.log (`O resultado é ${v}`)).catch((err)=> console.log(`Um erro ocorreu ${err}`))
b.then((v) => console.log (`O resultado é ${v}`)).catch((err)=> console.log(`Um erro ocorreu ${err}`))

// 6 - resolvendo promise
console.log("----- 6 - resolvendo promise -----")
const p1 = new Promise((resolve, reject) =>{
    setTimeout(function(){
        resolve(10)
    }, 5000)
})
const p2 = Promise.resolve(10 + 10)
const p3 = new Promise((resolve, reject) =>{
    if (30 > 10) {
        resolve(30)
    } else {
        reject("Erro!")
    }
})

Promise.all([p1, p2, p3]).then((values) => console.log(values))

// 7 - async function
console.log("----- 7 - async function -----")
async function somarDeley(a, b){
    return a + b;
}
somarDeley(2, 4).then((value)=>{
    console.log(`O valor da soma é: ${value}`);
})

// 8 - await
console.log("----- 8 - await -----")
function resolveDeley(){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("Resolveu a nova Promise")
        }, 2000)
    })
}
async function chamadaAsync(){
    console.log("Chamando a promise, e esperando resultado");
    const result = await resolveDeley()
    console.log(`O resultado chegou ${result}`)
}

chamadaAsync()

// 9 - generator
console.log("----- 9 - generator -----")
function* generator(){
    yield 1;
    yield 2;
}

const gen = generator()
console.log(gen.next().value)
console.log(gen.next().value)