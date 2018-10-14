import { css } from 'styled-components';

const spacingUnit = 8;
const breakpoints = {
  small: { min: 0, max: 599 },
  medium: { min: 600, max: 1279 },
  large: { min: 1280, max: 1919 },
};

const mediaQueryFactory = ({ min, max }) => (...args) => css`
  @media (min-width: ${min}px) and (max-width: ${max}px) {
    ${css(...args)};
  }
`;

const media = Object.keys(breakpoints).reduce((prev, breakpoint) => ({
  ...prev,
  [breakpoint]: mediaQueryFactory(breakpoints[breakpoint]),
}), {});

export default {
  colour: {
    primary: '#f68712',
    secondary: '#2f933c',
    neutral: {
      background: '#fafafa',
    },
  },
  spacing: {
    unit: spacingUnit,
    units: multiple => `${multiple * spacingUnit}px`,
  },
  media,
  typography: {
    // todo
  },
};
