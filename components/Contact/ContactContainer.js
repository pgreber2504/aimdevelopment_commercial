import React from 'react'
import Address from './Address/Address'
import classes from './ContactContainer.module.scss'
import ContactForm from './ContactForm/ContactForm'

const ContactContainer = (props) => {
    return (
        <div className={classes["contact__container"]}>
            <ContactForm />
            <Address address={props.address} phone={props.phone} email={props.email} />
        </div>
    )
}

export default ContactContainer