import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'gatsby';

import Logo from './logo';

const ItemText = styled(ListItemText)`
  text-transform: capitalize;
`;

function MenuItem({ text, to }) {
  return (
    <Link
      to={to}
      tabIndex="0"
    >
      <ListItem
        button
        tabIndex="-1"
      >
        <ListItemIcon>
          <Logo size="tiny" colour={false} />
        </ListItemIcon>
        <ItemText primary={text} />
      </ListItem>
    </Link>
  );
}

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuItem;
