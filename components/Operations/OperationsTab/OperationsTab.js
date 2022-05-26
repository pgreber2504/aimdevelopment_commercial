import React from 'react'
import Button from '../../UI/Button/Button';
import classes from './OperationsTab.module.scss'

const OperationsTab = (props) => {
    const activeClasses = props.className === 'active'
        ? `${classes['operations__tab']} ${classes[props.className]}`
        : classes['operations__tab'];
    return (
        <Button
            className={activeClasses}
            onClick={props.onClick}
        >
            <span>{props.titleNumber}</span><br />{props.title}
        </Button>
    )
}

export default OperationsTab