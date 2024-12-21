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
          <Link to="/Cadastro"> CADASTRO</Link>
         
          <a>CADASTRO</a>
          <a>CONTATO</a>
          <a>FAQ</a>
        </div>
        <div className="navs1">
          <a>LOGIN</a>
        </div>
      </div>
    </nav>
  );
};
