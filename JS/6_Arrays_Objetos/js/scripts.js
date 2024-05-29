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