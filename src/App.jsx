import Header from './Components/Header';
import Forms from './Components/Forms';
import Footer from './Components/Footer';
import video from './assets/Video.mp4'
import './Style/App.css';

function App() {

  return (
    <>
    <div className="video-background">
    <video autoPlay muted loop id="bg-video">
      <source src={video} type="video/mp4" />
    </video>
  </div>
      <div className="header-container">
        <Header />
      </div>
      <div className="forms-container">
        <Forms />
      </div>
      <div className="footer-container">
        <Footer />
      </div>

    </>
  );
};

export default App;
