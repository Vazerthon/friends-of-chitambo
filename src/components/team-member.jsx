import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import { Paragraph, Heading } from './typography';
import Img from './profile-image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.units(2)};
  margin-bottom: ${({ theme }) => theme.spacing.units(4)};
`;

const Bio = styled.div``;

export default function TeamMember({
  name, biography, picture,
}) {
  return (
    <Paper>
      <Container>
        <Heading>{name}</Heading>
        <Bio>
          <Img image={picture.gatsbyImageData} alt={name} />
          <Paragraph>{biography}</Paragraph>
        </Bio>
      </Container>
    </Paper>
  );
}

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  biography: PropTypes.string.isRequired,
  picture: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    gatsbyImageData: PropTypes.object,
  }).isRequired,
};
