import React from "react";
import './PositionR.css'
import LogoP from '../../../assets/Portifólio.png'
import LogoP2 from '../../../assets/Calculadora.png'


function PositionR () {

    return(
        <>
        <div className="position-container">
            <div className="Project-card">
                <img className="Project-image"  src={LogoP}/>
                <p className="Text">
                    Este é o meu projeto de portifílios,
                    onde mostro meus trabalhos, quais 
                    ferramnetas eu trbalho e aonde me encontar!
                </p>
            </div>
        </div>
        
        <div className="position-container2">
            <div className="Project-card">
                <img className="Project-image"  src={LogoP2}/>
                <p className="Text">
                    Aqui está uma projero de uma claculadora 
                    IMC,totalmente funcional,revlando o grau de 
                    obsidade da pessoa.
                </p>
            </div>
        </div>
        </>
    )
}

export default PositionR