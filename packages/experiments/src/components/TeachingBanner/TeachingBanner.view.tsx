/** @jsx withSlots */
// import { Text } from 'office-ui-fabric-react/lib/Text';
import { withSlots, getSlots, ThemeProvider } from '../../Foundation';

import { ITeachingBannerComponent, ITeachingBannerProps, ITeachingBannerSlots } from './TeachingBanner.types';
import { FontIcon } from '../../utilities/factoryComponents';
import { Stack, StackItem, DefaultButton, PrimaryButton, IconButton } from 'office-ui-fabric-react';

/**
 * {@docCategory TeachingBanner}
 */
export const TeachingBannerView: ITeachingBannerComponent['view'] = props => {
  const Slots = getSlots<ITeachingBannerProps, ITeachingBannerSlots>(props, {
    root: Stack,
    icon: FontIcon,
    textContainer: StackItem,
    actionsContainer: Stack,
    // actionButton: Button
    actionPrimaryButton: PrimaryButton,
    actionDefaultButton: DefaultButton,
    dismiss: IconButton
  });

  const { actions, children, premium, onDismiss } = props;

  return (
    <ThemeProvider scheme="strong">
      <Slots.root horizontal verticalAlign="center" tokens={{ childrenGap: 8 }}>
        {/* <Slots.text onClick={props.onClick} /> */}
        {/* <span>Status: {props.clicks} clicks</span> */}
        {premium && <Slots.icon />}
        {children && (
          <Slots.textContainer grow shrink>
            {children}
          </Slots.textContainer>
        )}
        {actions && (
          <Slots.actionsContainer horizontal tokens={{ childrenGap: 8 }}>
            {actions.map(itemProps =>
              // (
              //   <Slots.actionButton {...itemProps} />
              // )
              itemProps.primary ? <Slots.actionPrimaryButton {...itemProps} /> : <Slots.actionDefaultButton {...itemProps} />
            )}
          </Slots.actionsContainer>
        )}
        <Slots.dismiss
          iconProps={{ iconName: 'Cancel' }}
          // title={closeButtonAriaLabel}
          // ariaLabel={closeButtonAriaLabel}
          onClick={onDismiss}
        />
      </Slots.root>
    </ThemeProvider>
  );
};
