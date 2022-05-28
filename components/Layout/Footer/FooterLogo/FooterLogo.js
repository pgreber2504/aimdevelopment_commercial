import React, { Fragment } from 'react';
import classes from './FooterLogo.module.scss'

import Link from 'next/link';


const FooterLogo = () => {
    return (
        <Fragment>
            <div>
                <img className={classes["footer__logo"]} />
            </div>
            <p className={classes["footer__copyright"]}>
                &copy; Copyright by <Link
                    href="https://github.com/pgreber2504">
                    Przemysław Greber</Link>.
            </p>
        </Fragment>
    )
}

export default React.memo(FooterLogo)