/* tslint:disable */
// @codepen
import * as React from 'react';
import { Card } from '../Card';
import Document from './parts/Document';
import { Image } from 'office-ui-fabric-react';

const alertClicked = (): void => {
  alert('Clicked');
};

export class CardCompactExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div style={{ margin: 40 }}>
        <Card compact={true} tokens={{ maxWidth: 360 }} onClick={alertClicked}>
          <Card.Item disableChildPadding>
            <Image src="https://placeimg.com/200/200/nature" width="100px" height="100px" />
          </Card.Item>
          <Card.Item basis="0" grow={1}>
            <Document name="Contoso Denver expansion design marketing hero guidelines" site="Contoso" />
          </Card.Item>
        </Card>
      </div>
    );
  }
}
