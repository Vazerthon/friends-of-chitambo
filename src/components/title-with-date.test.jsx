import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';
import TitleWithDate from './title-with-date';

describe('TitleWithDate', () => {
  it('render date unparsed', () => {
    const component = mount((
      <ThemeProvider theme={theme}>
        <TitleWithDate
          title="test"
          date="dates passed as strings"
        />
      </ThemeProvider>
    ));

    expect(component.text()).toContain('dates passed as strings');
  });
});
