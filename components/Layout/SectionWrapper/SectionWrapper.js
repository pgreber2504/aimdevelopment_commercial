import { motion } from 'framer-motion';
import React from 'react'
import { useInView } from 'react-intersection-observer';
import classes from './SectionWrapper.module.scss';

const SectionWrapper = (props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: contactRef, inView: contactInView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const contactVariants = {
        initial: {
            y: '80%'
        },
        animate: {
            y: 0,
            transition: {
                duration: 0.4,
                type: 'spring'
            }
        }
    }

    const sectionClasses = `${classes.section} 
        ${props.sectionClass ? classes[props.sectionClass] : ''} 
        ${!inView && props.intersect ? classes['section--hidden'] : ''}`

    const titleClasses = `${classes['section__title']} ${props.titleClass ? classes[props.titleClass] : ''}`

    if (props.id === 'section--info') {
        return (
            <section className={classes["section--info"]} id="section--info">
                <motion.div
                    ref={contactRef}
                    className={classes["section__info--phone"]}
                    variants={contactVariants}
                    initial='initial'
                    animate={contactInView ? 'animate' : 'initial'}>
                    <svg>
                        <use xlinkHref="images/icons.svg#icon-phone"></use>
                    </svg>
                    <h2>ZADZWOŃ DO NAS:</h2>
                    <h3>{props.phoneNumber}</h3>
                </motion.div>

                <motion.div
                    ref={contactRef}
                    className={classes["section__info--phone"]}
                    variants={contactVariants}
                    initial='initial'
                    animate={contactInView ? 'animate' : 'initial'}>
                    <svg>
                        <use xlinkHref="images/icons.svg#icon-mail"></use>
                    </svg>
                    <h2>NAPISZ DO NAS:</h2>
                    <h3>{props.email}</h3>
                </motion.div>

                <motion.div
                    ref={contactRef}
                    className={classes["section__info--phone"]}
                    variants={contactVariants}
                    initial='initial'
                    animate={contactInView ? 'animate' : 'initial'}>
                    <svg>
                        <use xlinkHref="images/icons.svg#icon-map-pin"></use>
                    </svg>
                    <h2>NASZA LOKALIZACJA</h2>
                    <h3>{props.address}</h3>
                </motion.div>
            </section>
        )
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