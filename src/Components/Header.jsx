
import "../Style/Header.css";
import logo from '../assets/logo.png';
function Header() {

    return (
      <>
<header>
<img src={logo} alt="" className="logo" />
  <nav>
    <a href="#">PLANOS</a>
    <a href="#">COMUNIDADES</a>
    <a href="#">APP</a>
    <a href="#">CONTATOS</a>
  </nav>
</header>
      </>
    );
  };
  
  export default Header;
  