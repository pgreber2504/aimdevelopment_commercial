import Address from '../components/Contact/Address/Address';
import ContactForm from '../components/Contact/ContactForm/ContactForm'
import '@testing-library/jest-dom'
// import '@testing-library/user-event';
import { render, fireEvent } from '@testing-library/react';

describe('<Address />', () => {
    it('should render all components', () => {
        const props = {
            phone: '500-500-500',
            address: 'Łódź Sportowa 2',
            email: 'test@test.com'
        }

        const { getByText } = render(<Address {...props} />)
        const telephoneLabel = getByText('Telefon:')
        const addressLabel = getByText('Telefon:')
        const emailLabel = getByText('Telefon:')
        const telephoneValue = getByText(props.phone)
        const emailValue = getByText(props.email)
        const addressValue = getByText(props.address)

        expect(telephoneLabel).toBeInTheDocument();
        expect(addressLabel).toBeInTheDocument();
        expect(emailLabel).toBeInTheDocument();
        expect(telephoneValue).toBeInTheDocument();
        expect(emailValue).toBeInTheDocument();
        expect(addressValue).toBeInTheDocument();
    });
});


describe('<ContactForm />', () => {
    it('should render all components', () => {
        const props = {
            inView: true
        };
        const { getByPlaceholderText, getByRole } = render(<ContactForm {...props} />)

        const nameInput = getByPlaceholderText('Imię i Nazwisko*');
        const emailInput = getByPlaceholderText('Adres e-mail*');
        const phoneInput = getByPlaceholderText('Numer telefonu*');
        const messageInput = getByPlaceholderText('Napisz wiadomość*');
        const button = getByRole('button')

        expect(nameInput).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()
        expect(phoneInput).toBeInTheDocument()
        expect(messageInput).toBeInTheDocument()
        expect(button).toBeInTheDocument()

    });

    it('should change value after input name', () => {
        const props = {
            inView: true
        };

        const { getByPlaceholderText } = render(<ContactForm {...props} />);

        const nameInput = getByPlaceholderText('Imię i Nazwisko*');

        fireEvent.change(nameInput, { target: { value: 'Przemek' } });

        expect(nameInput).toHaveValue('Przemek');
    });

    it('should change value after input email', () => {
        const props = {
            inView: true
        };

        const { getByPlaceholderText } = render(<ContactForm {...props} />);

        const emailInput = getByPlaceholderText('Adres e-mail*');

        fireEvent.change(emailInput, { target: { value: 'test@test.com' } });

        expect(emailInput).toHaveValue('test@test.com');
    });

    it('should change value after input phone', () => {
        const props = {
            inView: true
        };

        const { getByPlaceholderText } = render(<ContactForm {...props} />);

        const phoneInput = getByPlaceholderText('Numer telefonu*');

        fireEvent.change(phoneInput, { target: { value: 500500500 } });

        expect(phoneInput).toHaveValue(500500500);
    });

    it('should change value after input message', () => {
        const props = {
            inView: true
        };

        const { getByPlaceholderText } = render(<ContactForm {...props} />);

        const messageInput = getByPlaceholderText('Napisz wiadomość*');

        fireEvent.change(messageInput, { target: { value: 'Test test' } });

        expect(messageInput).toHaveValue('Test test');
    });


})