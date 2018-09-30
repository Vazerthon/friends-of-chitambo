import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';

import WorkIcon from '@material-ui/icons/Work';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/AccessibilityNew';
import AboutIcon from '@material-ui/icons/Help';
import ContactIcon from '@material-ui/icons/ContactMail';

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
        <List component="nav">
          <MenuItem icon={<HomeIcon />} text="home" to="/" />
          <MenuItem icon={<AboutIcon />} text="about" to="/about" />
          <MenuItem icon={<WorkIcon />} text="projects" to="/projects" />
          <MenuItem icon={<PeopleIcon />} text="people" to="/people" />
          <MenuItem icon={<ContactIcon />} text="contact" to="/contact" />
        </List>
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
