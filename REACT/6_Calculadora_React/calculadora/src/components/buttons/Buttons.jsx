import React from 'react'
import './Buttons.css'

export const Buttons = (props) => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    return (
        <div>
            <button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
                {props.label}
            </button>
        </div>
    )
}

