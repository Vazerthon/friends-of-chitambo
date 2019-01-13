import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Image from 'gatsby-image';

const Img = styled(Image)`
  margin: ${({ theme }) => theme.spacing.units(0.5)};
  margin-left: 0;
`;

export default function Gallery({ images }) {
  return (
    <Masonry>
      {images.map(({ data, alt, id }) => (
          <Img
            key={id}
            alt={alt}
            fixed={data}
          />
      ))}
    </Masonry>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      alt: PropTypes.string,
      data: PropTypes.object,
    }),
  ).isRequired,
};
