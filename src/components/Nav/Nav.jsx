import { Link } from "react-router-dom";
import logotipo from "./imagens-nav/logotipo.svg"

import "./Nav.css";
export const Nav = () => {
  return (
    <nav>
      <div className="navs">
        <div className="logotipoNav">
          <img src={logotipo} alt="" />
        </div>
        <div className="navs1">
          <Link to="/"> Home</Link>
          <Link to="/Cadastro"> Cadastro</Link>
         <Link to="">Contato</Link>
          <Link to="">Faq</Link>
        </div>
        <div className="navs1">
          <Link to="">Login</Link>
        </div>
      </div>
    </nav>
  );
};
