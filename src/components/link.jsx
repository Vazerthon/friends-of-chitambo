import React from 'react';
import Button from '@material-ui/core/Button';
import { Link as InternalLink } from 'gatsby';
import styled from 'styled-components';

const Link = styled.a`
  color: ${({ theme }) => theme.colour.primary};
`;

export function ButtonLink({ to, label, external = false }) {
  const internalProps = { to };
  const externalProps = {
    href: to,
    target: '_blank',
    rel: 'noopener noreferrer'
  }
  const Component = external ? Link : InternalLink;
  const props = external ? externalProps : internalProps;
  return (
    <Component {...props}>
      <Button variant="outlined" color="secondary">{label}</Button>
    </Component>
  )
}

export default Link;