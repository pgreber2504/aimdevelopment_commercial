import Image from 'next/image'
import React from 'react'
import classes from './ProductPhotos.module.scss';

import ArrowButton from '../../../UI/ArrowButton/ArrowButton';

const ProductPhotos = ({ src, alt, lBtnOnClick, rBtnOnClick }) => {

    return (
        <div
            className={classes['product--photos']}>
            <Image src={src} alt={alt} layout='fill' placeholder='blur' />
            <ArrowButton direction={'left'} lBtnOnClick={lBtnOnClick} />
            <ArrowButton direction={'right'} rBtnOnClick={rBtnOnClick} />
        </div >
    )
}

export default ProductPhotos