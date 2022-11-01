// Kodet af Sofie
import Logo from "../assets/images/webapplogo.png";

const Header = () => {
  return (
    <nav class="header">
      <a href="/">
        <img className="nav-logo" src={Logo} alt="logo"></img>
      </a>
    </nav>
  );
};
export default Header;
