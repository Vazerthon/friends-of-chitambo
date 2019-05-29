import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const mapToNodes = data => data.allContentfulTeamMemberBio.edges.map(({ node }) => node);

export default function Team({ renderChildren }) {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            allContentfulTeamMemberBio {
              edges {
                node {
                  id
                  name
                  location
                  biography {
                    biography
                  }
                  picture {
                    fixed(width: 200) {
                      ...GatsbyContentfulFixed_tracedSVG
                    }
                  }
                }
              }
            }
          }`
        }
      render={data => renderChildren(mapToNodes(data))}
    />
  );
}

Team.propTypes = {
  renderChildren: PropTypes.func.isRequired,
};
