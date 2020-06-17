import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

import PrimaryNav from './nav/primary';
import MobileNav from './nav/mobile';

import Pages from '../queries/pages';

const TitleBar = styled(Toolbar)`
  display: flex;
  justify-content: center;
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

const toAbsoluteTo = ({ to, ...rest }) => (to.startsWith('/') ? { to, ...rest } : { to: `/${to}`, ...rest });

function Header({ title }) {
  return (
    <AppBar>
      <TitleBar disableGutters>
        <Pages
          renderChildren={pages => {
            const items = [...pages, ...nonContentManagedPages]
              .map(toNavItem)
              .map(toAbsoluteTo);
            return (
              <>
                <DesktopNav items={items} />
                <MobileNav items={items} title={title} />
              </>
            );
          }}
        />
      </TitleBar>
    </AppBar>
  );
}

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: '',
};
