import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const Img = styled(GatsbyImage)`
  margin-bottom: ${({ theme }) => theme.spacing.units(4)};
`;

export default function CoverImage({ image: { alt, image } }) {
  return (
    <Img alt={alt || ''} image={image} />
  );
}

CoverImage.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    image: PropTypes.object,
  }).isRequired,
};
