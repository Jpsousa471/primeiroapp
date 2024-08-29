import React from "react";
import './Bloco.css'
import Button from "../../button/button";
import Foto from '../../../assets/Imagem do WhatsApp de 2024-05-16 à(s) 23.47.07_992b6838.jpg'
import Picture from '../../../assets/Neymar.jpeg'
import PictureII from '../../../assets/Cristian Bale.jpeg'
import PictureIII from '../../../assets/Lula.jpeg'

function Bloco() {


    return(
        <>
        <div className="content">
            <div className="bloco1">
                <div className="conteudo">
                    <div className="lado">
                    <span className="I">3 COMENTÁRIOS</span>
                    </div>
                    <div className="dividerI"></div>
                    <span className="information">
                        Os comentários são de resposabilidade exclusiva de seus autores
                        e não representam a opinião deste site. Se achar algo que viole
                        os TERMOS DE USO, denuncie. Leia os comentários em destaque e faça
                        oseu agora!
                    </span>
                        <div className="box">
                                <img id="picture" src={Foto}/>
                                <input style={{display: "block"}} id="comentario" type="text" name="text" placeholder="Digite seu comentário" />
                                <button className="enviar">Enviar</button>
                        </div>

                        <div className="dividerI"></div>

                        <div className="boxII">
                            <img id="little-picture" src={Picture} />
                            <span className="nombre">Neymar</span>
                            <p id="fala">
                                Filme manerão galera! Top de mais, muita ação e cenas de luta
                                 foda. Ansioso pra dar uma voltinha nesse batmovel ae!
                            </p> 
                        </div>

                        <div className="dividerI"></div>


                        <div className="boxII">
                            <img id="little-picture" src={PictureII} />
                            <span className="nombre">Bale</span>
                            <p id="fala">
                                Um bom trabalho como batman! Como disse,
                                você foi um ótimo Batman neste filme. Que 
                                você tenha muito sucesso nessa nova jornada 
                                de sua carreira Pattison!
                            </p> 
                        </div>

                        <div className="dividerI"></div>


                        <div className="boxII">
                            <img id="little-picture" src={PictureIII} />
                            <span className="nombre">Lule</span>
                            <p id="fala">
                               Mas oq è izo? Um fillme com muya violencia e sangue
                               .. uM fime que encentiva as nossas quiridas 200 milhoes
                               de crincas,, aSSim como os gaymiles. Ai nEymar...
                            </p> 
                        </div>

                </div>
            </div>
        </div>
        </>

    )
}

export default Bloco