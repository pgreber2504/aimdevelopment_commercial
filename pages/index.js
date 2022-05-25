import React, { useContext } from 'react'
import About from '../components/About/About'
import ContactContainer from '../components/Contact/ContactContainer'
import Gallery from '../components/Gallery/Gallery'
import Layout from '../components/Layout/Layout'
import SectionWrapper from '../components/Layout/SectionWrapper/SectionWrapper'
import Button from '../components/UI/Button/Button'
import Modal from '../components/UI/Modal/Modal'
import ModalContext from '../contexts/modal-context'

const Landing = () => {
    const modalCtx = useContext(ModalContext);

    const openModal = () => {
        modalCtx.showModal()
    }

    return (
        <Layout>
            {modalCtx.isShow && <Modal />}
            <SectionWrapper
                id={'section--info'}
                phoneNumber={'509-513-513'}
                email={'test@test.com'}
                address={'Łódź, Sportowa 2'}
            />
            <SectionWrapper
                id={'section--1'}
                title={'O nas'}
                description={'Kluczowe informacje o naszej firmie.'}>
                <About />
            </SectionWrapper>
            <SectionWrapper
                id={'section--2'}
                title={'Galeria'}
                description={'Przyjrzyj się naszym usługom.'}>
                <Gallery />
            </SectionWrapper>
            <SectionWrapper
                id={'section--5'}
                sectionClass={'section--sign-up'}
                title={'Kontakt'}
                description={'Skontaktuj się z nami'}>
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