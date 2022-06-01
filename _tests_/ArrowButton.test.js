import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import ArrowButton from '../components/UI/ArrowButton/ArrowButton';

describe('<ArrowButton />', () => {
    const props = {
        lBtnOnClick: jest.fn(),
        rBtnOnClick: jest.fn(),
        direction: 'left',
        animated: false,
    }

    it('should render all components', () => {

        const { getByRole } = render(<ArrowButton {...props} />)

        const button = getByRole('button');

        expect(button).toBeInTheDocument()
    });

    it('should have working click handler', () => {
        const { getByRole } = render(<ArrowButton {...props} />)

        const button = getByRole('button');

        fireEvent.click(button);
        expect(props.lBtnOnClick).toHaveBeenCalled();

    });

});