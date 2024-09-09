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
console.log(availableUsers)