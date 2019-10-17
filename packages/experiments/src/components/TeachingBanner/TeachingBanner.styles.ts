import { ITeachingBannerComponent, ITeachingBannerStylesReturnType, ITeachingBannerTokenReturnType } from './TeachingBanner.types';
import { getGlobalClassNames } from '../../Styling';

const GlobalClassNames = {
  root: 'ms-TeachingBanner',
  text: 'ms-TeachingBanner-text'
};

const baseTokens: ITeachingBannerComponent['tokens'] = {
  textColor: 'blue'
};

const warningTokens: ITeachingBannerComponent['tokens'] = {
  textColor: 'red'
};

/**
 * {@docCategory TeachingBanner}
 */
export const TeachingBannerTokens: ITeachingBannerComponent['tokens'] = (props, theme): ITeachingBannerTokenReturnType => [
  baseTokens,
  props.warning && warningTokens
];

/**
 * {@docCategory TeachingBanner}
 */
export const TeachingBannerStyles: ITeachingBannerComponent['styles'] = (props, theme, tokens): ITeachingBannerStylesReturnType => {
  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      classNames.root,
      {
        borderWidth: '1px',
        borderStyle: 'solid',
        margin: 8,
        padding: 8
      }
    ],
    text: [
      classNames.text,
      {
        color: tokens.textColor
      }
    ]
  };
};
