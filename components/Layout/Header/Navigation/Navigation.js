import React, { useContext } from 'react'
import classes from './Navigation.module.scss';
import Button from '../../../UI/Button/Button';
import ModalContext from '../../../../contexts/modal-context';
import { Link } from 'react-scroll'
import { motion } from 'framer-motion';
import SideDrawer from '../SideDrawer/SideDrawer';
const dropInTop = {
    hidden: {
        opacity: 1,
        position: 'static',
        y: 0
    },
    visible: {
        position: 'fixed',
        y: ["-50%", "0%"],
        opacity: [0, 1],
        transition: {
            duration: 0.3,
        },
    },
};



const NAV__LINKS__DATA = [
    { url: "section--1", text: 'O nas' },
    { url: "section--2", text: 'Galeria' },
    { url: "section--3", text: 'Proces wykonania' },
    { url: "section--4", text: 'Domy mobilne' },
    { url: "section--5", text: 'Kontakt' },
    { url: "section--6", text: 'Katalog' },

]


const Navigation = (props) => {
    const modalCtx = useContext(ModalContext);


    const navClasses = `${classes.nav}`

    const navLinks = NAV__LINKS__DATA.map(link => {
        return (
            <li key={link.url} className={classes['nav__item']}>
                <Link
                    key={link.url}
                    activeClass={classes.active}
                    className={classes['nav__link']}
                    to={link.url}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>
                    {link.text}
                </Link>
            </li >
        )
    })

    const openModal = () => {
        modalCtx.showModal()
    }

    return (
        <motion.nav
            className={navClasses}
            variants={dropInTop}
            initial={'hidden'}
            animate={!props.inView ? 'visible' : 'hidden'}>
            <img />
            <ul className={classes.nav__links}>
                {navLinks}
                <li className="nav__item">
                    <Button onClick={openModal} className="nav__link nav__link--btn btn--show-modal" href="#"> Zapytaj o wycenę </Button>
                </li>
            </ul>
            <SideDrawer />
        </motion.nav>
    )
}

export default React.memo(Navigation)