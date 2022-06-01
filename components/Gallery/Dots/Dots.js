import React from 'react'
import classes from './Dots.module.scss'

const Dots = (props) => {
    const dots = props.data.map((_, index) => (
        <div
            data-testid='dot'
            key={Math.random()}
            className={`${classes['dots__dot--img']} ${index === props.imageIndex ? classes['active'] : ''} `}>
        </div>
    ))

    return (
        <div data-testid='dots-container' className={classes["dots__img"]}>
            {dots}
        </div>
    )
}

export default Dots