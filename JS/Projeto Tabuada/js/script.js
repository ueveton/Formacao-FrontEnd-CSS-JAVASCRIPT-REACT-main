// SELEÇÃO DE ELEMENTOS
const multiplicationForm = document.querySelector("#multiplicacao-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")

//FUNCOES

//EVEMTOS
multiplicationForm.addEventListener("click", (e) => {
    e.preventDefault();
    const multiplicationNunber = +numberInput.value;
    const multiplicatornInput = +multiplicationInput.value;
    if(!multiplicationNunber || !multiplicatornInput)return
    console.log(multiplicationNunber, multiplicatornInput)
})