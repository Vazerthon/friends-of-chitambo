import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from "gatsby-image"
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

const ImageContainer = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  justify-content: center;
  background: ${({ theme }) => theme.colour.neutral.background};
  height: 50vh;
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
      {images.map(({ fluid, alt, id }) => (
        <Slide key={id}>
          <ImageContainer>
            <Img fluid={fluid} alt={alt} />
          </ImageContainer>
        </Slide>
      ))}
    </ResponsiveCarousel>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      fluid: PropTypes.object,
      alt: PropTypes.string,
    }),
  ).isRequired,
};
