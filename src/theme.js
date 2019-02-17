import { css } from 'styled-components';

const spacingUnit = 8;
const breakpoints = {
  small: { min: 0, max: 599 },
  medium: { min: 600, max: 1023 },
  large: { min: 1024, max: 1279 },
  xLarge: { min: 1280, max: 1919 },
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
  fontFamily: "'Barlow Semi Condensed', sans-serif",
  colour: {
    primary: '#f68712',
    secondary: '#2f933c',
    neutral: {
      background: '#fafafa',
      white: '#ffffff',
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
