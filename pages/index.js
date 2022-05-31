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
                phoneNumber={'509-513-513'}
                email={'test@test.com'}
                address={'Łódź, Sportowa 2'}
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
                description={'Przyjrzyj się naszym usługom.'}
                intersect={true}>
                <Gallery />
            </SectionWrapper>
            <SectionWrapper
                id={'section--3'}
                title={'Proces wykonania usługi'}
                description={'Wszystkie usługi które wykonujemy.'}
                intersect={true}>
                <Operations />
            </SectionWrapper>
            <SectionWrapper
                id={'section--4'}
                title={'Nasze domy modułowe'}
                description={'Zapoznaj się z naszą ofertą'}>
                <Products />
            </SectionWrapper>
            <SectionWrapper
                id={'section--5'}
                sectionClass={'section--sign-up'}
                title={'Kontakt'}
                description={'Skontaktuj się z nami'}
                intersect={true}>
                <ContactContainer phone={'509-513-513'} email={'test@test.com'} address={'Łódź, Sportowa 2'} />
            </SectionWrapper>
            <SectionWrapper
                id={'section--6'}
                sectionClass={'section--sign-up'}
                description={'Jeśli chcesz się dowiedziec czegoś więcej o nas, bądź o naszej ofercie'}
            >
                <Button onClick={openModal}>Pobierz najnowszy katalog</Button>
            </SectionWrapper>
        </Layout>
    )
}

export default Landing