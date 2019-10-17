/** @jsx withSlots */
import { Text } from 'office-ui-fabric-react/lib/Text';
import { withSlots, getSlots } from '../../Foundation';

import { ITeachingBannerComponent, ITeachingBannerProps, ITeachingBannerSlots } from './TeachingBanner.types';

/**
 * {@docCategory TeachingBanner}
 */
export const TeachingBannerView: ITeachingBannerComponent['view'] = props => {
  const Slots = getSlots<ITeachingBannerProps, ITeachingBannerSlots>(props, {
    root: 'div',
    text: Text
  });

  return (
    <Slots.root>
      <Slots.text onClick={props.onClick} />
      <br />
      <span>Status: {props.clicks} clicks</span>
    </Slots.root>
  );
};
