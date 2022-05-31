import React, { useState } from 'react';

const initialValue = {
    isLoading: false,
    status: null,
    setIsLoading: () => { },
    setStatus: () => { },
}

const httpContext = React.createContext(initialValue)

export const HttpContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState(false)

    return (
        <httpContext.Provider value={{
            isLoading,
            status,
            setStatus,
            setIsLoading,
        }} >
            {children}
        </httpContext.Provider>
    )
}


export default httpContext