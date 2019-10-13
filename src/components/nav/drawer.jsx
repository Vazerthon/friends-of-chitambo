import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';
import { lightestFirst, items as itemsType } from './shared';
import NavLink from './nav-link';

const NavDrawer = styled(({ ...props }) => (
  <Drawer {...props} classes={{ paper: 'paper' }} />
))`
  & .paper {
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.units(8)}
  }
`;

export default function DrawerNav({ items, open }) {
  return (
    <NavDrawer
      variant="persistent"
      anchor="right"
      open={open}
    >
      {
          items
            .sort(lightestFirst)
            .map(({ to, text }) => (
              <NavLink
                key={to}
                to={to}
                tabIndex="0"
                activeClassName="active"
              >
                {text}
              </NavLink>
            ))
        }
    </NavDrawer>
  );
}

DrawerNav.propTypes = {
  items: itemsType.isRequired,
  open: PropTypes.bool.isRequired,
};
