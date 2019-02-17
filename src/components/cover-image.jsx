import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

const Img = styled(Image)`
  margin: ${({ theme }) => theme.spacing.units(0.5)};
  margin-left: 0;
`;

export default function CoverImage({ image: { alt, fluid } }) {
  return (
    <Img alt={alt} fluid={fluid} />
  );
}

CoverImage.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    data: PropTypes.object,
  }).isRequired,
};
