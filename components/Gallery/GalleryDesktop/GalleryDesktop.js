import React from 'react'
import classes from './GalleryDesktop.module.scss';

import Dots from '../Dots/Dots'
import GalleryItem from '../GalleryItem/GalleryItem';
import ArrowButton from '../../UI/ArrowButton/ArrowButton';

const GalleryDesktop = (props) => {
    return (
        <div data-testid='gallery-desktop-container' className={classes["slider__image"]}>
            <div className={classes['slide--img']}>
                <GalleryItem direction={props.direction} page={props.page} src={props.src} />
            </div>
            <ArrowButton lBtnOnClick={props.lBtnOnClick} direction='left' />
            <ArrowButton rBtnOnClick={props.rBtnOnClick} direction='right' />
            <Dots data={props.data} imageIndex={props.imageIndex} />
        </div>
    )
}

export default GalleryDesktop