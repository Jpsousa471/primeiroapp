import React from "react";
import './HeaderC.css'
import { Link } from "react-router-dom";
import Logo from '../../../assets/desktop-wallpaper-batman-logo-black-background.jpg'


function HeaderC() {


    return(

        <header className="HeaderC">
          <img id='Logo' src={Logo} />
             <nav id="navP">
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>Home</li>
                    </Link>

                    <Link  style={{textDecoration: 'none'}} to='/Fotos'>
                    <li >Fotos</li>
                    </Link>

                    <Link  style={{textDecoration: 'none'}} to='/Contato'>
                    <li >Contato</li>
                    </Link>

                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>Voltar</li> 
                    </Link>
                    
                </ul>
            </nav>
                
        </header>
            
    )
}


export default HeaderC

