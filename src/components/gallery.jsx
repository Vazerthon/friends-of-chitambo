import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Image from 'gatsby-image';

const Img = styled(Image)`
  margin: ${({ theme }) => theme.spacing.units(1)};
  margin-left: 0;
`;

export default function Gallery({ images, renderImageWrapper }) {
  return (
    <Masonry>
      {
          images
            .map(({ data, alt }) => <Img alt={alt} fixed={data} />)
            .map((img, i) => renderImageWrapper(img, i, images))
      }
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
  renderImageWrapper: PropTypes.func,
};

Gallery.defaultProps = {
  renderImageWrapper: (img, i, images) => <Fragment key={images[i].id}>{img}</Fragment>,
};
