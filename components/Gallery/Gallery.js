import React, { useState, useEffect, useCallback } from 'react'
import { wrap } from "popmotion";
import classes from './Gallery.module.scss';
import GalleryItem from './GalleryItem/GalleryItem';
import Example from './GalleryItem/GalleryItem';
import { AnimatePresence } from 'framer-motion';

const GALLERY_DATA = [
    { imgSrc: "images/gallery/img-1.jpeg", alt: 'Photo 1' },
    { imgSrc: "images/gallery/img-2.jpeg", alt: 'Photo 2' },
    { imgSrc: "images/gallery/img-3.jpeg", alt: 'Photo 3' },
    { imgSrc: "images/gallery/img-4.jpeg", alt: 'Photo 4' },
    { imgSrc: "images/gallery/img-5.jpeg", alt: 'Photo 5' },
    { imgSrc: "images/gallery/img-6.jpeg", alt: 'Photo 6' },
    { imgSrc: "images/gallery/img-7.jpeg", alt: 'Photo 7' },
    { imgSrc: "images/gallery/img-8.jpeg", alt: 'Photo 8' },
    { imgSrc: "images/gallery/img-9.jpeg", alt: 'Photo 9' },
    { imgSrc: "images/gallery/img-10.jpeg", alt: 'Photo 10' },
]


const Gallery = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const numOfPhotos = GALLERY_DATA.length

    const imageIndex = wrap(0, numOfPhotos, page);

    const paginate = useCallback((newDirection) => {
        setPage([page + newDirection, newDirection]);
    }, [setPage, page]);


    useEffect(() => {
        const timer = setTimeout(() => {
            paginate(1)
        }, 7000)

        return () => {
            clearTimeout(timer)
        }
    }, [paginate])



    const dots = GALLERY_DATA.map((_, index) => (
        <div
            key={Math.random()}
            className={`${classes['dots__dot--img']} ${index === imageIndex ? classes['active'] : ''} `}>
        </div>
    ))

    return (
        <div className={classes["slider__image"]}>
            <div className={classes['slide--img']}>
                <Example paginate={paginate} direction={direction} page={page} src={GALLERY_DATA[imageIndex].imgSrc} />
            </div>
            <button onClick={() => paginate(-1)} className={classes["slider__btn--left--img"]}>&larr;</button>
            <button onClick={() => paginate(1)} className={classes["slider__btn--right--img"]}>&rarr;</button>
            <div className={classes["dots__img"]}>
                {dots}
            </div>
        </div>
    )
}

export default Gallery