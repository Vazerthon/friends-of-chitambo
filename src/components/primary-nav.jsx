import React from 'react';
import PropTypes from 'prop-types';
import NavLink, { Nav } from './nav-link';

const lightestFirst = (x, y) => (x.weight < y.weight ? -1 : 1);

function PrimaryNav({ items }) {
  return (
    <Nav>
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
    </Nav>
  );
}

PrimaryNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
  })).isRequired,
};

export default PrimaryNav;
