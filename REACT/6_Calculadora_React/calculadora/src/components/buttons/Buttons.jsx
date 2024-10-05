import React from 'react'
import './Buttons.css'

export const Buttons = (props) => {
    return (
        <div>
            <button className='button'>{props.label}</button>
        </div>
    )
}

