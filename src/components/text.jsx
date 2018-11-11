import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Heading, Paragraph } from './typography';

const Container = styled.div`
  margin: ${({ theme }) => theme.spacing.units(1)} 0;
`;

function Text({ heading, content }) {
  return (
    <Container>
      { heading && <Heading>{heading}</Heading> }
      <Paragraph>
        {content}
      </Paragraph>
    </Container>
  );
}

Text.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Text.defaultProps = {
  heading: '',
};

export default Text;
