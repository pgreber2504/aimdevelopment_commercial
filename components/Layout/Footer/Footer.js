import React from 'react'
import classes from './Footer.module.scss'
import FooterLogo from './FooterLogo/FooterLogo'
import FooterNav from './FooterNav/FooterNav'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <FooterNav />
            <FooterLogo />
        </footer>
    )
}

export default React.memo(Footer)