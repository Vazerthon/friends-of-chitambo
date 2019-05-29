import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import { Paragraph, Heading } from './typography';

const Img = styled(Image)`
  margin: ${({ theme }) => theme.spacing.units(1)};
  margin-left: 0;
`;

export default function TeamMember({
  name, location, biography, picture,
}) {
  return (
    <Paper>
      <Heading>{name}</Heading>
      <Paragraph>{biography}</Paragraph>
      <Img fixed={picture.fixed} />
    </Paper>
  );
}

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.oneOf(['Zambia', 'Scotland']).isRequired,
  biography: PropTypes.string.isRequired,
  picture: PropTypes.shape({
    fixed: PropTypes.object,
  }).isRequired,
};
