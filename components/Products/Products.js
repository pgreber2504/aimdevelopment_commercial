import React, { Fragment } from 'react'
import classes from './Products.module.scss';
import ProductsItem from './ProductsItem/ProductsItem';

import { PRODUCTS_DATA } from '../../constants/products-data';

const Products = () => {

    const products = PRODUCTS_DATA.map(prod => {
        return <ProductsItem key={prod.id} description={prod.description} title={prod.title} price={prod.minPrice} yardage={prod.yardage} src={prod.photos[0]} alt={'picture'} />
    })

    return (
        <div className={classes.products}>
            {products}
        </div>
    )
}

export default Products