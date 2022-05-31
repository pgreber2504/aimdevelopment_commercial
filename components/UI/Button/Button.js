import { motion } from 'framer-motion';
import React from 'react';
import classes from './Button.module.scss'

const Button = (props) => {
    const cssClasses = `${classes.button} ${props.className}`

    if (props.animated) {
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

    return (
        <button
            className={cssClasses}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}

export default React.memo(Button)