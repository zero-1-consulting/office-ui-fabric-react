/* tslint:disable */
import * as React from 'react';
import { Icon, Stack } from 'office-ui-fabric-react';

const CardBar = () => {
  return (
    <Stack horizontal horizontalAlign="space-between" padding="12px" styles={{ root: { borderTop: '1px solid #F3F2F1' } }}>
      <Stack.Item>
        <Icon iconName="RedEye" styles={{ root: { color: '#0078D4', fontSize: 16, marginRight: 16 } }} />
        <Icon iconName="SingleBookmark" styles={{ root: { color: '#0078D4', fontSize: 16 } }} />
      </Stack.Item>
      <Icon iconName="MoreVertical" styles={{ root: { color: '#0078D4', fontSize: 16 } }} />
    </Stack>
  );
};

export default CardBar;
