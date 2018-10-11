import React from 'react';
import PropTypes from 'prop-types';

import PageContent from '../queries/page-content';

import Renderer from './renderer';

// TODO - helmet page description and title from data

function RenderPage({ page }) {
  return (
    <PageContent
      page={page}
      renderChildren={pg => <Renderer sections={pg.content.sections} />}
    />
  );
}

RenderPage.propTypes = {
  page: PropTypes.string.isRequired,
};

export default RenderPage;
