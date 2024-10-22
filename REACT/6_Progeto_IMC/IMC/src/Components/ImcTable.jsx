import React from 'react'

export const ImcTable = ( {data}) => {
    return (
        <div id='result-container'>
            <p id='imc-number'>
                Seu IMC:
            </p>
            <p id="imc-info">
                Situação atual:
            </p>
            <h3>Confira as classificações:</h3>
            <div id="imc-table">
                <div className="imc-table">
                    <h4>IMC</h4>
                    <h4>Classificação</h4>
                    <h4>Obesidade</h4>
                </div>
            </div>
        </div>
    )
}
