/* tslint:disable */
import * as React from 'react';
import { PersonaSize, Persona } from 'office-ui-fabric-react';
import { PersonaTestImages } from '@uifabric/experiments/lib/common/TestImages';

export interface IPersonWithActivityProps {
  name: string;
  activity: string;
  date: string;
}

const PersonWithActivity = (props: IPersonWithActivityProps) => {
  const { name, activity, date } = props;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Persona size={PersonaSize.size32} imageUrl={PersonaTestImages.personFemale} hidePersonaDetails={true} />
      <div
        style={{
          paddingLeft: 12,
          fontSize: 12,
          lineHeight: 1.2,
          color: '#666666'
        }}
      >
        <div>
          <span style={{ fontWeight: 600, color: '#33332D' }}>{name}</span> {activity}
        </div>
        {date}
      </div>
    </div>
  );
};

export default PersonWithActivity;
