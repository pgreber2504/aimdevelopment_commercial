import React from 'react'
import classes from './ArrowButton.module.scss';

const ArrowButton = ({ lBtnOnClick, rBtnOnClick, direction, className }) => {

    const allClass = `${classes['arrow-button']} ${classes[direction]} ${className}`

    const button = direction === 'left'
        ? <button onClick={lBtnOnClick} className={allClass}>&larr;</button>
        : direction === 'right'
            ? <button onClick={rBtnOnClick} className={allClass}>&rarr;</button>
            : ''

    return button
}

export default ArrowButton