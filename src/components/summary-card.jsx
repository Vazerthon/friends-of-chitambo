import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

import { Paragraph } from './typography';
import TitleWithDate from './title-with-date';
import { ButtonLink, InternalLink } from './link';

const Summary = styled.div`
  padding: ${({ theme }) => theme.spacing.units(2)};
  margin-bottom: ${({ theme }) => theme.spacing.units(4)};
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function SummaryCard({
  title, date, description, url,
}) {
  return (
    <Paper>
      <Summary>
        <InternalLink to={url} tabIndex="0">
          <TitleWithDate title={title} date={date} />
        </InternalLink>
        <Paragraph>
          {description}
        </Paragraph>
        <Footer>
          <ButtonLink to={url} label="Read more" />
        </Footer>
      </Summary>
    </Paper>
  );
}

SummaryCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
