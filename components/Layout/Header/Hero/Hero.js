import Link from 'next/link'
import React from 'react'
import classes from './Hero.module.scss'



const Hero = () => {
    return (
        <div className={classes.hero}>
            <div className={classes["hero__info"]}>
                <h1>
                    Domki<span className={classes['animation--one']}>modułowe</span>oraz<br /><span className={classes['animation--two']}> mobilne </span>
                </h1>
                <h4>Personalizacja każdego projektu domu modułowego</h4>
                <Link href="#">
                    Dowiedz się więcej
                </Link>
            </div>
        </div>
    )
}

export default Hero