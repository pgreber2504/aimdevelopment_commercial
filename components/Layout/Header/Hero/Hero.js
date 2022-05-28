import { motion } from 'framer-motion'
import React from 'react'
import Link from 'react-scroll/modules/components/Link'
import classes from './Hero.module.scss'




const Hero = () => {
    return (
        <div className={classes.hero}>
            <div className={classes["hero__info"]}>
                <h1>
                    Domki <motion.span>modułowe</motion.span> oraz <motion.span>mobilne</motion.span>
                </h1>
                <h4>Personalizacja każdego projektu domu modułowego</h4>
                <Link to={'section--1'}>
                    Dowiedz się więcej <span>&darr;</span>
                </Link>
            </div>
        </div>
    )
}

export default React.memo(Hero)