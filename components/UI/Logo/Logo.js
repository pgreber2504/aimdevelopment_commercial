import React from 'react'
import classes from './Logo.module.scss'
import Image from 'next/image'
import LogoSvg from '../../../public/images/logo.svg'


const Logo = () => {
    return (
        <div className={classes.logo}>
            <Image src={LogoSvg} alt='AIM Development Domy Modułowe Mobilne' layout='fill' />
        </div>
    )
}

export default Logo