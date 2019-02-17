import React from 'react';

import Panel from './panel';
import Gallery from './gallery';

import Partners from '../queries/partners';

const renderLinkImages = images => (imageElement, index) => {
  const { id, website } = images[index];
  return (
    <a key={id} href={website} target="_blank" rel="noopener noreferrer">
      {imageElement}
    </a>
  );
};

const toGalleryData = image => ({
  id: image.id,
  alt: image.organisation,
  data: image.logo.fixed,
  website: image.website,
});

export default function PartnerLogos() {
  return (
    <Partners
      renderChildren={data => {
        const galleryData = data.map(toGalleryData);
        return (
          <Panel title="Partners & Sponsors">
            <Gallery images={galleryData} renderImageWrapper={renderLinkImages(galleryData)} />
          </Panel>
        );
      }
    }
    />
  );
}
