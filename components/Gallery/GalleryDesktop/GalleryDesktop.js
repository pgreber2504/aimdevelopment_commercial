import React from 'react'
import classes from './GalleryDesktop.module.scss';

import Dots from '../Dots/Dots'
import GalleryItem from '../GalleryItem/GalleryItem'

const GalleryDesktop = (props) => {
    return (
        <div className={classes["slider__image"]}>
            <div className={classes['slide--img']}>
                <GalleryItem paginate={props.paginate} direction={props.direction} page={props.page} src={props.src} />
            </div>
            <button onClick={props.lBtnOnClick} className={classes["slider__btn--left--img"]}>&larr;</button>
            <button onClick={props.rBtnOnClick} className={classes["slider__btn--right--img"]}>&rarr;</button>
            <Dots data={props.data} imageIndex={props.imageIndex} />
        </div>
    )
}

export default GalleryDesktop