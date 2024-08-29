import React from "react";
import './FinalCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Foto from '../../../assets/Imagem do WhatsApp de 2024-05-16 à(s) 23.47.07_992b6838.jpg'

function FinalCard() {

    return(
    <div className="final-container">
        <div className="final-content">
            <div className="final-card">
                <img className="profile-image" src={Foto} />
                <span className="name-text">João Pedro</span>
                <span className="profile-text">Me siga nas redes socias abaixo
                    para conhecer mais sobre mim!
                </span>
                <div className="divider"></div>
                <div className="social-meida">
                    <a href="https://www.instagram.com/jpsousa_9056/" target="_blank"> 
                        <FontAwesomeIcon className="Icone" icon={faInstagram} />
                    </a>
                     <a href="https://www.facebook.com/profile.php?id=100018052748406&locale=pt_BR" target="_blank">
                        <FontAwesomeIcon  className="Icone" icon={faFacebook} />
                    </a>
                     <a href="https://www.youtube.com/" target="_blank">
                        <FontAwesomeIcon  className="Icone" icon={faYoutube} />
                    </a>
                </div>
            </div>
        </div>
    </div>       
    )
}

export default FinalCard