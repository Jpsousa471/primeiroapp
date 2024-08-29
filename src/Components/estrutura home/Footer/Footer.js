import React from "react";
import Logo from '../../../assets/desktop-wallpaper-batman-logo-black-background.jpg'
import './Footer.css'
import {Link} from 'react-router-dom'
function Footer() {

    return(
        <footer>
            <img style={{objectFit: "contain"}}  id="Logo" src={Logo} />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: João Pedrinho</span>
            
            <nav className="footer-navigation">
                <ul className="footer-list">
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
        </footer>
    )
}

export default Footer