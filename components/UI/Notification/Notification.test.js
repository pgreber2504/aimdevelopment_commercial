import { render, screen } from '@testing-library/react'
import Notification from './Notification';

describe('<Describe />', () => {
    it('render all content', () => {
        render(<Notification status={'sended'} close={() => true} />)
        expect(screen.getByText('Wiadomośc została wysłana.')).toBeInTheDocument;
    })
})