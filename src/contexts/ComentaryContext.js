import { createContext, useState } from "react";

export const ComentaryContext = createContext();

export const ComentaryStore = ({children}) => {
    const [contato, setContato] = useState(false)

    return(
        <ComentaryContext.Provider value={{contato, setContato}} >
            {children}
        </ComentaryContext.Provider>
    )
}