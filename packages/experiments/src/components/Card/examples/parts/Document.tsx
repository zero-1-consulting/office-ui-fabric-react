/* tslint:disable */
import * as React from 'react';

export interface IDocument {
  site: string;
  name: string;
}

const Document = (props: IDocument) => {
  const { site, name } = props;

  return (
    <div>
      <div style={{ color: '#025F52', fontWeight: 600, fontSize: 12, marginBottom: 4 }}>{site}</div>
      <div style={{ color: '#33332D', fontWeight: 600, fontSize: 14 }}>{name}</div>
    </div>
  );
};

export default Document;
