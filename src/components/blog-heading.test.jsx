import React from 'react';
import { mount } from 'enzyme';
import BlogHeading from './blog-heading';

describe('BlogHeading', () => {
  it('should parse and format dates to show day, month and year', () => {
    const component = mount((
      <BlogHeading
        title="test"
        date="2018-11-12T15:39:24.197Z"
      />
    ));

    expect(component.text()).toContain('12th November 2018');
  });
});
