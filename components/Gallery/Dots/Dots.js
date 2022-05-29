import React from 'react'
import classes from './Dots.module.scss'

const Dots = (props) => {
    const dots = props.data.map((_, index) => (
        <div
            key={Math.random()}
            className={`${classes['dots__dot--img']} ${index === props.imageIndex ? classes['active'] : ''} `}>
        </div>
    ))

    return (
        <div className={classes["dots__img"]}>
            {dots}
        </div>
    )
}

export default Dots