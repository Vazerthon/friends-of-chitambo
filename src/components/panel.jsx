import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { SubHeading } from './typography';

const Container = styled(Paper)`
  padding: ${({ theme }) => theme.spacing.units(2)};

  ${({ theme }) => theme.media.small`
    padding: ${theme.spacing.units(1)};
  `};

  overflow: hidden;
`;

export default function Panel({ title, children, className }) {
  return (
    <Container className={className}>
      {title && <SubHeading>{title}</SubHeading>}
      {children}
    </Container>
  );
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
};

Panel.defaultProps = {
  title: undefined,
  className: undefined,
};
