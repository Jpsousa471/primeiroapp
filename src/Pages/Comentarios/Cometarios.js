import React from "react";
import './Comentarios.css'
import Footer from "../../Components/estrutura home/Footer/Footer";
import HeaderC from "../../Components/Estrutura Comentarios/HeaderC/HeaderC";
import Bloco from "../../Components/Estrutura Comentarios/BLocoComentarios/Bloco";

function Comentarios(){
    return(
        <div>
            <HeaderC />
            <div id="bannerI">
             <span className="SpanI">Deixe aqui o seu comentário sobre o filme!</span>
              <Bloco />
            </div>

            <Footer />
        </div>
    )
}

export default Comentarios 