import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
    const [watchType, setWatchType] = useState('');

    return (
        <PageContext.Provider value={{ watchType, setWatchType }}>
            {children}
        </PageContext.Provider>
    )
}
