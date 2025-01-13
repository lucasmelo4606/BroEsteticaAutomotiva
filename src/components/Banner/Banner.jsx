import { ButtonBanner } from "./ButtonBanner/ButtonBanner";
import "./banner.css";
import carroBanner from "./imagens-banner/carro-banner.png";


export const whatsApp = () => {
  const whats = "5511917814697";
  const txtWapp = encodeURIComponent("Seja bem-vindo");
  const link = `https://wa.me/${whats}?text=${txtWapp}`;
  window.location.href = link;
};

export function Banner() {

  return (
    <section className="Banner">
      <img src={carroBanner} alt="" />
      <div className="bannerTxt">
        <h2>Bem Vindo a Bro Estética Automotiva</h2>
        <p>
          Somos apaixonados pelo que fazemos cuidando do seu patrimônio. Cada
          veículo que cuidamos recebe tratamento individualizado, deixando seu
          veículo, novo de novo!!
        </p>
        <div className="bbs">
          <div className="button1">
            <ButtonBanner buttonBanner="Confira Nossos Serviços" onClick={whatsApp} />
          </div>
          <div className="button2">
            <ButtonBanner buttonBanner="Agendamento Grátis" onClick={whatsApp} />
          </div>
        </div>
      </div>
    </section>
  );
}
