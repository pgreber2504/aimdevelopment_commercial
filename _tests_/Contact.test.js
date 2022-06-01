import Address from '../components/Contact/Address/Address';
import ContactForm from '../components/Contact/ContactForm/ContactForm'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, fireEvent, screen } from '@testing-library/react';


const formHelper = ({ email, name, phone, message }) => {
    const props = {
        inView: true
    };
    const { getByPlaceholderText, getByRole } = render(<ContactForm {...props} />)

    const nameInput = getByPlaceholderText('Imię i Nazwisko*');
    const emailInput = getByPlaceholderText('Adres e-mail*');
    const phoneInput = getByPlaceholderText('Numer telefonu*');
    const messageInput = getByPlaceholderText('Napisz wiadomość*');
    const button = getByRole('button')


    if (email) {
        fireEvent.change(emailInput, { target: { value: email } });
    };
    if (name) {
        fireEvent.change(nameInput, { target: { value: name } });

    }
    if (phone) {
        fireEvent.change(phoneInput, { target: { value: phone } });

    }
    if (message) {
        fireEvent.change(messageInput, { target: { value: message } });

    }

    return {
        nameInput,
        emailInput,
        phoneInput,
        messageInput,
        button,
    }

}

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
        const { nameInput, emailInput, phoneInput, messageInput, button } = formHelper({})

        expect(nameInput).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()
        expect(phoneInput).toBeInTheDocument()
        expect(messageInput).toBeInTheDocument()
        expect(button).toBeInTheDocument()

    });

    it('should change value after input name', () => {
        const { nameInput } = formHelper({ name: 'Przemek' })

        expect(nameInput).toHaveValue('Przemek');
    });

    it('should change value after input email', () => {
        const { emailInput } = formHelper({ email: 'test@test.com' })

        expect(emailInput).toHaveValue('test@test.com');
    });

    it('should change value after input phone', () => {
        const { phoneInput } = formHelper({ phone: "500500500" })

        expect(phoneInput).toHaveValue(500500500);
    });

    it('should change value after input message', () => {
        const { messageInput } = formHelper({ message: 'Test test' })

        expect(messageInput).toHaveValue('Test test');
    });

    it('inputs should be initial empty', () => {
        const { nameInput, phoneInput, emailInput, messageInput } = formHelper({})

        expect(nameInput.value).toBe('')
        expect(phoneInput.value).toBe('')
        expect(emailInput.value).toBe('')
        expect(messageInput.value).toBe('');
    });

    it('should show error class when email is wrong', () => {
        const { emailInput } = formHelper({ email: 'Test123' })
        fireEvent.blur(emailInput)
        expect(emailInput).toHaveClass('invalid')
    });

    it('should show error class when phone is wrong', () => {
        const { phoneInput } = formHelper({ phone: 'Test' })
        fireEvent.blur(phoneInput)
        expect(phoneInput).toHaveClass('invalid')
    });

    it('should show error class when name is wrong', () => {
        const { nameInput } = formHelper({ name: '123' });
        fireEvent.blur(nameInput)
        expect(nameInput).toHaveClass('invalid')
    });

    it('button should be initial disabled', () => {
        const { button } = formHelper({})
        expect(button).toHaveAttribute('disabled')
    });

    it('button should be clickable when all form data is valid', () => {
        const { button } = formHelper({
            name: 'Przemek Greber',
            phone: '500500500',
            email: 'test@test.com',
            message: 'Lorem ipsum'
        })
        expect(button).not.toHaveAttribute('disabled')
    });


})