import React from "react";
import Footer from "../../Components/estrutura home/Footer/Footer";
import './Contatos.css'
import HeaderE from "../../Components/Estrutura contatos/HeaderE";
import PositionR from "../../Components/Estrutura contatos/PositionRigth/PositionR";
import PositionL from "../../Components/Estrutura contatos/PositionLeft/PositionL";
import FinalCard from "../../Components/Estrutura contatos/FinalCard/FinalCard";

function Contato(){
    return(
        <div>
            <HeaderE />
            <span className="SpanI">Me conheça e os meu trabalhos também!</span>
         <div id="banner3">
            <div className="content-container">
                <div className="project-container ">
                    <div className="project-content">
                        <PositionR />
                        <PositionL />
                    </div>
                </div>
            </div>
         </div>
         <FinalCard />
         <Footer />
        </div>
    )
}

export default Contato