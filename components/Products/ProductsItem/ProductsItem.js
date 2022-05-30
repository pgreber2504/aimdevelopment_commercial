import React from 'react'
import ProductDetails from './ProductDetails/ProductDetails'
import ProductPhotos from './ProductPhotos/ProductPhotos'
import classes from './ProductsItem.module.scss'

const ProductsItem = ({ description, price, title, yardage, src, alt }) => {
    return (
        <div className={classes['products__item']}>
            <ProductPhotos src={src} alt={alt} />
            <ProductDetails description={description} price={price} title={title} yardage={yardage} />
        </div>
    )
}

export default ProductsItem