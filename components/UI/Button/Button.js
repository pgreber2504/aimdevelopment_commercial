import { motion } from 'framer-motion';
import React from 'react';
import classes from './Button.module.scss'
motion

const Button = (props) => {
    const cssClasses = `${classes.button} ${props.className}`
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={cssClasses}
            onClick={props.onClick}
        >
            {props.children}
        </motion.button>
    )
}

export default Button