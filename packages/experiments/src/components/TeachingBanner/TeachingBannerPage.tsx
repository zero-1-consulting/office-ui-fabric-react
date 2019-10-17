import * as React from 'react';
import { ExampleCard, IComponentDemoPageProps, ComponentPage, PropertiesTableSet } from '@uifabric/example-app-base';

import { TeachingBannerBasicExample } from './examples/TeachingBanner.Basic.Example';
const TeachingBannerBasicExampleCode = require('!raw-loader!@uifabric/experiments/src/components/TeachingBanner/examples/TeachingBanner.Basic.Example.tsx') as string;

export class TeachingBannerPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="TeachingBanner"
        componentName="TeachingBanner"
        exampleCards={
          <div>
            <ExampleCard title="Folder TeachingBanner" isOptIn={true} code={TeachingBannerBasicExampleCode}>
              <TeachingBannerBasicExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[require<string>('!raw-loader!@uifabric/experiments/src/components/TeachingBanner/TeachingBanner.types.ts')]}
          />
        }
        overview={<div />}
        bestPractices={<div />}
        dos={
          <div>
            <ul>
              <li />
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li />
            </ul>
          </div>
        }
        isHeaderVisible={this.props.isHeaderVisible}
      />
    );
  }
}
