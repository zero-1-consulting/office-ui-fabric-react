/* tslint:disable */
// @codepen
import * as React from 'react';
import { Card } from '../Card';
import { Image, Stack } from 'office-ui-fabric-react';
import PersonWithActivity from './parts/PersonWithActivity';
import Document from './parts/Document';
import Helpful from './parts/Helpful';
import CardBar from './parts/CardBar';

const alertClicked = (): void => {
  alert('Clicked');
};

export class CardBasicExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <Stack horizontal gap={40} style={{ margin: 40 }}>
        <Card onClick={alertClicked}>
          <Card.Item>
            <PersonWithActivity name="Carol Poland" activity="commented" date="Nov 17, 2018" />
          </Card.Item>
          <Card.Item disableChildPadding>
            <Image src="https://placeimg.com/640/480/arch" width="100%" height="144px" />
          </Card.Item>
          <Card.Item>
            <Document name="Contoso Denver expansion design marketing hero guidelines" site="Contoso" />
          </Card.Item>
          <Card.Item>
            <Helpful />
          </Card.Item>
          <Card.Item disableChildPadding>
            <CardBar />
          </Card.Item>
        </Card>
      </Stack>
    );
  }
}
