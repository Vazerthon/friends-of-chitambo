import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import Images from '../queries/images';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    <Slider {...sliderSettings}>
      {images.map(({ src, alt, id }) => (
        <img
          key={id}
          src={src}
          alt={alt}
        />
      ))}
    </Slider>
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
      renderChildren={images => (
        <Carousel
          images={images[imageCollection]}
        />
      )}
    />
  );
}

ConnectedCarousel.propTypes = {
  imageCollection: PropTypes.string.isRequired,
};
