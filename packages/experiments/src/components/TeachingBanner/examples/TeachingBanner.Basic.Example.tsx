import * as React from 'react';
import { Link, Stack, StackItem, ChoiceGroup, IStackProps } from 'office-ui-fabric-react';
import { TeachingBanner } from '@uifabric/experiments';

interface IExampleProps {
  resetChoice?: () => void;
}

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

const DefaultExample = (p: IExampleProps) => (
  <TeachingBanner>
    <strong className="ms-fontWeight-semibold">Default MessageBar.</strong>{' '}
    <Link href="https://www.bing.com" target="_blank">
      Visit our website.
    </Link>
  </TeachingBanner>
);

const PremiumExample = (p: IExampleProps) => (
  <TeachingBanner
    premium={true}
    actionsContainer={{
      'aria-label': 'jkjahsgdjhasjdi'
    }}
    // actions={
    //   <>
    //     <Button primary={true}>Primary</Button>
    //     <Button>Default</Button>
    //   </>
    // }
    actions={[
      {
        primary: true,
        text: 'Primary'
      },
      {
        text: 'Default'
      }
    ]}
    tokens={
      {
        // background: 'linear-gradient(to right, orange , yellow, green, cyan, blue, violet);'
      }
    }
  >
    <strong>Premium MessageBar.</strong>{' '}
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
    key: 'premium',
    text: 'Premium'
  },
  {
    key: 'all',
    text: 'Show All'
  }
];

export const TeachingBannerBasicExample: React.StatelessComponent = () => {
  const [choice, setChoice] = React.useState<string | undefined>(choiceOptions[2].key); // TODO: Switch back to choiceOptions[0].key
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
        {(choice === 'premium' || showAll) && <PremiumExample resetChoice={resetChoice} />}
      </Stack>
    </Stack>
  );
};
