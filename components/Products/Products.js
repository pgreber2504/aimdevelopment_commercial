import React, { Fragment } from 'react'
import classes from './Products.module.scss';
import ProductsItem from './ProductsItem/ProductsItem';

const Products = () => {
    return (
        <div className={classes.products}>
            <ProductsItem />
            <ProductsItem />
            <ProductsItem />
        </div>
    )
}

export default Products