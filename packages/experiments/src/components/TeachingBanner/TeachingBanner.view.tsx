/** @jsx withSlots */
import { withSlots, getSlots, ThemeProvider } from '../../Foundation';

import { ITeachingBannerComponent, ITeachingBannerProps, ITeachingBannerSlots } from './TeachingBanner.types';
// import { FontIcon } from '../../utilities/factoryComponents';
import { Stack, StackItem, DefaultButton, PrimaryButton, IconButton, FontIcon } from 'office-ui-fabric-react';

/**
 * {@docCategory TeachingBanner}
 */
export const TeachingBannerView: ITeachingBannerComponent['view'] = props => {
  const Slots = getSlots<ITeachingBannerProps, ITeachingBannerSlots>(props, {
    root: Stack,
    iconPremium: FontIcon,
    textContainer: StackItem,
    actionsContainer: Stack,
    actionPrimaryButton: PrimaryButton,
    actionDefaultButton: DefaultButton,
    dismiss: IconButton
  });

  const { actions, children, premium, multiline, onDismiss, scheme = 'strong' } = props;
  const wrap = multiline !== false;

  return (
    <ThemeProvider scheme={scheme}>
      <Slots.root horizontal verticalAlign="center" wrap={wrap} tokens={{ childrenGap: 8 }}>
        {premium && <Slots.iconPremium />}
        {children && (
          <Slots.textContainer grow shrink>
            {children}
          </Slots.textContainer>
        )}
        {actions && (
          <Slots.actionsContainer horizontal tokens={{ childrenGap: 8 }}>
            {actions.map(itemProps =>
              itemProps.primary ? <Slots.actionPrimaryButton {...itemProps} /> : <Slots.actionDefaultButton {...itemProps} />
            )}
          </Slots.actionsContainer>
        )}
        <Slots.dismiss iconProps={{ iconName: 'Cancel' }} onClick={onDismiss} />
      </Slots.root>
    </ThemeProvider>
  );
};
