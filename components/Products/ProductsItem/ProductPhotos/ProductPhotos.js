import Image from 'next/image'
import React from 'react'
import classes from './ProductPhotos.module.scss';

import Photo from '../../../../public/images/offer/ikadom-producent-budynkow-modulowych-2021.jpeg';
import ArrowButton from '../../../UI/ArrowButton/ArrowButton';

const ProductPhotos = () => {
    return (
        <div className={classes['product--photos']}>
            <Image src={Photo} alt='something' layout='fill' />
            <ArrowButton direction={'left'} />
            <ArrowButton direction={'right'} />
        </div>
    )
}

export default ProductPhotos