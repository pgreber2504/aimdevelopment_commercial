import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import CloseButton from '../components/UI/CloseButton/CloseButton';

describe('<CloseButton />', () => {
    const props = {
        close: jest.fn(),

    }

    it('should render all components', () => {

        const { getByRole, getAllByTestId } = render(<CloseButton {...props} />)

        const paths = getAllByTestId('path')
        const button = getByRole('button');

        expect(button).toBeInTheDocument()
        expect(paths[0]).toBeInTheDocument();
        expect(paths[1]).toBeInTheDocument();
    });

    it('should have working click handler', () => {
        const { getByRole } = render(<CloseButton {...props} />)

        const button = getByRole('button');

        fireEvent.click(button);
        expect(props.close).toHaveBeenCalled();

    });

});