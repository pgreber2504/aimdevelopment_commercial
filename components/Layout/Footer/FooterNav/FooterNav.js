import React from 'react'
import classes from './FooterNav.module.scss';
import Link from 'next/link'


const FOOTER_NAV_LINKS = [
    { url: "#1", text: 'O nas' },
    { url: "#2", text: 'Regulamin' },
    { url: "#3", text: 'Polityka prywatności' },
    { url: "#4", text: 'Kontakt' },
]

const FooterNav = () => {
    const footerLinks = FOOTER_NAV_LINKS.map(link => {
        return (
            <li key={link.url}>
                <Link href={link.url}>{link.text}</Link>
            </li>
        )
    })

    return (
        <ul className={classes['footer__nav']}>
            {footerLinks}
        </ul>
    )
}

export default FooterNav