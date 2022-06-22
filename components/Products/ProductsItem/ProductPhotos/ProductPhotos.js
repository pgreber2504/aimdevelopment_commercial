import React from 'react'
import classes from './ProductPhotos.module.scss';
import GalleryItem from '../../../Gallery/GalleryItem/GalleryItem';

import ArrowButton from '../../../UI/ArrowButton/ArrowButton';

const ProductPhotos = ({ src, alt, lBtnOnClick, rBtnOnClick, direction, page }) => {

    return (
        <div
            className={classes['product--photos']}>
            <GalleryItem direction={direction} page={page} src={src} fullscreen />
            <ArrowButton direction={'left'} lBtnOnClick={lBtnOnClick} />
            <ArrowButton direction={'right'} rBtnOnClick={rBtnOnClick} />
        </div >
    )
}

export default ProductPhotos