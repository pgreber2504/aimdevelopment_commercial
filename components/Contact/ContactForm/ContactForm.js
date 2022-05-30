import React, { useState } from 'react'
import classes from './ContactForm.module.scss'
import useInput from '../../../hooks/use-input'
import useValidation from '../../../hooks/use-validation'
import { motion } from 'framer-motion'

const dropInleft = {
    hidden: {
        x: "-50%",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 10,
            type: "spring",
            damping: 16,
            stiffness: 150,
        },
    },
};

const ContactForm = ({ inView }) => {
    const { formIsValid, setFormIsValid } = useState(true)
    const { emptyCheck, nameValidation, phoneNumberValidation, emailValidation } = useValidation()
    const {
        input: nameInput,
        touched: nameTouched,
        isValid: nameIsValid,
        isInvalid: nameIsInvalid,
        blurChange: nameBlurHandler,
        inputValueChange: nameChangeHandler,
    } = useInput(input => nameValidation(input))

    const {
        input: phoneInput,
        touched: phoneTouched,
        isValid: phoneIsValid,
        isInvalid: phoneIsInvalid,
        blurChange: phoneBlurHandler,
        inputValueChange: phoneChangeHandler,
    } = useInput(input => phoneNumberValidation(input))

    const {
        input: emailInput,
        touched: emailTouched,
        isValid: emailIsValid,
        isInvalid: emailIsInvalid,
        blurChange: emailBlurHandler,
        inputValueChange: emailChangeHandler,
    } = useInput(input => emailValidation(input))

    const {
        input: messageInput,
        touched: messageTouched,
        isValid: messageIsValid,
        isInvalid: messageIsInvalid,
        blurChange: messageBlurHandler,
        inputValueChange: messageChangeHandler,
    } = useInput(input => emptyCheck(input))

    const formIsInvalid = () => {
        return !nameIsValid || !phoneIsValid || !emailIsValid || !messageIsValid
    }

    const submitMailHandler = e => {
        e.preventDefault();

        if (formIsInvalid()) {
            setFormIsValid(false);
            return
        }
    }

    return (
        <motion.form
            className={classes["contact__form"]}
            variants={dropInleft}
            animate={inView ? 'visible' : 'hidden'}
            onSubmit={submitMailHandler}>
            <input required className={nameIsInvalid ? classes.invalid : ''} onChange={nameChangeHandler} onBlur={nameBlurHandler} type="text" name="name" placeholder="Imię i Nazwisko" />
            <input required className={phoneIsInvalid ? classes.invalid : ''} onChange={phoneChangeHandler} onBlur={phoneBlurHandler} type="number" name="number" placeholder="Numer telefonu" />
            <input required className={emailIsInvalid ? classes.invalid : ''} onChange={emailChangeHandler} onBlur={emailBlurHandler} type="email" name="email" placeholder="Adres e-mail" />

            <textarea
                required
                className={messageIsInvalid ? classes.invalid : ''}
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
                type="text"
                name="name"
                placeholder="Napisz wiadomość"
            ></textarea>
            <button disabled={!formIsValid}>Wyślij</button>
        </motion.form>

    )
}

export default ContactForm