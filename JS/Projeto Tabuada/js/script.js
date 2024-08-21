// SELEÇÃO DE ELEMENTOS
const multiplicationForm = document.querySelector("#multiplicacao-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
const operation = document.querySelector("#multiplication-operations")
const multiplicationTable = document.querySelector("#multiplication-table")
const multiplicationTitle = document.querySelector("#multiplication-title span")

//FUNCOES
const creatTable = (number, multiplicatornInput) =>{
    operation.innerHTML = "";
    for(i = 1; i <= multiplicatornInput; i++) {
        const result = number * i;
        const calcular = `
            <div class="row">
                <div class="operation">
                    ${number} x ${i} = 
                </div>
                <div class="result">${result}</div>
            </div>
        `;
        const parse = new DOMParser();
        const htmlcalcular = parse.parseFromString(calcular, "text/html");
        const row = htmlcalcular.querySelector(".row");
        operation.appendChild(row);
    }
    multiplicationTitle.innerText = number;
}

//EVEMTOS
multiplicationForm.addEventListener("click", (e) => {
    e.preventDefault();
    const multiplicationNunber = +numberInput.value;
    const multiplicatornInput = +multiplicationInput.value;
    if(!multiplicationNunber || !multiplicatornInput)return
    creatTable(multiplicationNunber, multiplicatornInput)
})