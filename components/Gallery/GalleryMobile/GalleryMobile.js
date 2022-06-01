import React, { Fragment, useState } from 'react'
import classes from './GalleryMobile.module.scss'
import Dots from '../Dots/Dots';
import GalleryItem from '../GalleryItem/GalleryItem';
import Image from 'next/image';
import ArrowButton from '../../UI/ArrowButton/ArrowButton';

const GalleryMobile = (props) => {
    const [fullscreen, setFullscreen] = useState(false)

    const openFullscreenHandler = () => {
        setFullscreen(true);
    }

    const closeFullscreenHandler = () => {
        setFullscreen(false);
    }

    return (
        <Fragment>
            {fullscreen && (
                <div data-testid='fullscreen-container' className={classes["slider__image--mobile-fullscreen"]}>
                    <button onClick={closeFullscreenHandler} className={classes["slider__btn--close-fullscreen"]}>&times;</button>
                    <div className={classes['slide--img--mobile-fullscreen']}>
                        <GalleryItem fullscreen={fullscreen} direction={props.direction} page={props.page} src={props.src} />
                    </div>
                    <ArrowButton lBtnOnClick={props.lBtnOnClick} direction='left' />
                    <ArrowButton rBtnOnClick={props.rBtnOnClick} direction='right' />
                    <Dots data-testid={'dots'} data={props.data} imageIndex={props.imageIndex} />
                </div>
            )
            }
            <div className={classes["slider__image--mobile"]}>
                <div data-testid='clickable-container' onClick={openFullscreenHandler} className={classes['slide--img--mobile']}>
                    <Image
                        src={props.srcPlaceholder}
                        alt={props.altPlaceholder}
                        layout='fill'
                        placeholder='blur' />
                    <div className={classes.clickInfo}>
                        <svg>
                            <use xlinkHref="images/icons.svg#icon-zoom-in"></use>
                        </svg>
                        <span>Dotknij aby zobaczyć więcej</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default GalleryMobile