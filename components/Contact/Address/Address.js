import { motion } from 'framer-motion';
import React from 'react'
import classes from './Address.module.scss';

const Address = (props) => {

    const dropInRight = {
        hidden: {
            x: "50%",
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



    return (
        <motion.address
            className={classes.address}
            variants={dropInRight}
            animate={props.inView ? 'visible' : 'hidden'}
        >
            <div className={classes["address--line"]}><strong>Adres: </strong>{props.address}</div>
            <div className={classes["address--line"]}><strong>Telefon: </strong>{props.phone}</div>
            <div className={classes["address--line"]}><strong>E-Mail: </strong>{props.email}</div>
            <div className={classes["address--icons"]}>
                <a href="#">
                    <svg>
                        <use xlinkHref="images/icons.svg#icon-facebook"></use>
                    </svg>
                </a>
                <a href="#">
                    <svg>
                        <use xlinkHref="images/icons.svg#icon-instagram"></use>
                    </svg>
                </a>
            </div>
        </motion.address>
    )
}

export default React.memo(Address)