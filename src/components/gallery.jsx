import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Image from 'gatsby-image';

const Img = styled(Image)`
  margin: ${({ theme }) => theme.spacing.units(1)};
  margin-left: 0;
`;

export default function Gallery({ images, render }) {
  return (
    <Masonry>
      { render(images) }
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
  render: PropTypes.func,
};

Gallery.defaultProps = {
  render: imgs => imgs.map(({ data, alt, id }) => <Img key={id} alt={alt} fixed={data} />),
};
