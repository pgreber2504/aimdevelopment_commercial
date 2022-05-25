import React, { useState, Fragment, useContext } from 'react';
import ModalContext from '../../../contexts/modal-context';
import Button from '../Button/Button';
import classes from './Modal.module.scss'


const Overlay = (props) => {
    return <div className={classes.overlay}></div>
}


const Modal = (props) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const modalCtx = useContext(ModalContext)

    const changeNameHandler = e => {
        setName(e.target.value)
    }

    const changeLastNameHandler = e => {
        setLastName(e.target.value)
    }

    const changeEmailHandler = e => {
        setEmail(e.target.value);
    }

    const closeModal = () => {
        modalCtx.closeModal()
    }

    return (
        <Fragment>
            <Overlay />
            <div className={classes.modal}>
                <button onClick={closeModal} className={classes["btn--close-modal"]}>&times;</button>
                <h2 className={classes["modal__header"]}>
                    Pobierz nasz katalog <br />
                    w niecałe <span className="highlight">5 minut</span>
                </h2>
                <form onSubmit={props.onSubmit} className={classes["modal__form"]}>
                    <label>Imię</label>
                    <input onChange={changeNameHandler} type="text" required min={1} max={20} />
                    <label>Nazwisko</label>
                    <input onChange={changeLastNameHandler} type="text" required min={1} max={20} />
                    <label>Adres E-Mail</label>
                    <input onChange={changeEmailHandler} type="email" required />
                    <Button>Pobierz katalog &rarr;</Button>
                </form>
            </div>
        </Fragment>
    )
}

export default Modal