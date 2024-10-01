import { useState } from 'react'

const Data = () => {
    let valores = 10;
    const [newValores, setNewValores] = useState(20);
  return (
    <div>
        <div>
            <p>Valor é {valores}</p>
            <button onClick={() => (valores = 15)}>
                Mudar Variavel
            </button>
        </div>
        <div>
            <p>Valor é {newValores}</p>
            <button onClick={() => setNewValores(35)}>
                Mudando atraves do states
            </button>
        </div>
    </div>
  )
}

export default Data