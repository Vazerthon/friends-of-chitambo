import React from 'react';
import PropTypes from 'prop-types';
import AllFile from './all-file';

const mapData = (page, data) => data;

export default function PageContent({ page, renderChildren }) {
  return (
    <AllFile
      renderChildren={data => renderChildren(mapData(page, data))}
    />
  );
}

PageContent.propTypes = {
  page: PropTypes.string.isRequired,
  renderChildren: PropTypes.func.isRequired,
};
