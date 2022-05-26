import React from 'react'
import { useInView } from 'react-intersection-observer';
import classes from './SectionWrapper.module.scss';

const SectionWrapper = (props) => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const sectionClasses = `${classes.section} 
        ${props.sectionClass ? classes[props.sectionClass] : ''} 
        ${!inView && props.intersect ? classes['section--hidden'] : ''}`

    const titleClasses = `${classes['section__title']} ${props.titleClass ? classes[props.titleClass] : ''}`




    if (props.id === 'section--info') {
        return (
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
    }

    if (props.intersect) {

    }

    return (
        <section ref={props.intersect && ref} className={sectionClasses} id={props.id}>
            <div className={titleClasses}>
                <h2 >{props.title}</h2>
                <h3 >{props.description}</h3>
            </div>
            {props.children}
        </section>
    )
}

export default SectionWrapper