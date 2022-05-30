import React, { useState, useEffect, useCallback, Fragment } from 'react'
import { wrap } from "popmotion";
import classes from './Gallery.module.scss';
import GalleryItem from './GalleryItem/GalleryItem';
import Example from './GalleryItem/GalleryItem';
import { AnimatePresence } from 'framer-motion';
import GalleryDesktop from './GalleryDesktop/GalleryDesktop';
import GalleryMobile from './GalleryMobile.js/GalleryMobile';

import Image1 from '../../public/images/gallery/img-1.webp';
import Image2 from '../../public/images/gallery/img-2.webp';
import Image3 from '../../public/images/gallery/img-3.webp';
import Image4 from '../../public/images/gallery/img-4.webp';
import Image5 from '../../public/images/gallery/img-5.webp';
import Image6 from '../../public/images/gallery/img-6.webp';
import Image7 from '../../public/images/gallery/img-7.webp';
import Image8 from '../../public/images/gallery/img-8.webp';
import Image9 from '../../public/images/gallery/img-9.webp';
import Image10 from '../../public/images/gallery/img-10.webp';

const GALLERY_DATA = [
    { imgSrc: Image1, alt: 'Photo 1' },
    { imgSrc: Image2, alt: 'Photo 2' },
    { imgSrc: Image3, alt: 'Photo 3' },
    { imgSrc: Image4, alt: 'Photo 4' },
    { imgSrc: Image5, alt: 'Photo 5' },
    { imgSrc: Image6, alt: 'Photo 6' },
    { imgSrc: Image7, alt: 'Photo 7' },
    { imgSrc: Image8, alt: 'Photo 8' },
    { imgSrc: Image9, alt: 'Photo 9' },
    { imgSrc: Image10, alt: 'Photo 10' },
]


const Gallery = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const numOfPhotos = GALLERY_DATA.length

    const imageIndex = wrap(0, numOfPhotos, page);

    const paginate = useCallback((newDirection) => {
        setPage([page + newDirection, newDirection]);
    }, [setPage, page]);


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         paginate(1)
    //     }, 7000)

    //     return () => {
    //         clearTimeout(timer)
    //     }
    // }, [paginate])

    return (
        <Fragment>
            <GalleryMobile
                srcPlaceholder={GALLERY_DATA[0].imgSrc}
                altPlaceholder={GALLERY_DATA[0].alt}
                src={GALLERY_DATA[imageIndex].imgSrc}
                alt={GALLERY_DATA[imageIndex].alt}
                paginate={paginate}
                direction={direction}
                page={page}
                lBtnOnClick={() => paginate(-1)}
                rBtnOnClick={() => paginate(1)}
                data={GALLERY_DATA}
                imageIndex={imageIndex}
            />
            <GalleryDesktop
                src={GALLERY_DATA[imageIndex].imgSrc}
                alt={GALLERY_DATA[imageIndex].alt}
                paginate={paginate}
                direction={direction}
                page={page}
                lBtnOnClick={() => paginate(-1)}
                rBtnOnClick={() => paginate(1)}
                data={GALLERY_DATA}
                imageIndex={imageIndex} />
        </Fragment>
    )
}

export default Gallery