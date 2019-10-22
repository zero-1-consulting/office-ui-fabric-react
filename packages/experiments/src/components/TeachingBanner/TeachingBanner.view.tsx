/** @jsx withSlots */
import { withSlots, getSlots, ThemeProvider } from '../../Foundation';
import { ITeachingBannerComponent, ITeachingBannerProps, ITeachingBannerSlots } from './TeachingBanner.types';
import { FontIcon } from '../../utilities/factoryComponents';
import { Stack, StackItem, DefaultButton, PrimaryButton, IconButton, Text } from 'office-ui-fabric-react';

/**
 * {@docCategory TeachingBanner}
 */
export const TeachingBannerView: ITeachingBannerComponent['view'] = props => {
  const Slots = getSlots<ITeachingBannerProps, ITeachingBannerSlots>(props, {
    root: Stack,
    iconPremium: FontIcon,
    headline: Text,
    content: StackItem,
    actionsContainer: Stack,
    actionPrimaryButton: PrimaryButton,
    actionDefaultButton: DefaultButton,
    dismissButton: IconButton
  });

  if (props.dismissed) {
    return null;
  }
  const { actions, children, premium, headline, onDismiss, multiline: wrap = false, scheme = 'strong' } = props;

  return (
    <ThemeProvider scheme={scheme}>
      <Slots.root horizontal verticalAlign="center" wrap={wrap} tokens={{ padding: '10px 0 11px' }}>
        <Slots.content grow shrink>
          {premium && <Slots.iconPremium />}
          {headline && <Slots.headline as="h1" />}
          {children}
        </Slots.content>
        {actions && (
          <Slots.actionsContainer horizontal>
            {actions.map(itemProps =>
              itemProps.primary ? <Slots.actionPrimaryButton {...itemProps} /> : <Slots.actionDefaultButton {...itemProps} />
            )}
          </Slots.actionsContainer>
        )}
        {onDismiss && <Slots.dismissButton iconProps={{ iconName: 'Cancel' }} onClick={onDismiss} />}
      </Slots.root>
    </ThemeProvider>
  );
};
