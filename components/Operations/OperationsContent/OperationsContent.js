import React from 'react'
import classes from './OperationsContent.module.scss';

const OperationsContent = (props) => {
    const activeClasses = props.className === 'active'
        ? `${classes['operations__content']} ${classes[props.className]}`
        : classes['operations__content'];

    const iconLink = `images/icons.svg#${props.iconId}`

    return (
        <div
            className={activeClasses}
        >
            <div className={classes["operations__icon"]}>
                <svg>
                    <use xlinkHref={iconLink}></use>
                </svg>
            </div>
            <h5 className={classes["operations__header"]}>
                {props.title}
            </h5>
            <p>
                {props.description}
            </p>
        </div>
    )
}

export default OperationsContent