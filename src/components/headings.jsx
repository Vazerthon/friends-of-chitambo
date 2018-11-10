import React from 'react';
import Typography from './typography';

export const Title = ({ children }) => <Typography tag="h1">{children}</Typography>;
export const Heading = ({ children }) => <Typography tag="h2">{children}</Typography>;
export const SubHeading = ({ children }) => <Typography tag="h3">{children}</Typography>;
