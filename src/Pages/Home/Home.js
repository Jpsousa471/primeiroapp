import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import Header from '../../Components/estrutura home/header/header'
import Video from '../../assets/video.mp4'
import Cards from "../../Components/estrutura home/Cards/Cards";
import Footer from "../../Components/estrutura home/Footer/Footer";
function Home(){

    return(
        <>
            <Header />
            <div id="banner"></div>
            <div id="trailer-container">
                <div className="content">
                        <video controls className="trailer">
                            <source src={Video} />
                            Seu navegador não possui suporte para este vídeo
                        </video>
                    <div id="sinopse">
                        <p className="description">
                        Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas
                        mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante soloitário se estabelece
                        como a personificação da vingança para a população.
                        </p>

                        <Link style={{textDecoration: 'none' }} to='https://www.ingresso.com/filme/batman' target="_blank">
                        <button className="button">Comprar ingresso</button>
                        </Link>
                        
                    </div>
                </div> 
            </div>
            
            <Cards />
            <Footer />           
        </>
    )

}

export default Home;