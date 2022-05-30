import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import Button from '../../../UI/Button/Button'
import classes from './ProductDetails.module.scss'

const ProductDetails = ({ yardage, name, description, price }) => {
    return (
        <div className={classes['product--details']}>
            <h3>&nbsp;{yardage}&nbsp;</h3>
            <h4>{name}</h4>
            <p>{description}</p>
            <p className={classes['product--details-price']}>Cena od: {price} zł</p>
            <Link to={'section--5'} smooth={true}>
                <Button>Zapytaj o więcej</Button>
            </Link>
        </div>
    )
}

export default ProductDetails