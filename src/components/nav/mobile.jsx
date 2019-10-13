import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton';
import { MdMenu, MdClose } from 'react-icons/md';

import { items as itemsType } from './shared';
import DrawerNav from './drawer';

import Logo from '../logo';

const MobileContainer = styled.div`
  display: none;
  width: 100%;
  margin: ${({ theme }) => `0 ${theme.spacing.units(1)}`};
  justify-content: space-between;
  ${({ theme }) => theme.media.small`display: flex;`};
`;

export default function MobileNav({ items }) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <Fragment>
      <MobileContainer>
        <Logo text="off" size="tiny" />
        <IconButton onClick={toggleMenu}>
          { showMenu
            ? <MdClose />
            : <MdMenu />
          }
        </IconButton>
      </MobileContainer>
      <DrawerNav items={items} open={showMenu} />
    </Fragment>
  );
}

MobileNav.propTypes = {
  items: itemsType.isRequired,
};
