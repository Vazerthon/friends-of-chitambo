import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const Drawer = styled(SwipeableDrawer)`
  & .MuiDrawer-paper-45, & .jss45 {
    width: ${({ theme }) => theme.spacing.units(50)};
  }

  ${({ theme }) => theme.media.small`
    & .MuiDrawer-paper-45, & .jss45 {
      width: 90%;
    } 
  `}
`;

function DrawerMenu({
  open, onClose, onOpen,
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
        <div>
          <List>
            <ListItem>One</ListItem>
            <ListItem>Two</ListItem>
            <ListItem>Three</ListItem>
          </List>
        </div>
      </div>
    </Drawer>
  );
}

DrawerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default DrawerMenu;
