import React from "react";
import Logo from '../../assets/desktop-wallpaper-batman-logo-black-background.jpg'
import { Link, useNavigate } from "react-router-dom";


function HeaderE() {

    const navigate = useNavigate()

    return(
       <header className="HeaderP">
            <img id="Logo2" src={Logo} />
            <nav id="navP">
                <ul>
                    
                    <li onClick={() => navigate('/')}>Home</li>

                    <li onClick={() => navigate('/Fotos')}>Fotos</li>
                
                    <li onClick={() => navigate('/')}>Voltar</li>
                
                    <li onClick={() => navigate('/Comentarios')}>Comentários</li> 
                    
                    
                </ul>
            </nav>
                
       </header>
    )
}

export default HeaderE;
