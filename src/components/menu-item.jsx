import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'gatsby';

const ItemText = styled(ListItemText)`
  text-transform: capitalize;
`;

function MenuItem({ icon, text, to }) {
  return (
    <Link to={to}>
      <ListItem button>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ItemText primary={text} />
      </ListItem>
    </Link>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuItem;
