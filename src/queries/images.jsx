import React from 'react';
import PropTypes from 'prop-types';
import AllFile from './all-file';

const inImagesDir = new RegExp(/^images\//g);
const toOnlyImages = ({ node }) => inImagesDir.test(node.relativePath);

const toCorrectShape = ({ node }) => ({
  id: node.id,
  src: node.publicURL,
  alt: node.name,
  path: node.relativePath,
});

const container = path => (path.split('/').length > 2 ? path.split('/')[1] : 'site');
const propOrFallback = (fallback, prop, obj) => (obj[prop] ? obj[prop] : fallback);

const toDictionary = (all, curr) => ({
  ...all,
  [container(curr.path)]: [
    ...propOrFallback([], container(curr.path), all),
    curr,
  ],
});

const mapDataToImages = data => data
  .filter(toOnlyImages)
  .map(toCorrectShape)
  .reduce(toDictionary, {});

export default function Images({ renderChildren }) {
  return (
    <AllFile
      renderChildren={data => renderChildren(mapDataToImages(data))}
    />
  );
}

Images.propTypes = {
  renderChildren: PropTypes.func.isRequired,
};
