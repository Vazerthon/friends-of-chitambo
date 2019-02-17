import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Image from 'gatsby-image';

const Img = styled(Image)`
  margin: ${({ theme }) => theme.spacing.units(1)};
  margin-left: 0;
`;

const MasonryGrid = styled(Masonry)`
  ${({ theme }) => theme.media.small`display: none;`};
  ${({ theme }) => theme.media.medium`display: none;`};
`;

const FlexColumnGallery = styled.div`
  display: none;
  ${({ theme }) => theme.media.small`display: flex;`};
  ${({ theme }) => theme.media.medium`display: flex;`};

  flex-direction: column;
  align-items: center;
`;

export default function Gallery({ images, renderImageWrapper }) {
  const wrappedImages = images
    .map(({ fixed, alt }) => (
      <Img
        fixed={fixed}
        alt={alt}
      />
    ))
    .map((img, i) => renderImageWrapper(img, i, images));

  return (
    <Fragment>
      <MasonryGrid>
        { wrappedImages }
      </MasonryGrid>
      <FlexColumnGallery>
        { wrappedImages }
      </FlexColumnGallery>
    </Fragment>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      alt: PropTypes.string,
      fixed: PropTypes.object,
    }),
  ).isRequired,
  renderImageWrapper: PropTypes.func,
};

Gallery.defaultProps = {
  renderImageWrapper: (img, i, images) => <Fragment key={images[i].id}>{img}</Fragment>,
};
