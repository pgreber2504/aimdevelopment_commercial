import React from 'react'
import ProductDetails from './ProductDetails/ProductDetails'
import ProductPhotos from './ProductPhotos/ProductPhotos'
import classes from './ProductsItem.module.scss'

const ProductsItem = () => {
    return (
        <div className={classes['products__item']}>
            <ProductPhotos />
            <ProductDetails />
        </div>
    )
}

export default ProductsItem