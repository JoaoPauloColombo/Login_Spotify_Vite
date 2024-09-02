// Importa os componentes Header, Forms, e Footer, além do arquivo de vídeo e o arquivo de estilos CSS
import Header from './Components/Header';
import Forms from './Components/Forms';
import Footer from './Components/Footer';
import video from './assets/Video.mp4';
import './Style/App.css';

// Define o componente App
function App() {
  return (
    <>
      {/* Contêiner para o vídeo de fundo */}
      <div className="video-background">
        <video autoPlay muted loop id="bg-video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      
      {/* Contêiner para o cabeçalho */}
      <div className="header-container">
        <Header />
      </div>
      
      {/* Contêiner para o formulário */}
      <div className="forms-container">
        <Forms />
      </div>
      
      {/* Contêiner para o rodapé */}
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

// Exporta o componente App para ser usado como o principal na aplicação
export default App;
