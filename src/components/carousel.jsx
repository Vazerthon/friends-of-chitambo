import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

const SlideContainer = styled.div`
  display: flex;
`;

const Slide = styled.div`
  ${({ prev }) =>
    prev && `
    & {
      display: flex;
      transform: translateX(-100%);
    }`
  }
  
  ${({ next }) =>
    next && `
    & {
      display: flex;
      transform: translateX(100%);
    }`
  }

  ${({ curr }) =>
    curr && `
    & {
      display: flex;
    }`
  }

  transition: all 0.5s ease-in-out;

  display: none;
  min-width: 100%;  
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

    this.imageInterval = setInterval(() => this.tickImage(), 3000);
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
    
    console.log(newState);
  }

  imageInterval = undefined;

  render() {
    const { images } = this.props;
    const { prevIndex, index, nextIndex } = this.state;

    return (
      <div>
        <Paper>
          <SlideContainer>
            {images.map((image, i) => (
              <Slide
                key={image.id}
                prev={i === prevIndex}
                curr={i === index}
                next={i === nextIndex}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                />
              </Slide>
            ))}
          </SlideContainer>
        </Paper>
      </div>
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
