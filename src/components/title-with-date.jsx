import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Heading, SubHeading } from './typography';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.units(1)};

  * {
    :first-child {
      margin-right: ${({ theme }) => theme.spacing.units(2)};
    }
  }
`;

function TitleWithDate({ title, date }) {
  return (
    <Header>
      <Heading colour="primary">
        {title}
      </Heading>
      <SubHeading colour="primary">
        {date}
      </SubHeading>
    </Header>
  );
}

TitleWithDate.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default TitleWithDate;
