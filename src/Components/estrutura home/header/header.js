import React from "react";
import './header.css'
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../../assets/desktop-wallpaper-batman-logo-black-background.jpg'


function Header() {

    const navigate = useNavigate();

    return(
        <header>
            <img id='Logo' src={Logo} />
            <nav>
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

                    <Link style={{textDecoration: 'none'}} to='/Comentarios'>
                    <li>Comentários</li> 
                    </Link>
                    
                </ul>
            </nav>
                
        </header>
    )
}




export default Header