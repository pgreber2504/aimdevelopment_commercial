import React, { useState, useEffect, useCallback } from 'react'
import classes from './Gallery.module.scss';
import GalleryItem from './GalleryItem/GalleryItem';

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
    const [counter, setCounter] = useState(0);
    const numOfPhotos = GALLERY_DATA.length

    const slideLeftHandler = useCallback(() => {
        if (counter === 0) {
            setCounter(numOfPhotos - 1);
        } else {
            setCounter(prevState => --prevState)
        }
    }, [counter, numOfPhotos])

    const slideRightHandler = useCallback(() => {
        if (counter === numOfPhotos - 1) {
            setCounter(0)
        } else {
            setCounter(prevState => ++prevState)
        }
    }, [counter, numOfPhotos])

    const dotClickHandler = useCallback((index) => {
        setCounter(index)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            slideRightHandler()
        }, 7000)

        return () => {
            clearTimeout(timer)
        }
    }, [counter, slideRightHandler])

    const slides = GALLERY_DATA.map((el, index) => (
        <GalleryItem
            key={index}
            className={index === counter && 'active-img'}
            img={el.imgSrc}
            alt={el.alt} />)
    )

    const dots = GALLERY_DATA.map((_, index) => (
        <div
            onClick={dotClickHandler.bind(null, index)}
            key={Math.random()}
            className={`${classes['dots__dot--img']} ${index === counter ? classes['active'] : ''} `}>
        </div>
    ))

    return (
        <div className={classes["slider__image"]}>
            {slides}
            <button onClick={slideLeftHandler} className={classes["slider__btn--left--img"]}>&larr;</button>
            <button onClick={slideRightHandler} className={classes["slider__btn--right--img"]}>&rarr;</button>
            <div className={classes["dots__img"]}>
                {dots}
            </div>
        </div>
    )
}

export default Gallery