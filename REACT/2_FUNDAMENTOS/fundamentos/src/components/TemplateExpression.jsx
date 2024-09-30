const TemplateExpression = () => {
    const name = "Heitor";
    const data = {
        age: 34,
        job: "Programador",
    }
    return (
        <div>
            <p>
                A soma é { 2 + 2} resultado.
            </p>
            <h3>Bem vindo {name}, tenho {data.age} anos e minha profissão é {data.job}</h3>
        </div>
    )
}

export default TemplateExpression