import React from 'react'
import classes from './FooterNav.module.scss';
import Link from 'next/link'

import { FOOTER_NAV_LINKS } from '../../../../constants/footer-nav-data';

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

export default React.memo(FooterNav)