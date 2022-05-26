import React, { useState } from 'react'
import classes from './Operations.module.scss'
import OperationsContent from './OperationsContent/OperationsContent'
import OperationsTab from './OperationsTab/OperationsTab';

const OPERATIONS_DATA = [
    {
        id: '1.',
        operation: 'Omówienie Twoich potrzeb',
        iconId: 'icon-upload',
        title: 'Dopasujemy ofertę do Twoich potrzeb!',
        description: 'Każdy z nas ma swoje własne wyobrażenie idealnego domu. Wysłuchanie Twoich oczekiwań jest dla nas ważnym punktem wyjściowym dla dalszych działań, bo pragniemy dopasować ofertę do Twoich potrzeb. Na tym etapie dzielimy się z Tobą swoim doświadczeniem w branży i proponujemy najbardziej optymalne rozwiązania.'
    },
    {
        id: '2.',
        operation: 'Sporządzenie oferty',
        iconId: 'icon-check',
        title: 'Przygotowujemy specjalnie dopasowaną do Twoich potrzeb ofertę!',
        description: 'Następnie przedstawiamy poszczególne etapy realizacji zamówienia i podpisujemy umowę. Warianty dostępne w cenie to: 2 sypialnie plus część dzienną lub 1 sypialnię otwartą, kolorystykę podłóg, kolorystykę tapicerki na kanapie oraz zagłówku i elewacji. Nasza oferta obejmuje również budowę dwóch tarasów, które nie wchodzą w powierzchnię zabudowy.'
    },
    {
        id: '3.',
        operation: 'Przygotowanie działki',
        iconId: 'icon-user-x',
        title: 'Pomożemy w przygotowaniu terenu budowy!',
        description: 'Po wizycie lokalnej technika na miejscu budowy dostaniesz wytyczne dotyczące posadowienia domu. Z naszym wsparciem grunt zostanie kompleksowo dostosowany do wymagań budowlanych. Domy są zaprojektowane w ten sposób, aby bez problemu można było postawić je w wybranym przez klienta miejscu – niezależnie od tego, czy będą to przedmieścia miasta, czy działka w Bieszczadach.'
    },
    {
        id: '4.',
        operation: 'Montaż domu modułowego',
        iconId: 'icon-home',
        title: 'Budowa Twojego domu!',
        description: 'Finalnym krokiem jest przetransportowanie komponentów domu w dowolnie wybrane przez Ciebie miejsce na terenie kraju. Po rozmieszczeniu i montażu domu możemy również podłączyć media.'
    },
]

const Operations = () => {
    const [operationNumber, setOperationNumber] = useState(0);

    const operationTabs = OPERATIONS_DATA.map((el, index) => (
        <OperationsTab
            key={index}
            title={el.operation}
            titleNumber={el.id}
            className={index === operationNumber && 'active'}
            onClick={() => setOperationNumber(index)}
        />
    )
    )


    const operations = OPERATIONS_DATA.map((el, index) => (
        <OperationsContent
            key={el.id}
            title={el.title}
            description={el.description}
            className={operationNumber === index && 'active'}
            iconId={el.iconId}
        />

    ))

    return (
        <div className={classes["operations"]}>
            <div className={classes["operations__tab-container"]}>
                {operationTabs}
            </div>
            {operations}
        </div>
    )
}

export default Operations