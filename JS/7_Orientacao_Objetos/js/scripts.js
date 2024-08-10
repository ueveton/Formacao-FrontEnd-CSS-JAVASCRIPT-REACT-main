// 1 - Metodos
console.log("----- 1 - Metodos-----");

const aminal = {
    nome: "Bob",
    latir: function (){
        console.log("Au au");
    },
    brincar: ()=> {
        console.log("hihihihi");
    }
};

console.log(aminal.nome);
aminal.latir();
aminal.brincar();

// 2 - Aprofundando Metodos
console.log("----- 2 - Aprofundando Metodos-----");

const pessoa = {
    nome: "ueveton",
    getNome: function () {
        return this.nome;
    },
    setNome: function (novoNome) {
        this.nome = novoNome;
    },
}

console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("heitor");
console.log(pessoa.getNome());

// 3 - prototype
console.log("----- 3 - prototype-----");

const text = "asd";
console.log(Object.getPrototypeOf(text));
const bool = true;
console.log(Object.getPrototypeOf(bool));
const arr = [];
console.log(Object.getPrototypeOf(arr));