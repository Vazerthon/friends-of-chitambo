import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.units(1)};

  :hover, :focus {
    background-color: ${({ theme }) => theme.colour.secondary};
  }
`;

function Button({ children, onClick }) {
  return (
    <ButtonDiv role="button" onClick={onClick}>
      {children}
    </ButtonDiv>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
