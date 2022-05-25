import React from 'react';
import classes from './Button.module.scss'

const Button = (props) => {
    const cssClasses = `${classes.button} ${props.className}`
    return (
        <button className={cssClasses} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button