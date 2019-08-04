import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const lightestFirst = (x, y) => (x.weight < y.weight ? -1 : 1);

const Nav = styled.nav`
  display: flex;
  align-items: center;

  /* styling for active NavLink */
  .active {
    text-decoration: underline;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colour.neutral.black};
  text-decoration: none;
  margin: ${({ theme }) => theme.spacing.units(1)};
`;

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
