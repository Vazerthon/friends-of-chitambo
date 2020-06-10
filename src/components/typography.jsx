/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Paragraph = styled(({ ...props }) => <Typography {...props} paragraph />)`
  && {
    font-size: 1.2rem;
  }
`;

export const HeaderBarTitle = styled(({ ...props }) => <Typography {...props} component="h1" paragraph />)`
  && {
    font-size: 1.4rem;
    margin: 0;
  }
`;

export const Heading = styled(({ ...props }) => <Typography {...props} paragraph component="h2" />)`
  && {
    color: ${({ theme, colour }) => theme.colour[colour]};
    margin-bottom: ${({ theme }) => theme.spacing.units(0.5)};
    font-size: 2.2rem;
    line-height: 2.2rem;
  }
`;

export const SubHeading = styled(({ ...props }) => <Typography {...props} paragraph component="h3" />)`
  && {
    color: ${({ theme, colour }) => theme.colour[colour]};
    margin-bottom: ${({ theme }) => theme.spacing.units(0.5)};
    font-size: 1.8rem;
    line-height: 2.2rem;
  }
`;
