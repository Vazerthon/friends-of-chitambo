import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

export default function SiteMetadata({ renderChildren }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => renderChildren(data.site.siteMetadata)}
    />
  );
}

SiteMetadata.propTypes = {
  renderChildren: PropTypes.func.isRequired,
};
