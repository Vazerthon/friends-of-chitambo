import React from 'react';
import PropTypes from 'prop-types';
import NavLink, { Nav } from './nav-link';
import { lightestFirst, items as itemsType } from './shared';

function PrimaryNav({ items, className }) {
  return (
    <Nav className={className}>
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
  items: itemsType.isRequired,
  className: PropTypes.string,
};

PrimaryNav.defaultProps = {
  className: undefined,
};

export default PrimaryNav;
