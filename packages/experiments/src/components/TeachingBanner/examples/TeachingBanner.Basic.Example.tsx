import * as React from 'react';
import { Link, Stack, StackItem, ChoiceGroup, IStackProps, getTheme, IButtonProps } from 'office-ui-fabric-react';
import { TeachingBanner } from '@uifabric/experiments';

interface IExampleProps {
  resetChoice?: () => void;
}

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const actions: IButtonProps[] = [
  {
    primary: true,
    text: 'Primary'
  },
  {
    text: 'Default'
  }
];

const horizontalStackProps: IStackProps = {
  horizontal: true,
  tokens: { childrenGap: 16 }
};
const verticalStackProps: IStackProps = {
  styles: { root: { overflow: 'hidden', width: '100%' } },
  tokens: { childrenGap: 20 }
};

const choiceGroupStyles = {
  label: {
    maxWidth: 250
  }
};

const theme = getTheme();

const DefaultExample = (p: IExampleProps) => (
  <TeachingBanner>
    <strong className="ms-fontWeight-semibold">Default MessageBar.</strong>{' '}
    <Link href="https://www.bing.com" target="_blank">
      Visit our website.
    </Link>
  </TeachingBanner>
);

const DefaultSingleLineExample = (p: IExampleProps) => (
  <TeachingBanner multiline={false} actions={actions}>
    <strong className="ms-fontWeight-semibold">Default Single Line MessageBar.</strong> {longText}
  </TeachingBanner>
);

const DefaultMultiLineExample = (p: IExampleProps) => (
  <TeachingBanner actions={actions}>
    <strong className="ms-fontWeight-semibold">Default Multiline MessageBar.</strong>
    <br />
    {longText}
  </TeachingBanner>
);

const PremiumExample = (p: IExampleProps) => (
  <TeachingBanner premium={true} actions={actions}>
    <strong>Premium MessageBar.</strong>{' '}
    <Link href="https://www.bing.com" target="_blank">
      Visit our website.
    </Link>
  </TeachingBanner>
);

const PremiumCustomExample = (p: IExampleProps) => (
  <TeachingBanner
    premium={true}
    scheme={'default'}
    actions={actions}
    iconPremium={'WindowsLogo'}
    tokens={{
      color: 'black',
      background: theme.palette.themeLighter
      // background: 'linear-gradient(to right, orange , yellow, green, cyan, blue, violet);'
    }}
  >
    <strong>Premium Custom Colors MessageBar.</strong>{' '}
    <Link href="https://www.bing.com" target="_blank">
      Visit our website.
    </Link>
  </TeachingBanner>
);

const RainbowExample = (p: IExampleProps) => (
  <TeachingBanner
    premium={true}
    scheme={'default'}
    actions={actions}
    iconPremium={'WindowsLogo'}
    tokens={{
      color: 'black',
      background: 'linear-gradient(-20deg, fuchsia, orange, yellow, cyan, violet);'
    }}
    actionPrimaryButton={{
      styles: {
        root: {
          color: 'black',
          background: 'linear-gradient(20deg, fuchsia, orange, yellow);'
        },
        rootHovered: {
          color: 'fuchsia',
          background: 'linear-gradient(20deg, fuchsia, orange, yellow);'
        }
      }
    }}
    actionDefaultButton={{
      styles: {
        root: {
          color: 'black',
          background: 'linear-gradient(-20deg, yellow, cyan, violet);',
          borderColor: 'black'
        },
        rootHovered: {
          color: 'fuchsia'
        }
      }
    }}
    dismiss={{
      styles: {
        root: {
          color: 'white'
        }
      }
    }}
  >
    <strong>Premium Custom Colors MessageBar.</strong>{' '}
    <Link href="https://www.bing.com" target="_blank">
      Visit our website.
    </Link>
  </TeachingBanner>
);

const choiceOptions = [
  {
    key: 'default',
    text: 'Default'
  },
  {
    key: 'defaultSingleLine',
    text: 'Default - single line'
  },
  {
    key: 'defaultMultiLine',
    text: 'Default - multiline'
  },
  {
    key: 'premium',
    text: 'Premium'
  },
  {
    key: 'premiumCustom',
    text: 'Custom Colors'
  },
  {
    key: 'rainbow',
    text: 'Rainbow Colors'
  },
  {
    key: 'all',
    text: 'Show All'
  }
];

export const TeachingBannerBasicExample: React.StatelessComponent = () => {
  // TODO: Switch back to choiceOptions[0].key
  const [choice, setChoice] = React.useState<string | undefined>(choiceOptions.slice().pop()!.key);
  const showAll = choice === 'all';

  const resetChoice = () => setChoice(undefined);

  return (
    <Stack {...horizontalStackProps}>
      <StackItem disableShrink>
        <ChoiceGroup
          styles={choiceGroupStyles}
          label="Select a MessageBar Example Below. To test in narrator, show one message at a time."
          selectedKey={choice}
          // tslint:disable-next-line: jsx-no-lambda
          onChange={(e, v) => setChoice(v!.key)}
          options={choiceOptions}
        />
      </StackItem>
      <Stack {...verticalStackProps}>
        {(choice === 'default' || showAll) && <DefaultExample resetChoice={resetChoice} />}
        {(choice === 'defaultSingleLine' || showAll) && <DefaultSingleLineExample resetChoice={resetChoice} />}
        {(choice === 'defaultMultiLine' || showAll) && <DefaultMultiLineExample resetChoice={resetChoice} />}
        {(choice === 'premium' || showAll) && <PremiumExample resetChoice={resetChoice} />}
        {(choice === 'premiumCustom' || showAll) && <PremiumCustomExample resetChoice={resetChoice} />}
        {(choice === 'rainbow' || showAll) && <RainbowExample resetChoice={resetChoice} />}
      </Stack>
    </Stack>
  );
};
