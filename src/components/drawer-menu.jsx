import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';

import MenuItem from './menu-item';

const Drawer = styled(({ ...props }) => (
  <SwipeableDrawer {...props} classes={{ paper: 'paper' }} />
))`
  & .paper {
    width: ${({ theme }) => theme.spacing.units(50)};
  
    ${({ theme }) => theme.media.small`
      width: 90%;
    `}
  }
`;

const lightestFirst = (x, y) => (x.weight < y.weight ? -1 : 1);

function DrawerMenu({
  open, onClose, onOpen, items,
}) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <List component="nav">
          {
            items
              .sort(lightestFirst)
              .map(i => (
                <MenuItem key={i.to} text={i.text} to={i.to} />
              ))
          }
        </List>
      </div>
    </Drawer>
  );
}

DrawerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
  })).isRequired,
};

export default DrawerMenu;
