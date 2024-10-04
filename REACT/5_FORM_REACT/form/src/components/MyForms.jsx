import React from 'react'
import './MyForms.css';
import { useState } from 'react';

export const MyForms = () => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }

    // 5 - envio de formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email)
    }

    console.log(name, email)
    return (
        <div>
            {/* {1 - criacao form} */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder='Digite seu nome!' onChange={handleName} />
                </div>
                {/* {2 - Label envolvendo input} */}
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder="Digite o e-mail!" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
