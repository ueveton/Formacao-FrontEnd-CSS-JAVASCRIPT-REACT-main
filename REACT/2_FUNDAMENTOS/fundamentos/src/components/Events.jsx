import React from 'react'

const Events = () => {
    const handleClick = (e) => {
        console.log(e)
        console.log("Excutou função fora do return")
    }
    // funcao de renderizacao
    const renderSomething = (x) =>{
        if (x) {
            return <h1>Renderizando isso</h1>
        } else {
            return <h1>Renderizando outra coisa</h1>
        }
    }
  return (
    <div>
        <div>
            <button onClick={()=> console.log("Testando clique")}>
                clique aqui!
            </button>
        </div>
        <div>
            <button onClick={handleClick}>
                Clique aqui na função
            </button>
        </div>
        {/* {funcao com renderizacao} */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events