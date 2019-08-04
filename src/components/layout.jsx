import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Logo from './logo';

import Sidebar from './sidebar';
import Footer from './footer';
import PrimaryNav from './primary-nav';

import Pages from '../queries/pages';

import Root from './root';

const MaxSizeContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: ${({ theme }) => theme.spacing.units(240)};
  margin: 0 auto;
`;

const Container = styled.div`
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

const TitleBar = styled(Toolbar)`
  display: flex;
  justify-content: center;
`;

// TODO: find a way to not maintain this manually
const nonContentManagedPages = [
  {
    title: 'Blog',
    slug: 'blog',
    menuOrder: 100,
  },
  {
    title: 'Events',
    slug: 'events',
    menuOrder: 110,
  },
  {
    title: 'Meet the Team',
    slug: 'team',
    menuOrder: 120,
  },
];

function Layout({ children, title }) {
  return (
    <Root>
      <Helmet title={title} />
      <AppBar>
        <TitleBar disableGutters>
          <Pages
            renderChildren={pages => (
              <PrimaryNav
                items={[...pages, ...nonContentManagedPages]
                  .map(p => ({ text: p.title, to: p.slug, weight: p.menuOrder }))}
              />
            )}
          />
        </TitleBar>
      </AppBar>
      <MaxSizeContainer>
        <Container>
          <Logo text="below" size="large" />
          <Content>
            <Main>{children}</Main>
            <Sidebar />
          </Content>
        </Container>
      </MaxSizeContainer>
      <Footer />
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
