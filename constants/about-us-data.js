import House from '../../public/images/house.webp';
import Luxury from '../../public/images/luxury.webp';
import Truck from '/../public/images/truck.webp';

export const ABOUT_ITEM_DATA = [
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
                    tygodni.`,
        reversed: false,
    },

]