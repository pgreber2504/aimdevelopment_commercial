import React from 'react'
import classes from './SectionWrapper.module.scss';

const SectionWrapper = (props) => {
    const sectionClasses = `${classes.section} ${props.sectionClass && classes[props.sectionClass]}`
    const titleClasses = `${classes['section__title']} ${classes[props.titleClass]}`



    let content;

    if (props.id === 'section--info') {
        content = (
            <section className={classes["section--info"]} id="section--info">
                <div className={classes["section__info--phone"]}>
                    <svg>
                        <use xlinkHref="images/icons.svg#icon-phone"></use>
                    </svg>
                    <h1>ZADZWOŃ DO NAS:</h1>
                    <h2>{props.phoneNumber}</h2>
                </div>

                <div className={classes["section__info--phone"]}>
                    <svg>
                        <use xlinkHref="images/icons.svg#icon-mail"></use>
                    </svg>
                    <h1>NAPISZ DO NAS:</h1>
                    <h2>{props.email}</h2>
                </div>

                <div className={classes["section__info--phone"]}>
                    <svg>
                        <use xlinkHref="images/icons.svg#icon-map-pin"></use>
                    </svg>
                    <h1>NASZA LOKALIZACJA</h1>
                    <h2>{props.address}</h2>
                </div>
            </section>
        )
    } else {
        content = (
            <section className={sectionClasses} id={props.id}>
                <div className={titleClasses}>
                    <h2 >{props.title}</h2>
                    <h3 >{props.description}</h3>
                </div>
                {props.children}
            </section>
        )
    }

    return content
}

export default SectionWrapper