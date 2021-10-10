import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { Paragraph } from '../components/typography';
import Link from '../components/link';
import Panel from '../components/panel';

const Banner = styled(Panel)`
  margin-bottom: ${({ theme }) => theme.spacing.units(4)};
  border: thin solid ${({ theme }) => theme.colour.primary};
`;

const renderBanner = (data) => {
  const item = data?.allContentfulAllPageBanner?.nodes[0];

  if (!item) {
    return <></>;
  }

  const {
    heading,
    body,
    linkText,
    linkAddress,
  } = item;

  return (
    <Banner title={heading}>
      <Paragraph>{body}</Paragraph>
      {linkText && linkAddress && (
        <Link target="_blank" rel="noopener noreferrer" href={linkAddress}>{linkText}</Link>
      )}
    </Banner>
  );
};

export default function AllPageBanner() {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            allContentfulAllPageBanner {
              nodes {
                id
                heading
                body
                linkAddress
                linkText
              }
            }
          }`
      }
      render={renderBanner}
    />
  );
}
