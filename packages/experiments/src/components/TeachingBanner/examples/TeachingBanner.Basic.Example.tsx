import * as React from 'react';
import { MessageBarButton, Link, Stack, StackItem, MessageBar, MessageBarType, ChoiceGroup, IStackProps } from 'office-ui-fabric-react';
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
    Info/Default MessageBar.
    <Link href="www.bing.com" target="_blank">
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
    key: 'all',
    text: 'Show All'
  }
];

export const TeachingBannerBasicExample: React.StatelessComponent = () => {
  const [choice, setChoice] = React.useState<string | undefined>(choiceOptions[0].key);
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
      <Stack {...verticalStackProps}>{(choice === 'default' || showAll) && <DefaultExample resetChoice={resetChoice} />}</Stack>
    </Stack>
  );
};
