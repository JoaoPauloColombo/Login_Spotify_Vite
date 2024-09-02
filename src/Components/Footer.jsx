// Importa o arquivo de estilos CSS para o componente Footer
import '../Style/Footer.css'

// Define o componente Footer
function Footer() {
    return (
        <>
            {/* Contêiner principal com classe para estilização */}
            <div className="footer-clean">
                <footer>
                    <div className="container">
                        {/* Linha que organiza os itens no rodapé */}
                        <div className="row justify-content-center">
                            {/* Seção para links relacionados a exploração */}
                            <div className="col-sm-4 col-md-3 item">
                                <h3>Explore</h3>
                                <ul>
                                    <li><a href="#">Premium</a></li>
                                    <li><a href="#">Suporte</a></li>
                                    <li><a href="#">Download</a></li>
                                </ul>
                            </div>
                            {/* Seção para informações sobre a empresa */}
                            <div className="col-sm-4 col-md-3 item">
                                <h3>Empresa</h3>
                                <ul>
                                    <li><a href="#">Sobre</a></li>
                                    <li><a href="#">Carreiras</a></li>
                                    <li><a href="#">Para o Registro</a></li>
                                </ul>
                            </div>
                            {/* Seção para comunidades e parcerias */}
                            <div className="col-sm-4 col-md-3 item">
                                <h3>Comunidades</h3>
                                <ul>
                                    <li><a href="#">Para Artistas</a></li>
                                    <li><a href="#">Desenvolvedores</a></li>
                                    <li><a href="#">Publicidade</a></li>
                                    <li><a href="#">Investidores</a></li>
                                    <li><a href="#">Fornecedores</a></li>
                                </ul>
                            </div>
                            {/* Seção para ícones de redes sociais e copyright */}
                            <div className="col-lg-3 item social">
                                <a href="#"><i className="icon ion-social-facebook"></i></a>
                                <a href="#"><i className="icon ion-social-twitter"></i></a>
                                <a href="#"><i className="icon ion-social-instagram"></i></a>
                                <a href="#"><i className="icon ion-social-linkedin"></i></a>
                                <p className="copyright">Spotify © 2024</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

// Exporta o componente Footer para ser usado em outras partes da aplicação
export default Footer;
