import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

const mapToNodes = data => data.allContentfulTeamMemberBio.edges.map(({ node }) => node);

export const teamMemberFragment = graphql`
  fragment TeamMemberFragment on ContentfulTeamMemberBio {
    id
    name
    location
    biography {
      biography
    }
    picture {
      gatsbyImageData(
        width: 200
        layout: FIXED
        formats: [AUTO, WEBP]
      )
    }
  }
`;

export default function Team({ renderChildren }) {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            allContentfulTeamMemberBio(sort: { fields: name }) {
              edges {
                node {
                  ...TeamMemberFragment
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
