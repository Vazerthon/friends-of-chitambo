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
    border-bottom: 1px solid ${({ theme }) => theme.colour.neutral.black};
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colour.neutral.black};
  text-decoration: none;
  outline: none;
  margin: ${({ theme }) => `0 ${theme.spacing.units(4)};`};

  ${({ theme }) => theme.media.medium`margin: 0 ${theme.spacing.units(2)};`}
  ${({ theme }) => theme.media.small`margin: 0 ${theme.spacing.units(1)};`}

  :focus, :hover {
    transform: scale(1.2);
    font-weight: bold;
  }
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
