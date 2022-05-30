import React, { Fragment } from 'react';
import classes from './FooterLogo.module.scss'

import Link from 'next/link';
import Image from 'next/image';


const FooterLogo = () => {
    return (
        <Fragment>
            <div className={classes["footer__logo"]}>
                {/* <Image layout='fill' src={''} /> */}
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