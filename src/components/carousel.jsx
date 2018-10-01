import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

const Image = styled.img`
  ${({ prev }) => prev && `& {
    transform: translateX(-200%);
  }`}

  ${({ next }) => next && `& {
    transform: translateX(200%);
  }`}

  transition: all 0.5s ease-in-out;
`;

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevIndex: 0,
      index: 1,
      nextIndex: 2,
    };

    this.imageInterval = setInterval(() => this.tickImage(), 2000);
  }

  tickImage() {
    const { images } = this.props;
    const { index } = this.state;
    const nextIndex = index + 1 === images.length ? 0 : index + 1;
    const nextNextIndex = nextIndex + 1 === images.length ? 0 : nextIndex + 1;

    this.setState({
      prevIndex: index,
      index: nextIndex,
      nextIndex: nextNextIndex,
    });
  }

  imageInterval = undefined;

  render() {
    const { images } = this.props;
    const { prevIndex, index, nextIndex } = this.state;

    return (
      <div>
        <Paper>
          { images.map((image, i) => (
            <Image
              prev={i === prevIndex}
              next={i === nextIndex}
              src={image.src}
              alt={image.alt}
            />
          )) }
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
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
};

export default Carousel;
