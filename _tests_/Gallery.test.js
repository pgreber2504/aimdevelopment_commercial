import GalleryMobile from '../components/Gallery/GalleryMobile/GalleryMobile';
import GalleryDesktop from '../components/Gallery/GalleryDesktop/GalleryDesktop';
import GalleryItem from '../components/Gallery/GalleryItem/GalleryItem';
import Dots from '../components/Gallery/Dots/Dots';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';

import Image from '../public/images/gallery/1.webp'
import Image2 from '../public/images/gallery/2.webp';


describe('<GalleryItem />', () => {
    const props = {
        src: Image,
        alt: 'image',
    }
    it('should render all content', () => {
        const { getByTestId } = render(<GalleryItem {...props} />)

        const image = getByTestId('GalleryItem.img')
        const div = getByTestId('GalleryItem.div');

        expect(image).toBeInTheDocument();
        expect(div).toBeInTheDocument();
    });


})

describe('<GalleryMobile />', () => {
    const props = {
        srcPlaceholder: Image,
        src: Image,
        alt: 'image',
        altPlaceholder: 'image',
        data: [0, 1],
        rBtnOnClick: jest.fn(() => 1),
        lBtnOnClick: jest.fn(() => -1),
        page: 0,
    }
    it('fullscreen should not be visible initially ', () => {
        const { queryByTestId } = render(<GalleryMobile {...props} />)

        const fullscreenContainer = queryByTestId('fullscreen-container');
        expect(fullscreenContainer).not.toBeInTheDocument()
    });

    it("should open fullscreen on click", () => {
        const { getByTestId, queryByTestId } = render(<GalleryMobile {...props} />)

        const clickableContainer = getByTestId('clickable-container');
        fireEvent.click(clickableContainer);
        const fullscreenContainer = queryByTestId('fullscreen-container');
        expect(fullscreenContainer).toBeInTheDocument()
    });
});

describe('<GalleryDesktop />', () => {
    const props = {
        srcPlaceholder: Image,
        src: Image,
        alt: 'image',
        altPlaceholder: 'image',
        data: [0, 1],
        rBtnOnClick: jest.fn(() => 1),
        lBtnOnClick: jest.fn(() => -1),
        page: 0,
    }
    it('should be rendered', () => {
        const { getByTestId } = render(<GalleryDesktop {...props} />);
        const galleryDesktopContainer = getByTestId('gallery-desktop-container')
        expect(galleryDesktopContainer).toBeInTheDocument()
    });
});

describe('<Dots />', () => {
    const props = {
        data: [0],
        imageIndex: 0,
    }
    it('should be rendered', () => {
        const { getByTestId } = render(<Dots {...props} />);

        const dotsContainer = getByTestId('dots-container');

        expect(dotsContainer).toBeInTheDocument()
    });
    it('dot should be active on current slide ', () => {
        const { getByTestId } = render(<Dots {...props} />);
        const dot = getByTestId('dot');
        expect(dot).toHaveClass('active');
    });
});