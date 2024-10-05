import React from 'react'
import './MyForms.css';
import { useState } from 'react';

export const MyForms = () => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [bio, setBio] = useState();
    const [role, setRole] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }

    // 5 - envio de formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role)

        setName("");
        setEmail("");
        setBio("");
    }

    console.log(name, email)
    return (
        <div>
            {/* {1 - criacao form} */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder='Digite seu nome!' onChange={handleName} value={name || ""} />

                </div>
                {/* {2 - Label envolvendo input} */}
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder="Digite o e-mail!" onChange={(e) => setEmail(e.target.value)} value={email || ""} />
                </label>
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrição do Usuario' onChange={(e) => setBio(e.target.value)} value={bio || ""} ></textarea>
                </label>
                <label>
                    <span>Função do sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role || ""}>
                        <option value="user">Usuaruo</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
