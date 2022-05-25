import React from 'react'
import classes from './Header.module.scss';

import Hero from './Hero/Hero'
import Navigation from './Navigation/Navigation'

const Header = () => {
    return (
        <header className={classes.header}>
            <Navigation />
            <Hero />
        </header>
    )
}

export default Header