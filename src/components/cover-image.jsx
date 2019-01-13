import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

const Img = styled(Image)`
  margin: ${({ theme }) => theme.spacing.units(0.5)};
  margin-left: 0;
`;

export default function CoverImage({ image: { alt, data } }) {
  return (
    <Img alt={alt} fluid={data} />
  );
}

CoverImage.propTypes = {
  image: PropTypes.shape({
      alt: PropTypes.string,
      data: PropTypes.object,
    }).isRequired,
};
