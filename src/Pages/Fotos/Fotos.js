import React from "react";
import './Fotos.css'
import CardsP from "../../Components/Estrutura pictures/CardsP/CardsP";
import HeaderP from "../../Components/Estrutura pictures/HeaderP/HeaderP";
import Footer from "../../Components/estrutura home/Footer/Footer";

function Fotos(){



    return(
        <>
           <HeaderP/>
           <div id="banner2">
           <span className="Span">Conheça os atores do filme Batman</span>
           <CardsP />
           </div>
           <Footer />
        </>
           
       
    )
}

export default Fotos 