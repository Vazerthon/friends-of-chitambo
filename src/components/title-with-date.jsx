import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { formatFullDate } from '../helpers/date';
import { Heading, SubHeading } from './typography';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

function TitleWithDate({ title, date }) {
  return (
    <Header>
      <Heading colour="accessiblePrimary">
        {title}
      </Heading>
      <SubHeading colour="accessiblePrimary">
        {formatFullDate(date)}
      </SubHeading>
    </Header>
  );
}

TitleWithDate.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default TitleWithDate;
