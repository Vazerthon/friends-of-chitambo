import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default styled.span`
  font-family: 'Kaushan Script', cursive;
`;

export function Heading({ tag, children }) {
  const Tag = styled[tag]`
    font-family: 'Kaushan Script', cursive;
  `;
  return (
    <Tag>{children}</Tag>
  );
}

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3']).isRequired,
  children: PropTypes.node.isRequired,
};
