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