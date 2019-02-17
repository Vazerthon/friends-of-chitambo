import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

import { renderers } from './markdown';

describe('Markdown renderer', () => {
  it('should use correct rel and target for external links', () => {
    const component = mount((
      <ThemeProvider theme={theme}>
        {renderers.link({ href: 'http://www.bla.com', children: <div /> }) }
      </ThemeProvider>
    ));

    const linkProps = component.find('a').props();
    expect(linkProps.rel).toBe('noopener noreferrer');
    expect(linkProps.target).toBe('_blank');
  });

  it('should not set rel or target for internal links', () => {
    const component = mount((
      <ThemeProvider theme={theme}>
        {renderers.link({ href: '/foo-page', children: <div /> }) }
      </ThemeProvider>
    ));

    const linkProps = component.find('a').props();
    expect(linkProps.rel).toBeUndefined();
    expect(linkProps.target).toBeUndefined();
  });
});
