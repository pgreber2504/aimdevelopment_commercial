import { motion } from 'framer-motion';
import React from 'react'
import classes from './OperationsContent.module.scss';

const OperationsContent = (props) => {
    const activeClasses = props.className === 'active'
        ? `${classes['operations__content']} ${classes[props.className]}`
        : classes['operations__content'];

    const iconLink = `images/icons.svg#${props.iconId}`

    return (
        <motion.div
            className={activeClasses}
            initial={{ opacity: 0, zIndex: 1 }}
            animate={{ opacity: 1, zIndex: 0 }}
            exit={{ opacity: 0, zIndex: 1 }}
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
        </motion.div>
    )
}

export default React.memo(OperationsContent)