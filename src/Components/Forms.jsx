// Importa o hook useState do React e o arquivo de estilos CSS para o componente Forms
import { useState } from "react";
import "../Style/Forms.css";

function Forms() {
    // Estado inicial do formulário
    const initialForm = {
        nome: "",
        senha: "",
        email: ""
    };

    // Define o estado do formulário e a função para atualizá-lo
    const [formState, setFormState] = useState(initialForm);

    // Função para lidar com a alteração dos campos de entrada
    const handleInput = (event) => {
        const target = event.currentTarget;
        const { value, name } = target;
        // Atualiza o estado do formulário com o valor do campo alterado
        setFormState({ ...formState, [name]: value });
    };

    // Função para lidar com a submissão do formulário
    const handleSubmit = (event) => {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário
        // Exibe os dados do formulário no console
        console.log(
            "Nome do Usuario: " + formState.nome + '\n' +
            "Senha do Usuario: " + formState.senha + '\n' +
            "Email do Usuario: " + formState.email
        );
        // Limpa o formulário após o envio
        setFormState({ ...initialForm });
    };

    return (
        <>
            {/* Formulário com evento onSubmit para chamar handleSubmit */}
            <form className="form" onSubmit={handleSubmit}>
                {/* Campo para o nome do usuário */}
                <span className="input-span">
                    <label htmlFor="nome" className="label">NOME</label>
                    <input 
                        type="text" 
                        name="nome" 
                        id="nome"
                        value={formState.nome}
                        onChange={handleInput}
                    />
                </span>
                {/* Campo para a senha do usuário */}
                <span className="input-span">
                    <label htmlFor="senha" className="label">SENHA</label>
                    <input 
                        type="password" 
                        name="senha" 
                        id="senha"
                        value={formState.senha}
                        onChange={handleInput}
                    />
                </span>
                {/* Campo para o email do usuário */}
                <span className="input-span">
                    <label htmlFor="email" className="label">EMAIL</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        value={formState.email}
                        onChange={handleInput}
                    />
                </span>
                {/* Botão de submissão do formulário */}
                <input className="submit" type="submit" value="ACESSAR" />
            </form>
        </>
    );
}

export default Forms;
