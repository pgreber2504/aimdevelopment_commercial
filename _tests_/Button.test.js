import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/UI/Button/Button';

describe('<Button />', () => {
    it('should render all components', () => {
        const props = {
            onClick: () => { },
            disabled: false,
            animated: false,
        }
        const { getByRole } = render(<Button {...props} />)

        const button = getByRole('button');

        expect(button).toBeInTheDocument()
    });

    it('should have working click handler', () => {
        const props = {
            onClick: jest.fn(),
            disabled: false,
            animated: false,
        }
        const { getByRole } = render(<Button {...props} />)

        const button = getByRole('button');

        fireEvent.click(button);
        expect(props.onClick).toHaveBeenCalled();

    });

});