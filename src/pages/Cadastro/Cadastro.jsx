
import { Nav } from "../../components/Nav/Nav"
import "./cadastro.css"
import {ButtonHome} from "./../../components/ButtonHome/ButtonHome"
export const Cadastro = () =>{

return(
    <div id="cadastroPlanoFundo">
        <Nav />
        <div id="cadastroFormulario">
            <div className="CastroPessoa">
                <form action="">
                    <fieldset>
                        <legend> </legend>
                        <legend> Cadastro Pessoal</legend>
                        
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" required></input>
                        <label htmlFor="rg">RG:</label>
                        <input type="number" id="rg" name="rg" placeholder="00.000.000-0" required></input>
                        <label htmlFor="celular">Celular:</label>
                        <input type="tel" id="celular" name="celular" pattern="[0-9]{2} [0-9]{9}" placeholder="(DD)xxxx-xxxx" required></input>
                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" id="endereco" name="endereco" required></input>
                        <label htmlFor="cep">Cep:</label>
                        <input type="text" id="cep" name="cep" pattern="{5}-{3}" placeholder="00000-000" required></input>

                        <legend> Cadastro Veiculo</legend>  
                        <label htmlFor="modelo">Modelo do Carro:</label>
                        <input type="text" id="modelo" name="modelo" required></input>
                        <label htmlFor="ano">Ano:</label>
                        <input type="number" id="ano" name="ano" min="1990" max="2025" required></input>
                        <label htmlFor="placa">Placa:</label>           
                        <input type="text" id="placa" name="placa" pattern="[A-Z]{3}-\d{4}" style={{ textTransform: 'uppercase' }} required />
                        <label htmlFor="renaven">Renavan:</label>
                        <input type="text" id="renavam" name="renavam" pattern="\d{11}" maxLength={11}  required></input>


                    <div className="buttonCadastro"><ButtonHome BHome={'Cadastrar'} /></div>
                    </fieldset>



                </form>
                
            </div>
            


        </div>



    </div>

)
}