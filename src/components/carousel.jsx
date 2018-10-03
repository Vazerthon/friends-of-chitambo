import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  overflow: hidden;
`;

const Slide = styled.div`
  ${({ prev }) =>
    prev && `
    & {
      transform: translateX(-100%);
    }`
  }
  
  ${({ curr }) =>
    curr && `
    & {
      transform: translateX(0);
      opacity: 1;
    }`
  }

  opacity: 0;
  display: flex;
  position: absolute;
  transform: translateX(100%);

  transition: all 0.5s ease-in-out;

  justify-content: center;
  align-items: center;
`;

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevIndex: 0,
      index: 1,
      nextIndex: 2,
    };

    this.imageInterval = setInterval(() => this.tickImage(), 5000);
  }

  tickImage() {
    const { images } = this.props;
    const { index } = this.state;
    const nextIndex = index + 1 === images.length ? 0 : index + 1;
    const nextNextIndex = nextIndex + 1 === images.length ? 0 : nextIndex + 1;

    const newState = {
      prevIndex: index,
      index: nextIndex,
      nextIndex: nextNextIndex,
    };

    this.setState(newState);
  }

  imageInterval = undefined;

  render() {
    const { images } = this.props;
    const { prevIndex, index, nextIndex } = this.state;

    return (
      <SlideContainer>
        {images.map((image, i) => (
          <Slide
            key={image.id}
            prev={i === prevIndex}
            curr={i === index}
          >
            <img
              src={image.src}
              alt={image.alt}
            />
          </Slide>
        ))}
      </SlideContainer>
    );
  }

  componentWillUnmount() {
    clearInterval(this.imageInterval);
  }
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

export default Carousel;
