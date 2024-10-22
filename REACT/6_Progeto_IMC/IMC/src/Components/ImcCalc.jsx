import React from 'react';
import { Button } from './Button';
import { useState } from 'react';
import './ImcCalc.css'

export const ImcCalc = ( { calcImc }) => {
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e) => {
        const updateDigits = validDigits(e.target.value);
        setHeight(updateDigits)
    }

    const handleWidthChange = (e) => {
        const updateDigits = validDigits(e.target.value);
        setWidth(updateDigits)
    }

    const clearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWidth("");
    }

    return (
        <div id='calc-container'>
            <h2>Calculadora de IMC</h2>
            <form id='imc-form'>
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height">Altura:</label>
                        <input 
                            type="text" 
                            name="height" 
                            id="height" 
                            placeholder='Exemplo 1,75'
                            onChange={(e) => handleHeightChange(e)}
                            value={height}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight">Peso:</label>
                        <input 
                            type="text" 
                            name="weight" 
                            id="weight" 
                            placeholder='Exemplo 70.5' 
                            onChange={(e) => handleWidthChange(e)}
                            value={width}
                        />
                    </div>
                </div>
                <div className="action-control">
                    <Button 
                        id="calc-btn" 
                        text="Calcular" 
                        action={(e) => calcImc(e, height, width) }
                    />
                    <Button 
                        id="clear-btn" 
                        text="Limpar" 
                        action={clearForm}
                    />
                    
                </div>
            </form>
        </div>
    )
}

