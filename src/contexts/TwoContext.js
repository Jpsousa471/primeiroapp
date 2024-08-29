import { createContext, useState } from "react";

export const TwoCotext = createContext();

export const TwoStore = ({children}) => {
    const [fotos, setFotos] = useState(false)

    return(
        <TwoCotext.Provider value={{fotos, setFotos}}>
            {children}
        </TwoCotext.Provider>
    )
}