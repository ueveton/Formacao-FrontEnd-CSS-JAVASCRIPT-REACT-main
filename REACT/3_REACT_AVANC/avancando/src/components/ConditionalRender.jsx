import React from 'react'

function ConditionalRender() {

    const x = 5;
    const name = "Heitor"
    return (
        <div>
            <div>
                <h3>Isso será exibido</h3>
                {x > 2 && <p>Se x for true = sim</p> }
                {/* else */}
                <h3>Render ternario com else</h3>
                {name === "Carol" ? (
                    <div>
                        <p>Ola Carol</p>
                    </div>
                ) : (
                    <div>
                        <p>Nome não encontrado</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ConditionalRender