import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import ProductDetails from './ProductDetails/ProductDetails'
import ProductPhotos from './ProductPhotos/ProductPhotos'
import classes from './ProductsItem.module.scss'

const ProductsItem = ({ description, price, name, yardage, photos, alt, reversed, rBtnOnClick, lBtnOnClick }) => {
    const [counter, setCounter] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: '-20px',
        triggerOnce: true,
    })

    const prodAnimationVar = {
        initial: {
            x: reversed ? '-100%' : '100%'
        },

        animate: {
            x: 0,
            transition: {
                duration: 0.5,
                type: 'spring'
            }
        },
        exit: {
            x: reversed ? '-100%' : '100%'
        }
    }

    const rightButtonHandler = () => {
        if (photos.length === counter + 1) {
            setCounter(0);
        }
        else setCounter(prev => ++prev)
    }

    const leftButtonHandler = () => {
        if (1 === counter + 1) {
            setCounter(photos.length - 1);
        }
        else setCounter(prev => --prev)
    }

    return (
        <motion.div
            ref={ref}
            className={classes['products__item']}
            variants={prodAnimationVar}
            initial='initial'
            animate={inView ? 'animate' : 'initial'}
            exit='exit'>
            <ProductPhotos src={photos[counter]} alt={alt} lBtnOnClick={leftButtonHandler} rBtnOnClick={rightButtonHandler} />
            <ProductDetails description={description} price={price} name={name} yardage={yardage} />
        </motion.div>
    )
}

export default ProductsItem