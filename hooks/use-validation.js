const useValidation = () => {

    const emptyCheck = (input) => {
        return input.toString().trim().length > 0
    }

    const nameValidation = (input) => {
        console.log('hello');
        return input
            .toString()
            .trim()
            .match(/^[a-zA-Z\s\p{L}]+$/u)
    }

    const emailValidation = (input) => {
        return input
            .toString()
            .toLowerCase()
            .trim()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    const phoneNumberValidation = (input) => {
        return input
            .toString()
            .trim()
            .match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/)
    }

    return {
        emptyCheck,
        nameValidation,
        emailValidation,
        phoneNumberValidation
    }
}


export default useValidation