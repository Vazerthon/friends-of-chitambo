import styled from 'styled-components';
import { Link } from 'gatsby';

export const Nav = styled.nav`
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
  white-space: nowrap;

  ${({ theme }) => theme.media.medium`margin: 0 ${theme.spacing.units(2)};`}
  ${({ theme }) => theme.media.small`margin: 0 ${theme.spacing.units(1)};`}

  transition: all 100ms ease-in-out;

  :focus, :hover {
    transform: scale(1.2);
    font-weight: bold;
  }
`;

export const DrawerNavLink = styled(Link)`
  color: ${({ theme }) => theme.colour.neutral.black};
  text-decoration: none;
  outline: none;
  margin: ${({ theme }) => `${theme.spacing.units(1)} ${theme.spacing.units(4)};`};
  white-space: nowrap;
`;

export default NavLink;
