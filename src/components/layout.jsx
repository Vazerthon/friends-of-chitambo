import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from './logo';

import Sidebar from './sidebar';
import Header from './header';
import Footer from './footer';

import Root from './root';

const MaxSizeContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${({ theme }) => theme.spacing.units(240)};
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  padding: ${({ theme }) => theme.spacing.units(2)};
  padding-bottom: 0;
  padding-top: ${({ theme }) => theme.spacing.units(10)};
  margin: 0 ${({ theme }) => theme.spacing.units(20)};

  ${({ theme }) => theme.media.medium`margin: 0 ${theme.spacing.units(10)};`}
  ${({ theme }) => theme.media.small`margin: 0;`};
`;

const Content = styled.main`
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.media.medium`flex-direction: column;`}
  ${({ theme }) => theme.media.small`flex-direction: column;`};
`;

const Main = styled.article`
  width: 100%;
  flex: 3 0 0%;
  margin-right: ${({ theme }) => theme.spacing.units(10)};

  ${({ theme }) => theme.media.medium`margin-right: 0;`}
  ${({ theme }) => theme.media.small`margin-right: 0;`};
`;

function Layout({ children, title }) {
  return (
    <Root>
      <Header title={title} />
      <MaxSizeContainer>
        <Container>
          <Logo text="below" size="large" />
          <Content>
            <Main>{children}</Main>
            <Sidebar />
          </Content>
          <Footer />
        </Container>
      </MaxSizeContainer>
    </Root>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: '',
};

export default Layout;
