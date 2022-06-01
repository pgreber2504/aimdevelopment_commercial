import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import AboutItem from '../components/About/AboutItem/AboutItem';
import 'intersection-observer';

describe('<AboutItem />', () => {
    const props = {
        reversed: false,
        img: '/images/',
        alt: 'item',
        title: 'Title',
        description: 'Lorem Ipsum'
    }
    it('should render all items', () => {
        const { getByText, getByTestId } = render(<AboutItem {...props} />)

        const title = getByText(props.title);
        const description = getByText(props.description);
        const svg = getByTestId("custom-element");

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(svg).toBeInTheDocument();
    });
});