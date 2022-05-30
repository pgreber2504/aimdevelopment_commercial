import React from 'react'
import classes from './About.module.scss';
import AboutItem from './AboutItem/AboutItem';

import House from '../../public/images/house.webp';
import Luxury from '../../public/images/luxury.webp';
import Truck from '../../public/images/truck.webp';

const ABOUT_ITEM_DATA = [
    {
        img: House,
        dataImg: '/house.webp',
        alt: "Przyszłościowe domy modułowe",
        title: 'Domy przyszłościowe',
        description: `Dom modułowy to miejsce, w którym można zatrzymać się, odpocząć i
                    odnaleźć spokój. Dedykowany jest osobom, które przez ciągłe życie w
                    biegu zapomniały o swoich dawnych pasjach i marzeniach. Pozwoli na
                    odkrycie siebie, na nowo`,
        reversed: false,
    },
    {
        img: Luxury,
        dataImg: "/luxury.jpeg",
        alt: "Luksusowe i tanie domy",
        title: 'Niski koszt inwestycji',
        description: `Domy modułowe to idealny przykład obiektów, które nie wymagają
                    zgody na pozwolenie. Tego typu domki mogą pełnić rolę, popularnych w
                    krajach skandynawskich summer house. Domki modułowe charakteryzuje przede
                    wszystkim niska cena budowy.`,
        reversed: true,
    },
    {
        img: Truck,
        dataImg: "/truck.jpeg",
        alt: "Szybka budowa domu",
        title: 'Najszybszy czas realizacji',
        description: `Dom modułowy to budowla, w której większość komponentów powstaje w
                    fabryce wykonawcy. Domów modułowych nie buduje się od zera z cegieł
                    czy dachówek, ale na budowę przyjeżdżają już gotowe elementy, 
                    a sam montaż zajmuje tylko około dwóch, trzech
                    miesięcy.`,
        reversed: false,
    },

]

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