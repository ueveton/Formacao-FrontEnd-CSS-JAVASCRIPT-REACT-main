// 1 - Arrays
console.log("----- 1 - Arrays -----");

const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista );

const itens = ["Ueveton", true, 2, 2.4,[]];
console.log(itens);

// 2 - Mais sobre Arrays
console.log("----- 2 - Mais sobre Arrays -----");

const arr = ["a", "b", "c", "d", "e"];
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[83]);

// 3 - Propriedades
console.log("----- 3 - Propriedades -----");

const numbers = [5, 8, 2];
console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Ueveton";
console.log(myName.length);

// 4 - Metodos
console.log("----- 4 - Metodos -----");

const otherNumbers = [1, 2, 3, 4];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "Algum texto";
console.log(text.toUpperCase());
console.log(typeof text.toLowerCase);
console.log(text.indexOf("m"));

// 5 - Objetos
console.log("----- 5 - Objetos -----");

const person = {
    name: "Heitor da silva soares",
    age: 18,
    job: "Programador"
}

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof(person.age));
console.log(typeof person);

// 6 - delete e create
console.log("----- 6 - delete e create -----");

const car = {
    engine: 1.0,
    brand: "ford",
    model: "Fiesta",
    km: 140000,
};

console.log(car);
car.doors = 4;
console.log(car);

delete car.km;
console.log(car);
console.log("Modificando as propriedades de car...");
car.engine = 1.8;
car.model = "Corolla";
car.brand = "Toyota";
car.km = 80000;
delete car.doors;
console.log(car);

// 7 - objetos +
console.log("----- 7 - objetos + -----");
const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: []
}

Object.assign(obj2, obj);
console.log(obj2);
console.log(obj);

// 8 - Conhecendo objetos
console.log("----- 8 - Conhecendo objetos -----");
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - Mutability
console.log("----- 9 - Mutability -----");

const a = {
    name: "Heitor",
}
const b = a;
console.log(a);
console.log(b);
console.log(a === b);
a.age = 34;
console.log(a);
console.log(b);

console.log("deletando age b");
delete b.age;
console.log(a);
console.log(b);

// 10 - Loops em arrays
console.log("----- 10 - Loops em arrays -----");
console.log("Listar Usuarios");

const user = [
    "Heitor",
    "Ueveton",
    "Carol",
    "Matheus",
]

for (let i = 0; i < user.length; i++) {
    console.log(`Listadando usuareos ${user[i]}`);
}

console.log("Listar Carros");
const cars = [
    brand = "Toyota",
    brand = "VW",
    brand = "Ford",
    brand = "Chevrolet",
]

for (let i = 0; i <cars.length; i++) {
    console.log(`Listando carros ${cars[i]}`);
}

const cars2 = [
    brand = "Toyota","VW","Ford","Chevrolet",
    model = "Corrola","Fusca","Fusion","Astra",
]

for (let i = 0; i <cars2.length; i++) {
    console.log(`Listando carros ${cars2[i]}`);
}

// 11 - Push e Pop
console.log("----- 11 - Push e Pop -----");
console.log("PUSH - add itens ao fim do array");
console.log("POP - remove itens ao fim do array");

const array = ["a", "b", "c"];
console.log(`const array com a b c(array)`);
array.push("d");
console.log("Array add push d");
console.log(array);
console.log(array.length);
console.log("Array remove pop");
array.pop();
console.log(array);

console.log("Remover item c e exibindo o item removido");
const itemRemovido = array.pop();

console.log(itemRemovido);
console.log(array);
console.log("Add mais itens: h, f, o");
array.push("h", "f", "o");
console.log(array);

// 12 - Shift e Unshift
console.log("----- 12 - Shift e Unshift -----");

const letters = ["a", "b", "c"];
const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift('p','q','r');
letters.unshift('z');
console.log(letters);

// 13 - indexOf e LastIndexOf
console.log("----- 13 - indexOf e LastIndexOf -----");

const myElements = ["Morango", "Maça", "Abacate", "Pera", "Abacate"]
console.log(myElements.indexOf("Maça"));
console.log(myElements.indexOf("Abacate"));
console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);
console.log(myElements.lastIndexOf("Abacate"));
console.log(myElements.indexOf("Mamão"));
console.log(myElements.lastIndexOf("Mamão"));

// 14 - Slice
console.log("----- 14 - Slice -----");

const testeSlice = ["a", "b", "c", "d", "e", "f"]
const subArray = testeSlice.slice(2,4)
console.log(subArray);
console.log(testeSlice);
const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);
const subArray3 = testeSlice.slice(10,20);
console.log(subArray3);
const subArray4 = testeSlice.slice(2);
console.log(subArray4);

// 15 - ForEach
console.log("----- 15 - ForEach -----");
const nums = [1, 2, 3, 4, 5];
nums.forEach((numero) => {
    console.log(`O numero é: ${numero}`);
})

const post = [
    {title: "Primeito post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Primeito post", category: "MySql"},
];

post.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 16 - Includes
console.log("----- 16 - Includes -----");
const brands = ["BME", "VW", "Fiat" ]
console.log(brands.includes("Fiat"));
console.log(brands.includes("KIA"));
if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW!");
}

// 17 - reverse
console.log("----- 17 - reverse -----");
const reverseTest = [1, 2, 3, 4, 5];
reverseTest.reverse();
console.log(reverseTest)

// 18 - String
console.log("----- 18 - String Trim-----");
const trimtest = " testando \n";

console.log(trimtest);
console.log(trimtest.trim());
console.log(trimtest.length);
console.log(trimtest.trim().length);

// 19 - String - padStart
console.log("----- 19 - String - padStart-----");
const testPadStart = '1';
const newNumber = testPadStart.padStart(5, '0');
console.log(testPadStart);
console.log(newNumber);

// 20 - String Split
console.log("----- 20 - String Split-----");

const frase = 'O rato roueu a roupa do rei de roma'
const arrayDaFrase = frase.split(' ');
console.log(arrayDaFrase);

// 21 - String Join
console.log("----- 21 - String Join-----");

const fraseDeNovo = arrayDaFrase.join(' ');
console.log(fraseDeNovo);

const itensParaComprar = ['mouse', 'teclado', 'gabinete', 'monitor', 'filtro de linha'];
console.log(`Antes do join => Precisamos comprar: ${itensParaComprar}`);
const fraseDeComprar = `Com join => Precisamos comprar: ${itensParaComprar.join(', ')}.`;
console.log(fraseDeComprar);

// 22 - String Repeat
console.log("----- 22 - String Repeat-----");

const palavra = 'Testando'
console.log(palavra.repeat(6));

// 23 - String Rest operator
console.log("----- 23 - String Rest operator-----");

const somainfinita = (...args) => {
    let total = 0
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
console.log(somainfinita(1, 2, 5));

// 24 - for of
console.log("----- 24 - for of-----");

const somainfinita2 = (...args) => {
    let total = 0;
    for (num of args) {
        total += num;
    }
    return total;
}

console.log(somainfinita2(1, 4, 8));

// 25 - Destructuring em objetos
console.log("----- 25 - Destructuring em objetos-----");

const userDetails = {
    firstName: 'Ueveton',
    lastName: 'Soares Pereira',
    job: 'Programador',
}

const { firstName, lastName, job } = userDetails;
console.log(firstName, lastName, job);

//renomear variaveis
const { firstName: primeiroNome} = userDetails;
console.log(firstName);

// 26 - Destructuring em arrys
console.log("----- 26 - Destructuring em arrys-----");

const myList = ["Aviao", 'Submarino', 'Carro'];
const [veiculoA, veiculoB, veiculoC] = myList;
console.log(myList)
console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON
console.log("----- 27 - JSON-----");

const myJson = '{"name": "Ueveton", "age": 34, "skills": ["javascript", "mysql"]}';

console.log(myJson)
console.log(typeof myJson);

// 28 - Json para objetos
console.log("----- 28 - Json para objetos-----");

const myObjetos = JSON.parse(myJson);
console.log(myObjetos);