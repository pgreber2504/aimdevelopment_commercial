import { useState } from 'react'


const useInput = (useValidate) => {
    const [input, setInput] = useState('')
    const [touched, setTouched] = useState(false)

    const isValid = useValidate(input);

    const isInvalid = touched && !isValid

    const blurChange = () => {
        setTouched(true);
    }

    const inputValueChange = (e) => {
        if (!e) {
            setInput('');
            setTouched(false)
            return
        }
        setInput(e.target.value)
    }

    return {
        input,
        touched,
        isValid,
        isInvalid,
        blurChange,
        inputValueChange
    }
}

export default useInput