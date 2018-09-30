import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Root from '../Root';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.units(2)};
  padding-bottom: 0;
  margin: 0 ${({ theme }) => theme.spacing.units(20)};

  ${({ theme }) => theme.media.medium`
    margin: 0 ${theme.spacing.units(10)};
  `}

  ${({ theme }) => theme.media.small`
    padding: ${theme.spacing.units(1)};
    padding-bottom: 0;
    margin: 0;
  `}
`;

export default function Layout({ children, title }) {
  return (
    <Root>
      <Helmet title={title} />
      <Container>
        {children}
      </Container>
    </Root>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
