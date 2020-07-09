import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link as UnstyledInternalLink } from 'gatsby';
import styled from 'styled-components';

const Link = styled.a`
  color: ${({ theme }) => theme.colour.text.secondary};
`;

const StyledInternalLink = styled(UnstyledInternalLink)`
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colour.text.secondary};
`;

const toAbsoluteTo = (to) => (to.startsWith('/') ? to : `/${to}`);

export const InternalLink = ({ to, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledInternalLink to={toAbsoluteTo(to)} {...rest} />
);

InternalLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export function ButtonLink({ to, label, external }) {
  const internalProps = { to };
  const externalProps = { href: to };
  const Component = external ? Link : InternalLink;
  const props = external ? externalProps : internalProps;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...props}>
      <StyledButton variant="outlined" aria-label={label}>
        {label}
      </StyledButton>
    </Component>
  );
}

export default Link;

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  external: PropTypes.bool,
};

ButtonLink.defaultProps = {
  external: false,
};
