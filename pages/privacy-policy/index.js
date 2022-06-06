import React, { Fragment } from 'react'
import SectionWrapper from '../../components/Layout/SectionWrapper/SectionWrapper'
import Privacy from '../../components/Privacy/Privacy'
const index = () => {
    return (
        <Fragment>
            <SectionWrapper id={'privacy-policy'} title='Polityka prywatności' description='Klauzula informacyjna dotycząca danych osobowych'>
                <Privacy />
            </SectionWrapper>
        </Fragment>
    )
}

export default index