import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
    const [watchType, setWatchType] = useState('');
    const [watchBrand, setWatchBrand] = useState('');

    return (
        <PageContext.Provider value={{ watchType, setWatchType, watchBrand, setWatchBrand }}>
            {children}
        </PageContext.Provider>
    )
}
