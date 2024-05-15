// 1 - Number
console.log("1 - Number")
console.log(typeof 2)
console.log(typeof 5.14)
console.log(typeof -3)

// 2 - Operações aritimeicas
console.log("2 - Operações aritimeicas")
console.log("Calculo de soma 2 + 4 = " + 2 + 4)
console.log("Calculo de subtração 10 - 5 = " + 10-5)
console.log("Calculo de multiplicação 10 * 5 = " + 10*5)
console.log("Calculo de divisão 10 / 5 = " + 10/2)
console.log("calcule (2+(10*15)) = " + (2+(10*15)));

// 3 - Numeros especias ou Speial Numbers
console.log("3 - Numeros especias")
console.log("Tipo de dados Infinity = " + typeof Infinity)
console.log("Tipo de dados -Infinity  = " + typeof -Infinity)
console.log("Tipo de dados NaN não calcula numeros com letras = " + 12 -  "asd")
console.log("Tipo de dados NaN = " + typeof NaN)

// 4 - String
console.log("4 - String")
console.log ("Um texto com aspas simples")
console.log (`Um texto com crase`)
console.log (`13`)
console.log(typeof "Um texto com aspas simples")
console.log (typeof `Um texto com crase`)
console.log (typeof `13`)

// 5 - Simbolos especiais em string
console.log("5 - Simbolos especiais em string")
console.log ("testeando a  \n quebra de linha")
console.log ("Espaçamento \t tab")

// 6 - Concatenação
console.log("6 - Concatenação")
console.log("oi, " + "tudo " + "bem")
console.log(`Testando ` + `com ` + `crase`)

// 7 - Template Strings
console.log("7 - Template Strings")
console.log(`A soma de 2 + é: ${2 + 2}`)
console.log(`Podemos executar qualquer coisa aqui ${console.log("Testando aqui")}`)

// 8 - Booleans
console.log("8 - Booleans")
console.log(true)
// conparando se 5 e mair que 20, no caso false pois 5 não e maior que 20
console.log(5 > 20)
// conparando se 30 e mair que 10, no caso true pois 30 sim e maior que 10
console.log(30 > 10)
console.log(typeof false)

// 9 - comparações
console.log("9 - Comparações")
console.log(`Maior ou menor: > e <. ex: 5 > 5 ${5 > 5}`)
console.log(`Maior ou igual e menos ou igual: >= e <=. ex 5 <= 5 ${5 <=5}`)
console.log(`igual: ==. ex: 10 == 10 ${10 == 10}`)
console.log(`igual: ==. ex: 10 == 9 ${10 == 9}`)
console.log(`Diferente: !=. ex: 10 != 10 ${10 != 10}`)
console.log(`Diferente: !=. ex: 10 != 9 ${10 != 9}`)

// 10 - Valor identico
console.log("10 - Valor identico")
console.log(`=== Veririca valor e tipo. ex: 9 === "9", primeiro e valor e o segundo e tipo que é uma string, no caso sendo ${9 === "9"}`)
console.log(`Agora 9 === 9, no caso true, pois ambos são numeros. resultado: ${9 === 9}`)
console.log(`!= diferente 9 != "9", no caso vai ser false pois como vimos em cima um e number e outro string. Resultado: ${9 != "9"}`)
console.log(`Agora 9 !== "9", vai ser true, pois o tipo e diferente, um e number e outro string, mais os valores são iguais 9 e 9. resultado: ${9 !== "9"}`)

// 11 - Operadores Logicos
// && quer dizer and, ou verdadeiro ou falso
console.log("11 - Operadores Logicos")
console.log(true && true)
console.log(true && false)
console.log(`Exemplos de &&, aqui comparamos se 5 > 2 && 2 < 10, o caso sera true pois 5 e maior que 2, e 2 é menor que 10. Resultado: ${5 > 2 && 2 < 10}`)
console.log(`Comparamos um false agora pois 5 > 2 && "Piu" ===1, no caso a primeira e verdadeira 5 e maior que 2, porem piu na é igual a 1. Resultado: ${5 > 2 && "Piu" ===1}`)
// || quer dizer or, ou verdadeiro ou falso
//  ! quer dizer not, inverte as comparações

// 12 - Empaty values
console.log("12 - Empaty values")
console.log (typeof null, typeof undefined)
console.log (null === undefined)
console.log (null == undefined)
console.log(null == false)
console.log(undefined == false)

//13 - Conversão de tipo automatico
console.log("13 - Conversão de tipo automatico")
console.log(`5 * null e igual a ${5 * null}`)
console.log(`"teste" * "opa" vai da NaN, pois strings não se multiplica. Resultado: ${"teste" * "opa"}`)
console.log(`"10" + 1, nesse caso sofre uma concatenação pois o simbolo de + e adção. Resultado: ${"10" + 1}`)