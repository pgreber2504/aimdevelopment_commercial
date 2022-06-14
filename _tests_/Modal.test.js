import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from '../components/UI/Modal/Modal'
import ModalContext, { ModalContextProvider } from '../contexts/modal-context';
import Navigation from '../components/Layout/Header/Navigation/Navigation';
import { Simulate } from 'react-dom/test-utils';

describe('<Modal />', () => {
    const modalProps = {
        onClick: jest.fn,
    }
    it('should renders content', () => {
        const { getByTestId } = render(
            <Modal {...modalProps} />
        );

        expect(getByTestId('modalContainer')).toBeInTheDocument();
        expect(getByTestId('overlay')).toBeInTheDocument();

    })
})