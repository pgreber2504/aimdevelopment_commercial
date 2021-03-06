import React, { Fragment, useContext } from 'react';
import ModalContext from '../../../contexts/modal-context';
import { motion } from 'framer-motion';

import Button from '../Button/Button';
import classes from './Modal.module.scss'
import useInput from '../../../hooks/use-input';
import useValidation from '../../../hooks/use-validation';


const Overlay = (props) => {
    return (
        <motion.div
            data-testid='overlay'
            onClick={props.onClick}
            className={classes.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {props.children}
        </motion.div>
    )
}

const dropIn = {
    hidden: {
        top: "-100vh",
        opacity: 0,
    },
    visible: {
        top: "50vh",
        opacity: 1,
        transition: {
            duration: 0.2,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        top: "100vh",
        opacity: 0,
    },
};


const Modal = () => {
    const modalCtx = useContext(ModalContext)
    const { nameValidation, emailValidation } = useValidation();

    const {
        input: nameInput,
        touched: nameTouched,
        isValid: nameIsValid,
        isInvalid: nameIsInvalid,
        blurChange: nameBlurHandler,
        inputValueChange: nameChangeHandler
    } = useInput((inputVal) => nameValidation(inputVal));

    const {
        input: lastNameInput,
        touched: lastNameTouched,
        isValid: lastNameIsValid,
        isInvalid: lastNameIsInvalid,
        blurChange: lastNameBlurHandler,
        inputValueChange: lastNameChangeHandler
    } = useInput((inputVal) => nameValidation(inputVal));

    const {
        input: emailInput,
        touched: emailTouched,
        isValid: emailIsValid,
        isInvalid: emailIsInvalid,
        blurChange: emailBlurHandler,
        inputValueChange: emailChangeHandler
    } = useInput((input) => emailValidation(input));


    const formIsValid = nameIsValid && lastNameIsValid && emailIsValid

    const submitHandler = e => {
        e.preventDefault();
        return
    }

    const closeModal = () => {
        modalCtx.closeModal()
    }

    return (
        <Fragment>
            <Overlay onClick={closeModal}>
                <motion.div
                    className={classes.modal}
                    onClick={(e) => e.stopPropagation()}
                    variants={dropIn}
                    initial='hidden'
                    animate='visible'
                    exit='exit'
                    data-testid='modalContainer'
                >
                    <button onClick={closeModal} className={classes["btn--close-modal"]}>&times;</button>
                    <h2 className={classes["modal__header"]}>
                        Pobierz nasz katalog <br />
                        w nieca??e <span className={classes.highlight}>5 minut</span>
                    </h2>
                    <form onSubmit={submitHandler} className={classes["modal__form"]}>
                        <p className={classes.info}>Katalog obecnie niedost??pny! Przepraszamy za utrudnienia</p>

                        <label>Imi??</label>
                        <input className={nameIsInvalid ? classes.invalid : ''} onChange={nameChangeHandler} onBlur={nameBlurHandler} type="text" required min={1} max={20} />
                        <label>Nazwisko</label>
                        <input className={lastNameIsInvalid ? classes.invalid : ''} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} type="text" required min={1} max={20} />
                        <label>Adres E-Mail</label>
                        <input className={emailIsInvalid ? classes.invalid : ''} onChange={emailChangeHandler} onBlur={emailBlurHandler} type="email" required />
                        <Button disabled={true}>Pobierz katalog &rarr;</Button>
                    </form>
                </motion.div>
            </Overlay>

        </Fragment>
    )
}

export default Modal