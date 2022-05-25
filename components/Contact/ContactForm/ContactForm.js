import React from 'react'
import classes from './ContactForm.module.scss'
import Button from '../../UI/Button/Button'

const ContactForm = () => {
    return (
        <form className={classes["contact__form"]}>
            <input type="text" name="name" placeholder="Imię i Nazwisko" />

            <input type="number" name="number" placeholder="Numer telefonu" />

            <input type="email" name="email" placeholder="Adres e-mail" />

            <textarea
                type="text"
                name="name"
                placeholder="Napisz wiadomość"
            ></textarea>
            <button>Wyślij</button>
        </form>
    )
}

export default ContactForm