import React from "react";
import './PositionL.css'
import LogoP from '../../../assets/StarWars.png'
import LogoP2 from '../../../assets/Rick.png'

function PositionL () {

    return(
        <>
        <div className="position-containerI">
            <div className="Project-card">
                <img className="Project-image"  src={LogoP}/>
                <p className="Text">
                    Primeiro projeto feito com JavaScript,
                    crinado uma home de Star Wars, onde mostra
                    os personagens,naves e palnetas de toda a saga.
                </p>
            </div>
        </div>
        
        <div className="position-containerII">
            <div className="Project-card">
                <img className="Project-image"  src={LogoP2}/>
                <p className="Text">
                    Segundo projeto com JavaScript, utilizando outra 
                    API e outros recursos de font e etc... Para concluir 
                    este projeto que ficou incrível.
                </p>
            </div>
        </div>
        </>
    )
}

export default PositionL