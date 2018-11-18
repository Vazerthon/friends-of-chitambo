import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

const Image = styled.img`
  width: auto !important;
  height: 100% !important;
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colour.neutral.background};
  height: 50vh;
  overflow: hidden;
`;

const carouselSettings = {
  showArrows: false,
  showThumbs: false,
  showStatus: false,
  infiniteLoop: true,
  emulateTouch: true,
  autoPlay: true,
  interval: 6000,
};

export default function Carousel({ images }) {
  return (
    <ResponsiveCarousel {...carouselSettings}>
      {images.map(({ src, alt, id }) => (
        <Slide key={id}>
          <Image src={src} alt={alt} />
        </Slide>
      ))}
    </ResponsiveCarousel>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
};

export function ConnectedCarousel({ imageCollection }) {
  return (
    <Images
      renderChildren={images => <Carousel images={images[imageCollection]} />}
    />
  );
}

ConnectedCarousel.propTypes = {
  imageCollection: PropTypes.string.isRequired,
};
