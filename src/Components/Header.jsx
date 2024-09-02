// Importa o arquivo de estilos CSS para o componente Header e a imagem do logo
import "../Style/Header.css";
import logo from '../assets/logo.png';

// Define o componente Header
function Header() {
    return (
        <>
            {/* Cabeçalho do site */}
            <header>
                {/* Imagem do logo */}
                <img src={logo} alt="Logo" className="logo" />
                {/* Navegação principal */}
                <nav>
                    <a href="#">PLANOS</a>
                    <a href="#">COMUNIDADES</a>
                    <a href="#">APP</a>
                    <a href="#">CONTATOS</a>
                </nav>
            </header>
        </>
    );
}

// Exporta o componente Header para ser usado em outras partes da aplicação
export default Header;
