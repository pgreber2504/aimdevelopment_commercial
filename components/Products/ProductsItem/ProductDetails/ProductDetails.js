import React from 'react'
import Button from '../../../UI/Button/Button'
import classes from './ProductDetails.module.scss'

const ProductDetails = () => {
    return (
        <div className={classes['product--details']}>
            <h3>&nbsp;35m2&nbsp;</h3>
            <h4>{"Domek prostokąt"}</h4>
            <p>{"Powierzchnia po obrysie: 21 m² Powierzchnia użytkowa: 15,95 m² Salon z kuchnią: 12,26 m² Łazienka: 3,69 m²"}</p>
            <p className={classes['product--details-price']}>{"Cena od: 79 500 zł"}</p>
            <Button>Zapytaj o więcej</Button>
        </div>
    )
}

export default ProductDetails