import React from 'react';
import { create } from 'react-test-renderer';

import Header from './Header';

describe('h1', () => {
  it('should match snapshot', () => {
    const component = create(<Header text="Hello World!" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
