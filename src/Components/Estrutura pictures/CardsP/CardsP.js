import React, { useState } from "react";
import './CardsP.css'
import Modal from "../../modal";

function CardsP(){

    const [openModal, setOpenModal] = useState(false)
    const [openModalII, setOpenModalII] = useState(false)
    const [openModalIII, setOpenModalIII] = useState(false)
    const [openModalIV, setOpenModalIV] = useState(false)
    const [openModalV, setOpenModalV] = useState(false)
    const [openModalVI, setOpenModalVI] = useState(false)


    return(
        <>
            <div className="main-container">
                <div className="main-content">  
                    <div  onClick={() => setOpenModal(true)} className="cardP banner11"><div className="character-name">Robert Pattison</div></div>
                    <div onClick={() => setOpenModalII(true)} className="cardP banner21"><div className="character-name">Zoe Kravitz</div></div>
                    <div onClick={() => setOpenModalIII(true)} className="cardP banner31"><div className="character-name">Jeffery Wright</div></div>
                    <div onClick={() => setOpenModalIV(true)} className="cardP banner41"><div className="character-name">Paul Dano</div></div>
                    <div onClick={() => setOpenModalV(true)} className="cardP banner51"><div className="character-name">Colin Farrell</div></div>
                    <div onClick={() => setOpenModalVI(true)} className="cardP banner61"><div className="character-name">Andy Serkis</div></div>
                  

                </div>

                <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} > 
                    <div className="FOTO"></div>
                    <div className="NOME">Nome: Robert Pattison</div>
                    <div className="NOME">Nacionalidade: Britânico</div>
                    <div className="IDADE" >Idade: 38 Anos </div>
                    <div className="ALTURA">Altura: 1,85 m</div>  
                </Modal>
                
                 <Modal isOpen={openModalII} setModalOpen={() => setOpenModalII(!openModalII)} >
                    <div className="FOTOII"></div>
                    <div className="NOME">Nome: Zoe Kravitz</div>
                    <div className="NOME">Nacionalidade: Americana</div>
                    <div className="IDADE" >Idade: 35 Anos </div>
                    <div className="ALTURA">Altura: 1,57 m</div>
                </Modal>
                
                 <Modal isOpen={openModalIII} setModalOpen={() => setOpenModalIII(!openModalIII)} >
                    <div className="FOTOIII"></div>
                    <div className="NOME">Nome: Jeffery Wright</div>
                    <div className="NOME">Nacionalidade:Americano</div>
                    <div className="IDADE" >Idade: 58 Anos </div>
                    <div className="ALTURA">Altura: 1,80 m</div>
                </Modal> 
                
                <Modal isOpen={openModalIV} setModalOpen={() => setOpenModalIV(!openModalIV)} >
                    <div className="FOTOIV"></div>
                    <div className="NOME">Nome:Paul Dano</div>
                    <div className="NOME">Nacionalidade: Americano</div>
                    <div className="IDADE" >Idade: 40 Anos </div>
                    <div className="ALTURA">Altura: 1,84 m</div>
                </Modal> 
                
                <Modal isOpen={openModalV} setModalOpen={() => setOpenModalV(!openModalV)} >
                    <div className="FOTOV"></div>
                    <div className="NOME">Nome: Colin  Farrell </div>
                    <div className="NOME">Nacionalidade: Irlandês</div>
                    <div className="IDADE" >Idade: 48 Anos </div>
                    <div className="ALTURA">Altura: 1,78 m</div>
                </Modal> 
                
                <Modal isOpen={openModalVI} setModalOpen={() => setOpenModalVI(!openModalVI)} >
                    <div className="FOTOVI"></div>
                    <div className="NOME">Nome: Andy Serkis</div>
                    <div className="NOME">Nacionalidade: Britânico</div>
                    <div className="IDADE" >Idade: 60 Anos </div>
                    <div className="ALTURA">Altura: 1,73 m</div>
                </Modal>

            </div>
           
        </>   
        
    )
 
}

export default CardsP
