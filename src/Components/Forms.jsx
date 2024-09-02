import { useState } from "react";
import "../Style/Forms.css";
function Forms() {
    const initilform = {
        nome: "",
        senha: "",
        email: ""

    }
    /* estado do formulario */
    const [FormState, setFormState] = useState(initilform);
    /*  função para lidar quando a alteração do campos de entrada  */
    const handleInput = (event) => {
        const target = event.currentTarget;
        const { value, name, email, senha } = target;
        setFormState({ ...FormState, [name]: value, [senha]: value, [email]: value })
    }
    /* função para lida com a submição do formulario */
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Nome do Usuario:" + FormState.nome + '\n' +"Senha do Usuario:" + FormState.senha + '\n' +"Email do Usuario:" + FormState.email );
        setFormState({ ...initilform });
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <span className="input-span">
                    <label htmlFor="nome" className="label">NOME</label>
                    <input type="text" name="nome" id="nome"
                        value={FormState.nome}
                        onChange={handleInput}
                    /></span>
                <span className="input-span">
                    <label htmlFor="senha" className="label">SENHA</label>
                    <input type="password" name="senha" id="senha"
                    value={FormState.senha}
                    onChange={handleInput}
                    /></span>
                    <span className="input-span">
                    <label htmlFor="email" className="label">EMAIL</label>
                    <input type="email" name="email" id="email"
                    value={FormState.email}
                    onChange={handleInput}
                    /></span>
                <input className="submit" type="submit" value={"ACESSAR"}/>
            </form>

        </>
    );
};

export default Forms;