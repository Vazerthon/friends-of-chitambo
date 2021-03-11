import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Img from './profile-image';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colour.neutral.grey};
  border-bottom: 1px solid ${({ theme }) => theme.colour.neutral.grey};
  margin: ${({ theme }) => `${theme.spacing.units(2)} ${theme.spacing.units(4)}`};
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.span`
  font-size: 1.5em;
`;

const SmallImg = styled(Img)`
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  max-width: 60px;
  max-height: 60px;
  margin-left: ${({ theme }) => theme.spacing.units(2)};
`;

export default function BlogAuthor({ author: { name, picture } }) {
  return (
    <Container>
      <Col>
        Words by
        <Name>
          { name }
        </Name>
      </Col>
      <SmallImg image={picture.fixed} />
    </Container>
  );
}

BlogAuthor.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.shape({
      // eslint-disable-next-line react/forbid-prop-types
      fixed: PropTypes.object,
    }).isRequired,
  }).isRequired,
};
