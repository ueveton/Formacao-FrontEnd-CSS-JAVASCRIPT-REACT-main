import React from 'react'
import './Calcular.css'
import { Buttons } from './buttons/Buttons'
import { Display } from './Display/Display'
import { ClearMemory } from './Operations/ClearMemory'

export const Calcular = () => {
    // clearMemory() {
    //     console.log('Limpar');
    // }
    // setOperation (operation) {
    //     console.log(operation);
    // }
    const setOperation = (operation) => {
        this.setOperation()
        console.log(operation);
    }
    // addDigit(n){
    //     console.log(n);
    // }
    const addDigit = (n) => {
        this.addDigit(n)
        console.log(n);
    }
    return (
        <div className='geral'>
            <div className='calcular'>
                <Display value="1000" />
                <Buttons label="AC"  />
                <Buttons label="/"/>
                <Buttons label="7"/>
                <Buttons label="8"/>
                <Buttons label="9"/>
                <Buttons label="*"/>
                <Buttons label="4"/>
                <Buttons label="5"/>
                <Buttons label="6"/>
                <Buttons label="-"/>
                <Buttons label="1"/>
                <Buttons label="2"/>
                <Buttons label="3"/>
                <Buttons label="+"/>
                <Buttons label="0"/>
                <Buttons label="."/>
                <Buttons label="="/>
            </div>
        </div>
    )
}