import React from 'react'
import './Calcular.css'
import { Buttons } from './buttons/Buttons'

export const Calcular = () => {
    return (
        <div className='geral'>
            <div className='calcular'>
                <Buttons label="AC"/>
                <Buttons label="/"/>
                <Buttons label="7"/>
                <Buttons label="8"/>
                <Buttons label="9"/>
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