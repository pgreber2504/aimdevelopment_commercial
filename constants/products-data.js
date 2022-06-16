import RectM from '../public/images/offer/rectangle_m/1.webp';
import RectM2 from '../public/images/offer/rectangle_m/2.webp';

import RectL from '../public/images/offer/rectangle_l/1.webp';
import RectL2 from '../public/images/offer/rectangle_l/2.webp';

import RectXL from '../public/images/offer/rectangle_xl/1.webp';
import RectXL2 from '../public/images/offer/rectangle_xl/2.webp';

import L1 from '../public/images/offer/L/1.webp';
import L2 from '../public/images/offer/L/2.webp';

import Cust1 from '../public/images/offer/custom/1.webp';

import ZSmall from '../public/images/offer/z_small/1.webp';
import ZSmall2 from '../public/images/offer/z_small/2.webp';

import Z1 from '../public/images/offer/Z/1.webp';
import Z2 from '../public/images/offer/Z/2.webp';

import U1 from '../public/images/offer/u/1.webp';
import U2 from '../public/images/offer/u/2.webp';


export const PRODUCTS_DATA = [
    {
        id: 'pr1',
        yardage: '21m2',
        name: 'Dom prostokąt M',
        description: 'Dom modułowy o powierzchni zabudowy 21m2. Mimo niewielkich rozmiarów mieści, salon z aneksem kuchennym oraz łazienkę. Jest to idealne rozwiązanie dla zapracowanych, zmęczonych miejskim zgiełkiem osób chcących wypocząć w zaciszu swojego ogródka działkowego. Moduł o wymiarach obrysowych 3x7m.',
        minPrice: 65000,
        photos: [RectM, RectM2]
    },
    {
        id: 'pr2',
        yardage: '28m2',
        name: 'Dom prostokąt L + Sypialnia',
        description: 'Dom modułowy o powierzchni zabudowy 28m2. Mieści w sobie sypialnie, salon z aneksem kuchennym oraz łazienkę. Jest to idealne rozwiązanie dla zapracowanych, zmęczonych miejskim zgiełkiem osób chcących wypocząć w zaciszu swojego ogródka działkowego. Moduł o wymiarach obrysowych 4x8m.',
        minPrice: 70000,
        photos: [RectL, RectL2]
    },
    {
        id: 'pr3',
        yardage: '35m2',
        name: 'Dom prostokąt XL + 2x Sypialnia',
        description: 'Dom modułowy o powierzchni zabudowy 35m2. Mimo niewielkich rozmiarów mieści w sobie dwie sypialnie, salon z aneksem kuchennym oraz łazienkę. Jest to idealne rozwiązanie dla zapracowanych, zmęczonych miejskim zgiełkiem osób chcących wypocząć w zaciszu swojego ogródka działkowego. Moduł o wymiarach obrysowych 3,5x10m',
        minPrice: 80000,
        photos: [RectXL, RectXL2]
    },
    {
        id: 'pr4',
        yardage: '35m2',
        name: 'Dom L-ka',
        description: 'Domek modułowy o powierzchni zabudowy 34,69m2. Mimo niewielkich rozmiarów mieści w sobie dwie sypialnie, salon z aneksem kuchennym oraz łazienkę. Jest to idealne rozwiązanie dla zapracowanych, zmęczonych miejskim zgiełkiem osób chcących wypocząć w zaciszu swojego ogrodu. Nieduże wymiary oraz kształt litery „L” pozwalają na postawienie domku na praktycznie każdej działce. Moduł dostępny w wersji lewej oraz prawej (w odbiciu lustrzanym). ',
        minPrice: 85000,
        photos: [L1, L2]
    },
    {
        id: 'pr5',
        yardage: '41m2',
        name: 'Dom "Z" Mniejsza wersja',
        description: 'Moduł w kształcie litery „Z” to połączenie czterech modułów umożliwiające uzyskanie dowolnego metrażu oraz zagospodarowania budynku jako jednorodzinny lub wielorodzinny obiekt. Poprzez przesunięcia modułów mamy możliwość dopasowania go do działki oraz potrzeb nawet najbardziej wymagających osób.',
        minPrice: 140000,
        photos: [ZSmall, ZSmall2]
    },
    {
        id: 'pr6',
        yardage: '48m2',
        name: 'Dom prostokąt XXL 2x Moduły',
        description: 'Dom modułowy o powierzchni zabudowy 48m2. Mimo niewielkich rozmiarów mieści w sobie dwie sypialnie, salon z aneksem kuchennym oraz łazienkę. Jest to idealne rozwiązanie dla zapracowanych, zmęczonych miejskim zgiełkiem osób chcących wypocząć w zaciszu swojego ogródka działkowego. Dom składa się z dwóch modułów o wymiarach 4x6m',
        minPrice: 120000,
        photos: [U1, U2]
    },
    {
        id: 'pr7',
        yardage: '70m2',
        name: 'Dom "Z"',
        description: 'Moduł w kształcie litery „Z” to połączenie czterech modułów umożliwiające uzyskanie dowolnego metrażu oraz zagospodarowania budynku jako jednorodzinny lub wielorodzinny obiekt. Poprzez przesunięcia modułów mamy możliwość dopasowania go do działki oraz potrzeb nawet najbardziej wymagających osób.',
        minPrice: 140000,
        photos: [Z1, Z2]
    },
    {
        id: 'pr8',
        yardage: '+70m2',
        name: 'Dom według własnego projektu:',
        description: 'Jesteśmy w stanie zbudowac dla Ciebie niestandadowy dom. Wybierasz wyposażenie, rozkład i rodzaj, a my zajmujemy się resztą ',
        minPrice: 100000,
        photos: [Cust1],

    },

]