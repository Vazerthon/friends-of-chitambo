import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import PageContent from '../queries/page-content';

import Renderer from './renderer';

function RenderPage({ page }) {
  return (
    <PageContent
      page={page}
      renderChildren={pg => (
        <Fragment>
          <Helmet title={pg.frontmatter.title}>
            <meta name="description" content={pg.frontmatter.description} />
          </Helmet>
          <Renderer sections={pg.content.sections} />
        </Fragment>
      )}
    />
  );
}

RenderPage.propTypes = {
  page: PropTypes.string.isRequired,
};

export default RenderPage;
