import React from 'react'
import classes from './Logo.module.scss'
import Image from 'next/image'
import LogoSvg from '../../../public/images/logo.svg'
import Link from 'next/link'


const Logo = () => {
    return (
        <div className={classes.logo}>
            <Link href={'/'}>
                <Image src={LogoSvg} alt='AIM Development Domy Modułowe Mobilne' layout='fill' />
            </Link>
        </div>
    )
}

export default Logo