import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import Images from '../queries/images';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/*
  Override Slick styling to give a maximum height
  without changing aspect ratios of contained images
*/
const Slide = styled(Slider)`
  & {
    .slick-track {
      height: 50vh;

      .slick-slide {
        display: flex !important;
        justify-content: center;

        div {
          display: flex !important;
          justify-content: center;

          img {
            width: auto !important;
            height: 100%;
          }
        }
      }
    }
  }
`;

const sliderSettings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel({ images }) {
  return (
    <Slide {...sliderSettings}>
      {images.map(({ src, alt, id }) => (
        <img key={id} src={src} alt={alt} />
      ))}
    </Slide>
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
