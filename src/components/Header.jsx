import headerLogo from "../assets/hello-vite-logo.png";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <img className="header__logo" src={headerLogo} alt="TripleTen" />
        <h1 className="header__title">Hello Vite!</h1>
      </div>
    </>
  );
}

export default Header;
