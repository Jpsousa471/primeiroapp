import React from "react";
import './modal.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";


       function Modal({isOpen, children, setModalOpen}) {

    
        if(isOpen) {
    
            return (
                <div  className="BackGround_Style">
                    <div className="Modal_Style">
                    <div id="Icon" onClick={setModalOpen}>{<FontAwesomeIcon icon={faX} />}</div>
                    {children}
                    </div>
                </div>
            )
        }
    }

        export default Modal


