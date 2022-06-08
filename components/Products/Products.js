import React from 'react'
import classes from './Products.module.scss';
import ProductsItem from './ProductsItem/ProductsItem';

import { PRODUCTS_DATA } from '../../constants/products-data';

const Products = () => {


    const products = PRODUCTS_DATA.map((prod, i) => {

        return <ProductsItem
            key={prod.id}
            description={prod.description}
            name={prod.name}
            price={prod.minPrice}
            yardage={prod.yardage}
            photos={prod.photos}
            alt={'picture'}
            reversed={i % 2 === 0} />
    })

    return (
        <div className={classes.products}>
            {products}
        </div>
    )
}

export default Products