import React from 'react'
import { useInView } from 'react-intersection-observer';
import classes from './Header.module.scss';

import Hero from './Hero/Hero'
import Navigation from './Navigation/Navigation'

const Header = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0
    });

    return (
        <header ref={ref} className={classes.header}>
            <Navigation inView={inView} />
            <Hero />
        </header>
    )
}

export default React.memo(Header)