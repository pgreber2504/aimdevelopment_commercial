import { useCallback, useContext } from "react"
import contactContext from "../contexts/http-context"


const useHttp = () => {
    const { setIsLoading, setStatus } = useContext(contactContext);

    const fetchData = useCallback(async (options, applyData) => {
        setIsLoading(true);
        try {
            const response = await fetch(options.url, {
                method: options.method ? options.method : 'GET',
                body: options.body ? JSON.stringify(options.body) : null,
                headers: {
                    "Content-Type": 'application/json'
                }
            })
            if (!response.ok) {
                throw new Error('error')
            }
            const data = await response.json();
            if (applyData) { applyData(data) };
            setStatus('sended')
            setIsLoading(false);
        } catch (error) {
            setStatus('error')
            setIsLoading(false)
        }
    }, [setStatus, setIsLoading]
    )
    return { fetchData }
}

export default useHttp