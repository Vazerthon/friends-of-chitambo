import React from 'react';
import PropTypes from 'prop-types';
import Json from './json';

const mapData = (page, data) => data
  .map(({ node }) => node)
  .find(node => node.page === page);

export default function PageContent({ page, renderChildren }) {
  return (
    <Json
      renderChildren={data => renderChildren(mapData(page, data))}
    />
  );
}

PageContent.propTypes = {
  page: PropTypes.string.isRequired,
  renderChildren: PropTypes.func.isRequired,
};
