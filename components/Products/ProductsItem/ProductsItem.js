import React from 'react'
import classes from './ProductsItem.module.scss'

const ProductsItem = () => {
    return (
        <div className={classes['products__item']}>
            <div>Zdjęcie</div>
            <div>Opis</div>
        </div>
    )
}

export default ProductsItem