import React from 'react'
import Button from '../../UI/Button/Button'

const ContactForm = () => {
    return (
        <form action="" className="contact--form">
            <input type="text" name="name" placeholder="Imię i Nazwisko" />

            <input type="number" name="number" placeholder="Numer telefonu" />

            <input type="email" name="email" placeholder="Adres e-mail" />

            <textarea
                type="text"
                name="name"
                placeholder="Napisz wiadomośc"
            ></textarea>
            <Button />
        </form>
    )
}

export default ContactForm