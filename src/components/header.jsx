import React, { Fragment } from 'react';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { MdMenu } from 'react-icons/md';

import Logo from './logo';
import PrimaryNav from './primary-nav';

import Pages from '../queries/pages';

const MobileContainer = styled.div`
  display: none;
  width: 100%;
  margin: ${({ theme }) => `0 ${theme.spacing.units(1)}`};
  justify-content: space-between;
  ${({ theme }) => theme.media.small`display: flex;`};
`;

const TitleBar = styled(Toolbar)`
  display: flex;
  justify-content: center;
`;

const MobileLogo = styled(Logo)`
  display: none;
  ${({ theme }) => theme.media.small`display: flex;`};
`;

const DesktopNav = styled(PrimaryNav)`
  ${({ theme }) => theme.media.small`display: none;`};
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

const toNavItem = p => ({
  text: p.title,
  to: p.slug,
  weight: p.menuOrder,
});

function Header() {
  return (
    <AppBar>
      <TitleBar disableGutters>
        <Pages
          renderChildren={pages => (
            <Fragment>
              <DesktopNav items={[...pages, ...nonContentManagedPages].map(toNavItem)} />
              <MobileContainer>
                <MobileLogo text="off" size="tiny" />
                <IconButton>
                  <MdMenu />
                </IconButton>
              </MobileContainer>
            </Fragment>
          )}
        />
      </TitleBar>
    </AppBar>
  );
}

export default Header;
