import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from './logo';

export const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledListItem = styled.li`
  font-family: ${({ theme }) => theme.fontFamily}; 
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.units(1)};
`;

export const ListItem = ({ children }) => (
  <StyledListItem>
    <Bullet>
      <Logo size="tiny" colour={false} />
    </Bullet>
    {children}
  </StyledListItem>
);

const Bullet = styled.div`
  margin-right: ${({ theme }) => theme.spacing.units(1)};
`;

function List({ items }) {
  return (
    <UnorderedList>
      {items.map(item => (
        <ListItem key={item}>
          {item}
        </ListItem>
      ))}
    </UnorderedList>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
