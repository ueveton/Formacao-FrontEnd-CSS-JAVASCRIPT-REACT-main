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

// 4 - + sobre prototype 
console.log("----- 4 - + sobre prototype -----");
const myObject  ={
    a: "b",
};

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);
const mySecungobject = Object.create(myObject);
console.log(mySecungobject);
console.log(mySecungobject.a);
console.log(Object.getPrototypeOf(mySecungobject) === myObject)

// 5 - Classes 
console.log("----- 5 - Classes -----");

const cachorro = {
    raca: null,
    patas: 4,
}

const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "PastorAlemao"
console.log(pastorAlemao)
const pugg = Object.create(cachorro)
pugg.raca = "Pugg";
console.log(pugg);
console.log(pugg.patas)

// 6 - Funçoes construtora 
console.log("----- 6 - Funçoes construtora -----");

function criarCachorro(nome, raca){
    const cachorro = Object.create({})
    cachorro.nome = nome;
    cachorro.raca = raca;
    return cachorro;
}

const bob = criarCachorro("bob", "Vira Lata");
console.log(bob);

// 7 - Constructor com classe
console.log("----- 7 - Constructor classe -----");

function Cachorro (nome, raca){
    this.nome = nome;
    this.raca = raca;
}

const husk = new Cachorro("let", "husk");
const viraLata = new Cachorro("caramelo", "Vira lata");
console.log(husk, viraLata);

// 8 - metodos da funcao construtora 
console.log("----- 8 - metodos da funcao construtora -----");

Cachorro.prototype.uivar = function(){
    console.log("Auuuuu!")
}

husk.uivar();
viraLata.uivar();

// 9 - Classes es6 
console.log("----- 9 - Classes es6 -----");

class CachorroClasse {
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse ("jeff", "Labrador")
console.log ( jeff);
console.log(Object.getPrototypeOf(jeff));

// 10 - + Sobre Classes 
console.log("----- 10 - + Sobre Classes -----");

class Caminhao {
    constructor (eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao (){
        console.log(`Este caminhão tem ${this.eixos} eixos, e é da cor ${this.cor}!`)
    }
}

const scania = new Caminhao( 6, "vermelho");
console.log(scania);
scania.descreverCaminhao();

// 11 - Override 
console.log("----- 11 - Override -----");

class Humano {
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const ueveton = new Humano("Ueveton", 34);
console.log(ueveton);

Humano.prototype.idade = "Não definida";
console.log(ueveton.idade);
console.log(Humano.prototype.idade);

// 12 - Symbol 
console.log("----- 12 - Symbol -----");

class Aviao {
    constructor (marca, turbinas) {
        this.marca = marca;
        this.turbinas = turbinas;
    }
}

const asas = Symbol();
Aviao.prototype[asas] = 2;
const boing = new Aviao("boing", 10);
console.log(boing);
console.log(boing[asas]);

// 13 - Getter e Setter 
console.log("----- 13 - Getter e Setter -----");

class Post {
    constructor (titulo, descticao, tags) {
        this.titulo = titulo;
        this.descricao = descticao;
        this.tags = tags;
    }

    get exibirTitulo(){
        return `Você está lendo um post com get: ${this.titulo}`;
    }

    set adcionarTags(tags) {
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post com get", "É um post sobre programação");
console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adcionarTags = "programacao, javascript, js";
console.log(myPost);

// 14 Herança 
console.log("----- 14 Herança -----");

class Manifero {
    constructor(patas){
        this.patas = patas;
    }
}

class Lobo extends Manifero {
    constructor(patas, nome){
        super(patas, patas);;
        this.nome = nome;
    }
}

const shark = new Lobo(4, "Shark");
console.log(shark)

// 15 - instanceoff 
console.log("----- 15 - instanceoff -----");
console.log(shark instanceof Lobo);
console.log(Lobo instanceof Manifero);
console.log(new Lobo( 4, "teste") instanceof Manifero);