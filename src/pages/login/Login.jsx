import { Nav } from "../../components/Nav/Nav";
import "./login.css";
import { ButtonHome } from "./../../components/ButtonHome/ButtonHome";

export const Login = () => {
 
  return (
    <>
      <Nav />
      <div id="containerLogin">
        <div id="loginVidro">
          <div className="loginCadastro">
            <h3>BEM VINDO</h3>

            <p> NOVO LOGIN</p>
            <div className="loginButton">
              <ButtonHome BHome={"CRIAR CONTA"} />
            </div>
          </div>
            <hr />
          <div className="loginAcesso">
            <h3>FAÇA LOGIN</h3>
            <label htmlFor="login">Login:</label>
            <input type="text" name="username"  /><br />
            <label htmlFor="senhas">Senha:</label>
            <input type="password" name="password" /> <br />

            <div className="loginButton" style={{ marginTop: 10 }} >
              <ButtonHome BHome={"ACESSO"} />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
