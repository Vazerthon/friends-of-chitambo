import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from './logo';

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.units(1)}
`;

const Bullet = styled.div`
  margin-right: ${({ theme }) => theme.spacing.units(1)};
`;

function List({ items }) {
  return (
    <Ul>
      {items.map(item => (
        <Li key={item}>
          <Bullet>
            <Logo size="tiny" colour={false} />
          </Bullet>
          {item}
        </Li>
      ))}
    </Ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
