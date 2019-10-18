/** @jsx withSlots */
// import { Text } from 'office-ui-fabric-react/lib/Text';
import { withSlots, getSlots } from '../../Foundation';

import { ITeachingBannerComponent, ITeachingBannerProps, ITeachingBannerSlots } from './TeachingBanner.types';
import { FontIcon } from '../../utilities/factoryComponents';
import { Stack, StackItem } from 'office-ui-fabric-react';

/**
 * {@docCategory TeachingBanner}
 */
export const TeachingBannerView: ITeachingBannerComponent['view'] = props => {
  const Slots = getSlots<ITeachingBannerProps, ITeachingBannerSlots>(props, {
    root: Stack,
    icon: FontIcon,
    textContainer: StackItem,
    actionsContainer: Stack
  });

  const { actions, children, premium } = props;

  return (
    <Slots.root horizontal verticalAlign="center" gap={8}>
      {/* <Slots.text onClick={props.onClick} /> */}
      {/* <span>Status: {props.clicks} clicks</span> */}
      {premium && <Slots.icon />}
      {children && <Slots.textContainer grow>{children}</Slots.textContainer>}
      {actions && (
        <Slots.actionsContainer horizontal gap={8}>
          {actions}
        </Slots.actionsContainer>
      )}
    </Slots.root>
  );
};
