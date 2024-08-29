import React from "react";
import './styles.css'

function Button({active, onClick}) {
    return(

        <div>
        <button onClick={onClick} className={active? 'button2' : 'buttono'}>Voltar</button>
        </div>
    )
    
}

export default Button