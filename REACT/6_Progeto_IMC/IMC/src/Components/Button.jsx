import React from 'react'
import './Button.css'

export const Button = ({id, text}) => {
    return (
        <button id={id}>
            {text}
        </button>
    )
}
