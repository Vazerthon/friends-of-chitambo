import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Typogrpahy({ tag, children }) {
  const Tag = styled[tag]`
    font-family: 'Barlow Semi Condensed', sans-serif;
  `;
  return (
    <Tag>{children}</Tag>
  );
}

Typogrpahy.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'p', 'span']).isRequired,
  children: PropTypes.node.isRequired,
};
