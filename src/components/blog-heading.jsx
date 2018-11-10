import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import styled from 'styled-components';

import { Heading, SubHeading } from './headings';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colour.secondary};
`;

function BlogHeading({title, date}) {
  return (
    <Header>
        <Heading>
          {title}
        </Heading>
        <SubHeading>
          {format(date, 'Do MMMM YYYY')}
        </SubHeading>
    </Header>
  );
}

BlogHeading.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default BlogHeading;
