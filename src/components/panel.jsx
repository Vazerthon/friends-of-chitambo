import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Heading } from './typography';

const Container = styled(Paper)`
  padding: ${({ theme }) => theme.spacing.units(1)};
`;

export default function Panel({ title, children, className }) {
  return (
    <Container className={className}>
      <Heading>{title}</Heading>
      {children}
    </Container>
  );
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Panel.defaultProps = {
  className: undefined,
};
