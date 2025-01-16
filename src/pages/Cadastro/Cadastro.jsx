
import { Nav } from "../../components/Nav/Nav"
import "./cadastro.css"
import {ButtonHome} from "./../../components/ButtonHome/ButtonHome"
import InputMask from 'react-input-mask';
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
                        <InputMask  type="*" mask=" 99.999.999- *" maskChar=" " required />
                        <label htmlFor="celular">Celular:</label>
                        <InputMask  mask="+5\5 (99) 9999 99999" maskChar=" " required />
                        <label htmlFor="endereco">Endereço:</label>
                        <input type="text" id="endereco" name="endereco" required></input>
                        <label htmlFor="cep">Cep:</label>
                        <InputMask  mask="99999-999" maskChar=" " required />

                        <legend> Cadastro Veiculo</legend>  
                        <label htmlFor="modelo">Modelo do Carro:</label>
                        <input type="text" id="modelo" name="modelo" required></input>
                        <label htmlFor="ano">Ano:</label>
                        <input type="number" id="ano" name="ano" min="1990" max="2027" required></input>
                        <label htmlFor="placa">Placa:</label>           
                        < InputMask  mask="aaa9*99" maskChar=" " required />
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