import React from 'react';
import PropTypes from 'prop-types';
import Json from './json';

const mapData = (data) => data
  .map(({ node }) => ({
    page: node.page,
    url: node.url,
  }));

export default function PageList({ renderChildren }) {
  return (
    <Json
      renderChildren={data => renderChildren(mapData(data))}
    />
  );
}

PageList.propTypes = {
  renderChildren: PropTypes.func.isRequired,
};
