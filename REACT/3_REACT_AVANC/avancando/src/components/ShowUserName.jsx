import React from 'react'

function ShowUserName(props) {
    return (
        <div>
            <div>
                <h2>O nome do usuario é: {props.name}</h2>
            </div>
        </div>
    )
}

export default ShowUserName
