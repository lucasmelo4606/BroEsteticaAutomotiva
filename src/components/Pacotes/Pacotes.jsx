import { ButtonHome } from "../ButtonHome/ButtonHome";
import "./pacotes.css";
export const Pacotes = () => {
  return (
    <div className="pacotes">
    <div className="pacote">
      <h2>PACOTE BRO</h2>
      <ul>
        <li>Higienização Germicida</li>
        <li>Tratamento dos plásticos internos e externos</li>
        <li>Tratamento dos vidros</li>
        <li>Remoção de chuva ácida</li>
        <li>Cristalização do Para-Brisa</li>
        <li>Proteção 6 meses</li>
        <li>Correção de pintura</li>
        <li>Proteção de 3 Anos</li>
      </ul>
      <div className="botao">
        <ButtonHome BHome="SABER MAIS" />
      </div>
    </div>
  
    <div className="pacote">
      <h2>PACOTE BUSINESS</h2>
      <ul>
        <li>Tratamento interno</li>
        <li>Tratamento dos vidros</li>
        <li>Remoção de chuva ácida</li>
        <li>Tratamento dos plásticos internos e externos</li>
        <li>Correção de pintura</li>
        <li>Proteção de 3 Anos</li>
      </ul>
      <div className="botao">
        <ButtonHome BHome="SABER MAIS" />
      </div>
    </div>
  
    <div className="pacote">
      <h2>PACOTE BASIC</h2>
      <ul>
        <li>Tratamento interno</li>
        <li>Tratamento dos plásticos internos e externos</li>
        <li>Correção de pintura</li>
        <li>Proteção de 1 Ano</li>
      </ul>
      <div className="botao">
        <ButtonHome BHome="SABER MAIS" />
      </div>
    </div>
  </div>
  
  );
};
