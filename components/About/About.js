import React from 'react'
import classes from './About.module.scss';
import AboutItem from './AboutItem/AboutItem';
import { ABOUT_ITEM_DATA } from '../../constants/about-us-data';

const About = () => {

    const aboutItems = ABOUT_ITEM_DATA.map(item => (
        <AboutItem
            key={item.dataImg}
            reversed={item.reversed}
            img={item.img}
            dataImg={item.dataImg}
            alt={item.alt}
            title={item.title}
            description={item.description} />
    ))

    return (
        <div className={classes.about}>
            {aboutItems}
        </div>
    )
}

export default About