import { Banner } from "../../components/Banner/Banner"
import { Cards } from "../../components/Cards/Cards"
import { Pacotes } from "../../components/Pacotes/Pacotes"
import { Info } from "../../components/informacoes/Info"
import { Topicos } from "../../components/Topico/topicos"
import { Rodape } from "../../components/rodape/Rodape"
import { Nav } from "../../components/Nav/Nav"


export const Home = () =>{

    return(
        <>
        <Nav />
        <Banner />
        <Topicos txtTopico={'Pacotes'}/>
        <Pacotes />
        <Topicos txtTopico={"Nossos Serviços Automotivos"} />
        <Cards />
        <Info />
        <Rodape />
        
        
        
        </>


    )
}