
import React from "react";
import { motion } from "framer-motion";
import classes from './Notification.module.scss';
import { CloseButton } from "../CloseButton/CloseButton";

// import { CloseButton } from "./CloseButton";

const Notification = ({ status, close }) => {

    const allClasses = `${classes['notification--test']} ${classes[status]} `

    let text;

    if (status === 'sended') {
        text = 'Wiadomośc została wysłana.'
    };

    if (status === 'error') {
        text = 'Coś poszło nie tak. Spróbuj ponownie.'
    }

    return (
        <motion.div
            className={allClasses}
            positionTransition
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        >
            <CloseButton close={close} />
            <h3>{text}</h3>
        </motion.div>
    );
};

export default Notification