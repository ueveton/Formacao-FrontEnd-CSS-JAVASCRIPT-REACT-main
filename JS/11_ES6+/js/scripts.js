// 1 - var, let const
console.log("----- 1 - var, let const -----")
var x = 10;
var y = 15;
if (y > 10) {
    var x = 5;
    console.log(x)
}

console.log(x)

let a = 10;
let b = 15;
if(b > 10){
    let a = 5;
    console.log(a)
}

console.log(a)

function logName(){
    const name = "Heitor"
    console.log(name)
}
const name = "Carol"
logName();
console.log(name);

// 2 - Arrow Function
console.log("----- 2 - Arrow Function -----")
const sum = function (a, b){
    return a + b;
}

const arrowSum = (a, b) => a + b;
console.log(sum(5,5))
console.log(arrowSum(5, 8))

const greeting = (name) =>{
    if(name){
        return `Hello ${name}`
    } else {
        return "hello"
    }
};

console.log(greeting("Ueveton"));
console.log(greeting())

const user = {
    name: "heitor",
    sayUserName(){
        setTimeout(function () {
            console.log(this)
            console.log(`Usermane: ${this.name}`)
        }, 1000);
    },

    sayUserNameArrow(){
        setTimeout(() => {
            console.log(this);
            console.log(`Usermane: ${this.name}`);
        }, 2000);
    }
};

user.sayUserName();
user.sayUserNameArrow();

// 3 - filter
console.log("----- 3 - filter -----")
const arr = [1, 2, 3, 4, 5]
const heightNumbers = arr.filter((n) =>{
    if (n>3){
        return n;
    }
});
console.log(heightNumbers)

const users = [
    {name: "Heitor", available: true},
    {name: "Carol", available: false},
    {name: "Ueveton", available: true},
    {name: "Grecineia", available: false}
]

const availableUsers = users.filter((user) => user.available);
console.log(availableUsers);

// 4 - map
console.log("----- 4 - map -----")
const products = [
    {
        name: "Camisa",
        price: 10.99,
        category: "Roupas",
    },
    {
        name: "Chaleira Eletrica",
        price: 150.88,
        category: "Eletro"
    },
    {
        name: "Fogao",
        price: 580.56,
        category: "Eletro",
    },
    {
        name: "Calca",
        price: 87.99,
        category: "Roupas",
    },
];

products.map((product) => {
    if(product.category === "Roupas") {
        product.onSale = true;
    }
})

console.log(`Este e um map ${products}`);

// 5 - Template literais
console.log("----- 5 - Template literais -----")
const userName = "Heitor";
const age = 1;

console.log(`O nome do usuario é ${userName} e ele tem ${age} ano(s)`)

// 6 - Destructuring
console.log("----- 6 - Destructuring -----")

const fruits = ["Maca", "mamao", "laranja"];
const [f1, f2, f3] = fruits;
console.log(f1, f3)

const productDetails = {
    name: "Mouse",
    price: 35.55,
    category: "Perifericos",
    color: "cinza"
}

const {name:productName, price, category, color} = productDetails;
console.log(`o nome do produto e ${productName}, e ele custa R$ ${price} e da cor ${color}`)

// 7 - spread
console.log("----- 7 - spread -----")
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [...a1, ...a2]
console.log(a3)

const a4 = [0, ...a3, 7]
console.log(a4)

// 8 - classes
console.log("----- 8 - classes -----")
class product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new product("Camisa gola v", 20);
console.log(shirt)
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(15))

// 9 - Herança
console.log("----- 9 - Herança -----")

class ProductWithAtrributes extends product{
    constructor(name, price, colors){
        super(name, price)
        this.colors = colors
    }

    showColors(){
        console.log("As cores são: ");
        this.colors.forEach((color) => {
            console.log(color);
        });
    }
}

const hat = new ProductWithAtrributes ("chapeu", 31.75, ["preto", "Azul"])
console.log(hat);
console.log(hat.name);
hat.showColors()