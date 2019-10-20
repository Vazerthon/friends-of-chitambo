import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import TitleWithDate from './title-with-date';

describe('TitleWithDate', () => {
  it('should parse and format dates to show day, month and year', () => {
    const component = mount((
      <ThemeProvider theme={theme}>
        <TitleWithDate
          title="test"
          date="2018-11-12T15:39:24.197Z"
        />
      </ThemeProvider>
    ));

    expect(component.text()).toContain('12th November 2018');
  });
});
