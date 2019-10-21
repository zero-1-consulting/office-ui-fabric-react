import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { TeachingBanner } from './TeachingBanner';

describe('TeachingBanner', () => {
  it('renders correctly with no props', () => {
    const tree = renderer.create(<TeachingBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children prop correctly', () => {
    const tree = renderer.create(<TeachingBanner>Text</TeachingBanner>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
