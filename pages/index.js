import React, { useContext } from 'react'
import ModalContext from '../contexts/modal-context'
import { AnimatePresence } from 'framer-motion'

import About from '../components/About/About'
import ContactContainer from '../components/Contact/ContactContainer'
import Gallery from '../components/Gallery/Gallery'
import Layout from '../components/Layout/Layout'
import SectionWrapper from '../components/Layout/SectionWrapper/SectionWrapper'
import Operations from '../components/Operations/Operations'
import Button from '../components/UI/Button/Button'
import Modal from '../components/UI/Modal/Modal'
import Products from '../components/Products/Products';
import Notification from '../components/UI/Notification/Notification';
import httpContext from '../contexts/http-context'
import { ADDRESS, EMAIL, PHONE } from '../constants/contact-data'

const Landing = () => {
    const modalCtx = useContext(ModalContext);
    const { status, setStatus } = useContext(httpContext);
    const openModal = () => {
        modalCtx.showModal()
    }

    const clearStatus = () => {
        setStatus(null)
    }

    const notificationHelper = status === 'sended' || status === 'error';

    return (
        <Layout>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}

                onExitComplete={() => null}
            >
                {modalCtx.isShow && <Modal />}
            </AnimatePresence>

            <AnimatePresence initial={false}>
                {notificationHelper && <Notification status={status} close={clearStatus} />}
            </AnimatePresence>

            <SectionWrapper
                id={'section--info'}
                phoneNumber={PHONE}
                email={EMAIL}
                address={ADDRESS}
            />
            <SectionWrapper
                id={'section--1'}
                title={'O nas'}
                description={'Kluczowe informacje o naszej firmie.'}
                intersect={true}>
                <About id={'section--1'} />
            </SectionWrapper>
            <SectionWrapper
                id={'section--2'}
                title={'Galeria'}
                description={'Przyjrzyj si?? naszym us??ugom.'}
                intersect={true}>
                <Gallery />
            </SectionWrapper>
            <SectionWrapper
                id={'section--3'}
                title={'Proces wykonania us??ugi'}
                description={'Wszystkie us??ugi kt??re wykonujemy.'}
                intersect={true}>
                <Operations />
            </SectionWrapper>
            <SectionWrapper
                id={'section--4'}
                title={'Nasze domy modu??owe'}
                description={'Zapoznaj si?? z nasz?? ofert??'}>
                <Products />
            </SectionWrapper>
            <SectionWrapper
                id={'section--5'}
                sectionClass={'section--sign-up'}
                title={'Kontakt'}
                description={'Skontaktuj si?? z nami'}
                intersect={true}>
                <ContactContainer phone={PHONE} email={EMAIL} address={ADDRESS} />
            </SectionWrapper>
            <SectionWrapper
                id={'section--6'}
                sectionClass={'section--sign-up'}
                description={'Je??li chcesz si?? dowiedziec czego?? wi??cej o nas, b??d?? o naszej ofercie'}
            >
                <Button onClick={openModal}>Pobierz najnowszy katalog</Button>
            </SectionWrapper>
        </Layout>
    )
}

export default Landing