import "./info.css";
import rlogotipo from "./../Nav/imagens-nav/logotipo.svg";
export const Info = () => {
  return (
    <section id="rodape">
      <div className="iBro">
        <img src={rlogotipo} alt="" />
      </div>
      <div className="iBro">
        {" "}
        <p>
          Na BRO ESTÉTICA AUTOMOTIVA, entendemos que seu carro é mais do que um
          meio de transporte; é uma extensão do seu estilo e personalidade. Por
          isso, estamos aqui para oferecer o melhor em cuidados e estética
          automotiva
        </p>
      </div>
      <div className="iBro">
        Funcionamento Segunda – Sexta 9hs as 17hs Sábado: 8:30 – 16hs BRO
        ESTETICA AUTOMOTIVA LTDA CNPJ: 48.674.395/0001-01
      </div>
      <div className="iBro">
        Fale Conosco Tel: ( 11) 981209743 Av. Morumbi, 1111 - , São Paulo - SP,
        0611 001
      </div>
    </section>
  );
};
