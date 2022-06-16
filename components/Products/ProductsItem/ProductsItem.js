import { motion } from 'framer-motion'
import React, { useState, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import { wrap } from "popmotion";
import ProductDetails from './ProductDetails/ProductDetails'
import ProductPhotos from './ProductPhotos/ProductPhotos'
import classes from './ProductsItem.module.scss'

const ProductsItem = ({ description, price, name, yardage, photos, alt, reversed }) => {
    const [[page, direction], setPage] = useState([0, 0]);
    const numOfPhotos = photos.length

    const imageIndex = wrap(0, numOfPhotos, page);

    const paginate = useCallback((newDirection) => {
        setPage([page + newDirection, newDirection]);
    }, [setPage, page]);


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

    return (
        <motion.div
            ref={ref}
            className={classes['products__item']}
            variants={prodAnimationVar}
            initial='initial'
            animate={inView ? 'animate' : 'initial'}
            exit='exit'>
            <ProductPhotos page={page} paginate={paginate} direction={direction} src={photos[imageIndex]} alt={alt} lBtnOnClick={() => paginate(-1)} rBtnOnClick={() => paginate(1)} />
            <ProductDetails description={description} price={price} name={name} yardage={yardage} />
        </motion.div>
    )
}


export default ProductsItem