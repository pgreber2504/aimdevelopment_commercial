import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import ProductDetails from './ProductDetails/ProductDetails'
import ProductPhotos from './ProductPhotos/ProductPhotos'
import classes from './ProductsItem.module.scss'

const ProductsItem = ({ description, price, title, yardage, src, alt, reversed }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
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

    console.log(inView);
    return (
        <motion.div
            ref={ref}
            className={classes['products__item']}
            variants={prodAnimationVar}
            initial='initial'
            animate={inView ? 'animate' : 'initial'}
            exit='exit'>
            <ProductPhotos src={src} alt={alt} />
            <ProductDetails description={description} price={price} title={title} yardage={yardage} />
        </motion.div>
    )
}

export default ProductsItem