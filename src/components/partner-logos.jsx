import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

import Panel from './panel';
import Gallery from './gallery';

import Partners from '../queries/partners'

const Img = styled(Image)`
  margin: ${({ theme }) => theme.spacing.units(1)};
  margin-left: 0;
`;

const renderImages = images => images.map(({ id, organisation, website, logo }) => (
  <a key={id} href={website} target="_blank" rel="noopener noreferrer">
    <Img alt={organisation} fixed={logo.fixed} />
  </a>
));

export default function PartnerLogos() {
  return (
    <Partners
      renderChildren={data => (
        <Panel title="Partners & Sponsors">
            <Gallery images={data} render={renderImages} />
        </Panel>
      )}
    />
  )
}
