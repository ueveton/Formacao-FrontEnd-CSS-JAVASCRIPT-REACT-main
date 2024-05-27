// 1 - Criando uma função
function minhaFuncao (){
    console.log("Minha primeira função");
}

minhaFuncao();

const minhaFuncaoEmVariavel = function(){
    console.log("Função em variavel")
}

minhaFuncaoEmVariavel();

function funcaoComParametro (txt){
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro(`Imprimindo dados de função`);