import React, { useState, useCallback, Fragment } from 'react'
import { wrap } from "popmotion";

import GalleryDesktop from './GalleryDesktop/GalleryDesktop';
import GalleryMobile from './GalleryMobile.js/GalleryMobile';
import { GALLERY_DATA } from '../../constants/gallery-data';



const Gallery = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const numOfPhotos = GALLERY_DATA.length

    const imageIndex = wrap(0, numOfPhotos, page);

    const paginate = useCallback((newDirection) => {
        setPage([page + newDirection, newDirection]);
    }, [setPage, page]);

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