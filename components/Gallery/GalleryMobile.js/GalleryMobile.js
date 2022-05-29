import React, { Fragment, useState } from 'react'
import classes from './GalleryMobile.module.scss'
import Dots from '../Dots/Dots';
import GalleryItem from '../GalleryItem/GalleryItem';

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
                <div className={classes["slider__image--mobile-fullscreen"]}>
                    <button onClick={closeFullscreenHandler} className={classes["slider__btn--close-fullscreen"]}>&times;</button>
                    <div className={classes['slide--img--mobile-fullscreen']}>
                        <GalleryItem paginate={props.paginate} direction={props.direction} page={props.page} src={props.src} />
                    </div>
                    <button onClick={props.lBtnOnClick} className={classes["slider__btn--left--img--mobile-fullscreen"]}>&larr;</button>
                    <button onClick={props.rBtnOnClick} className={classes["slider__btn--right--img--mobile-fullscreen"]}>&rarr;</button>
                    <Dots data={props.data} imageIndex={props.imageIndex} />
                </div>
            )
            }

            <div className={classes["slider__image--mobile"]}>
                <div onClick={openFullscreenHandler} className={classes['slide--img--mobile']}>
                    <GalleryItem paginate={props.paginate} direction={props.direction} page={props.page} src={props.src} />
                </div>
                {/* <button onClick={props.lBtnOnClick} className={classes["slider__btn--left--img--mobile"]}>&larr;</button>
                <button onClick={props.rBtnOnClick} className={classes["slider__btn--right--img--mobile"]}>&rarr;</button>
                <div className={classes["dots__img"]}>
                    <Dots data={props.data} imageIndex={props.imageIndex} />
                </div> */}
            </div>
        </Fragment>
    )
}

export default GalleryMobile