import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { TeachingBanner } from './TeachingBanner';
import { mount } from 'enzyme';

describe('TeachingBanner', () => {
  it('renders correctly with no props', () => {
    const tree = renderer.create(<TeachingBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children prop correctly', () => {
    const tree = renderer.create(<TeachingBanner>Text</TeachingBanner>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children prop correctly', () => {
    const component = mount(<TeachingBanner>Text</TeachingBanner>);
    expect(
      component
        .find('.ms-TeachingBanner-text')
        .first()
        .text()
    ).toEqual('Text');
  });

  it('matches children prop snapshot', () => {
    const tree = renderer.create(<TeachingBanner>Text</TeachingBanner>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
