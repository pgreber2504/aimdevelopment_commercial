import React from 'react'
import { useInView } from 'react-intersection-observer'
import Address from './Address/Address'
import classes from './ContactContainer.module.scss'
import ContactForm from './ContactForm/ContactForm'

const ContactContainer = (props) => {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })



    return (
        <div ref={ref} className={classes["contact__container"]}>
            <ContactForm inView={inView} />
            <Address inView={inView} address={props.address} phone={props.phone} email={props.email} />
        </div>
    )
}

export default React.memo(ContactContainer)