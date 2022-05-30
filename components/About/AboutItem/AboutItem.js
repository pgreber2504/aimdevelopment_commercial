import React, { Fragment } from 'react'
import { motion } from 'framer-motion';
import classes from './AboutItem.module.scss'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
// import Image from '../../UI/Image/Image';


const AboutItem = (props) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    const dropInRight = {
        hidden: {
            x: "50%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 10,
                type: "spring",
                damping: 16,
                stiffness: 150,
            },
        },
    };

    const dropInleft = {
        hidden: {
            x: "-50%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 10,
                type: "spring",
                damping: 16,
                stiffness: 150,
            },
        },
    };


    if (props.reversed) {
        return (
            <motion.div
                variants={dropInRight}
                // initial='hidden
                animate={inView ? 'visible' : 'hidden'}
                className={classes['about__container']}>
                <div ref={ref} className={classes["about__feature"]}>
                    <div className={classes["about__icon"]}>
                        <svg>
                            <use xlinkHref="images/icons.svg#icon-home"></use>
                        </svg>
                    </div>
                    <h5 className={classes["about__header"]}>{props.title}</h5>
                    <p>
                        {props.description}
                    </p>
                </div>
                <div className={classes["about__img--container"]}>
                    {inView && (
                        <Image
                            src={props.img}
                            alt={props.alt}
                            layout='fill'
                            placeholder='blur'
                        />)}
                </div>
            </motion.div>
        )
    }

    return (
        <motion.div
            variants={dropInleft}
            // initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className={classes['about__container']}
            ref={ref}>
            <div className={classes["about__img--container"]}>
                {inView && (
                    <Image
                        src={props.img}
                        alt={props.alt}
                        layout='fill'
                        placeholder='blur'
                        style={{ objectFit: 'cover' }}
                    />)}
            </div>
            <div className={classes["about__feature"]}>
                <div className={classes["about__icon"]}>
                    <svg>
                        <use xlinkHref="images/icons.svg#icon-home"></use>
                    </svg>
                </div>
                <h5 className={classes["about__header"]}>{props.title}</h5>
                <p>
                    {props.description}
                </p>
            </div>
        </motion.div>
    )
}

export default AboutItem