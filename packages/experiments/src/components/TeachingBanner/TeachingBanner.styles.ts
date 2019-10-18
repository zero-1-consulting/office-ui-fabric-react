import { ITeachingBannerComponent, ITeachingBannerStylesReturnType, ITeachingBannerTokenReturnType } from './TeachingBanner.types';
import { getGlobalClassNames } from '../../Styling';

const GlobalClassNames = {
  root: 'ms-TeachingBanner',
  icon: 'ms-TeachingBanner-icon',
  text: 'ms-TeachingBanner-text',
  actions: 'ms-TeachingBanner-actions'
};

// const primaryTokens: ITeachingBannerComponent['tokens'] = {
//   minHeight: 60
// };
// const baseTokens: ITeachingBannerComponent['tokens'] = {
//   // color: 'blue'
// };

// const warningTokens: ITeachingBannerComponent['tokens'] = {
//   // color: 'red'
// };

// const invertedTokens: ITeachingBannerComponent['tokens'] = {
//   // color: 'white'
// };

/**
 * {@docCategory TeachingBanner}
 */
export const TeachingBannerTokens: ITeachingBannerComponent['tokens'] = (props, theme): ITeachingBannerTokenReturnType => [
  // props.premium && primaryTokens
  // baseTokens
  // props.warning && warningTokens,
  // theme.isInverted && invertedTokens
];

/**
 * {@docCategory TeachingBanner}
 */
export const TeachingBannerStyles: ITeachingBannerComponent['styles'] = (props, theme, tokens): ITeachingBannerStylesReturnType => {
  const classNames = getGlobalClassNames(GlobalClassNames, theme);
  const color = tokens.color || theme.semanticColors.primaryButtonText;
  const background = tokens.background || theme.palette.themePrimary;

  return {
    root: [
      classNames.root,
      {
        paddingTop: 10,
        paddingRight: 14,
        paddingBottom: 11,
        paddingLeft: 14,
        width: '100%',
        minHeight: (props.premium && 60) || 40,
        borderRadius: 2,
        background,
        boxSizing: 'border-box'
      }
    ],
    icon: [
      classNames.icon,
      {
        fontSize: 24,
        marginRight: 6,
        marginLeft: 6,
        color
      }
    ],
    textContainer: [
      classNames.text,
      {
        color,
        selectors: {
          // TODO: Probably a better way to manage Link colors
          'a, a:hover, a:active, a:visited, a:active:hover': {
            color
          }
        }
      }
    ],
    actionsContainer: [classNames.actions, {}]
  };
};
