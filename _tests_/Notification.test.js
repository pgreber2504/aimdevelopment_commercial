import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';
import Notification from '../components/UI/Notification/Notification';

describe('<Notification />', () => {
    it('should render all content', () => {
        const { getByText } = render(<Notification status={'sended'} close={() => true} />)
        const message = getByText('Wiadomośc została wysłana.')
        expect(message).toBeInTheDocument();
    })

    it('should not render if message was not send', () => {
        const props = {
            status: '',
            close: () => true
        }

        const { queryByText } = render(<Notification {...props} />)
        const message = queryByText('Wiadomośc została wysłana.')
        expect(message).not.toBeInTheDocument();
    })
    it('should render error message', () => {
        const props = {
            status: 'error',
            close: () => true
        }
        const { queryByText } = render(<Notification {...props} />)
        const message = queryByText('Coś poszło nie tak. Spróbuj ponownie.');
        expect(message).toBeInTheDocument();

    });

    it('should close component after clicking button', () => {
        const props = {
            status: 'error',
            close: () => true
        };

        const { queryByRole, queryByText } = render(<Notification {...props} />)

        const text = queryByText('Wiadomośc została wysłana.')
        const button = queryByRole('button')
        fireEvent.click(button);
        expect(text).not.toBeInTheDocument();
    });
})