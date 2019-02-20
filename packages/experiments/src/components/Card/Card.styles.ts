import { ICardComponent, ICardStylesReturnType, ICardTokenReturnType } from './Card.types';
import { getGlobalClassNames } from '../../Styling';
import { Depths } from '@uifabric/fluent-theme';

const GlobalClassNames = {
  root: 'ms-Card',
  stack: 'ms-Card-stack'
};

const baseTokens: ICardComponent['tokens'] = {
  boxShadow: Depths.depth16,
  minWidth: '200px',
  maxWidth: '250px'
};

const compactTokens: ICardComponent['tokens'] = {
  minWidth: '300px',
  maxWidth: '500px'
};

const clickableTokens: ICardComponent['tokens'] = {
  boxShadowHovered: Depths.depth64
};

export const CardTokens: ICardComponent['tokens'] = (props, theme): ICardTokenReturnType => [
  baseTokens,
  props.compact && compactTokens,
  props.onClick && clickableTokens
];

export const CardStyles: ICardComponent['styles'] = (props, theme, tokens): ICardStylesReturnType => {
  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      {
        boxShadow: tokens.boxShadow,
        width: tokens.width,
        minWidth: tokens.minWidth,
        maxWidth: tokens.maxWidth,
        transition: 'box-shadow 0.2s ease',

        selectors: {
          ':hover': {
            boxShadow: tokens.boxShadowHovered
          }
        }
      }
    ],

    stack: [classNames.stack]
  };
};
