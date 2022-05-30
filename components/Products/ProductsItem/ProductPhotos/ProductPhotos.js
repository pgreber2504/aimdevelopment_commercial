import Image from 'next/image'
import React from 'react'
import classes from './ProductPhotos.module.scss';

import ArrowButton from '../../../UI/ArrowButton/ArrowButton';

const ProductPhotos = ({ src, alt }) => {
    return (
        <div className={classes['product--photos']}>
            <Image src={src} alt={alt} layout='fill' placeholder='blur' />
            <ArrowButton direction={'left'} />
            <ArrowButton direction={'right'} />
        </div>
    )
}

export default ProductPhotos