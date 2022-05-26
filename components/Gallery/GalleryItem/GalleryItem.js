import React from 'react';
import classes from './GalleryItem.module.scss'

const GalleryItem = (props) => {
    const activeClasses = props.className ? `${classes['slide--img']} ${classes[props.className]}` : classes['slide--img'];

    return (
        <div className={activeClasses}>
            <img src={props.img} alt={props.alt} />
        </div>
    )
}

export default React.memo(GalleryItem)