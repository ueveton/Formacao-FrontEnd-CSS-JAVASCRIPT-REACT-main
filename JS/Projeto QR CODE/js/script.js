const classContainer = document.querySelector(".container");
const formInput = document.querySelector("#qr-form input");
const formBtn = document.querySelector("#qr-form button");
const qrImg = document.querySelector("#qr-code img");

function generatorQrCode (){
    const formInputValue = formInput.value;
    if(!formInputValue)return
    formBtn.innerText ="Gerando codigo..."
    qrImg.src = `
        https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${formInputValue}
    `;
    loadQrCode();
};

function loadQrCode (){
    classContainer.classList.add("active")
    formBtn.innerText ="Codigo gerado!";
};

formBtn.addEventListener("click", () => {
    generatorQrCode()
});

formInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generatorQrCode()
    }
});

formInput.addEventListener("keyup", () => {
    if(!formInput.value){
        classContainer.classList.remove("active")
        formBtn.innerText ="Gerar QR Code!";
    }
})