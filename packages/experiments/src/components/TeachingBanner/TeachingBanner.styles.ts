import { ITeachingBannerComponent, ITeachingBannerStylesReturnType, ITeachingBannerTokenReturnType } from './TeachingBanner.types';
import { getGlobalClassNames } from '../../Styling';
import { IRawStyle } from '@uifabric/styling';

const GlobalClassNames = {
  root: 'ms-TeachingBanner',
  icon: 'ms-TeachingBanner-icon',
  text: 'ms-TeachingBanner-text',
  actions: 'ms-TeachingBanner-actions',
  dismiss: 'ms-TeachingBanner-dismiss'
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

const singleLineProps: IRawStyle = { overflowX: 'hidden', whiteSpace: 'nowrap' };

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
  console.log(theme);

  const classNames = getGlobalClassNames(GlobalClassNames, theme);
  const { palette, fonts, semanticColors } = theme;
  const color = tokens.color || palette.white;
  const background = tokens.background || palette.themePrimary;

  return {
    root: [
      classNames.root,
      {
        position: 'relative',
        paddingTop: 10,
        paddingRight: 55,
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
      props.multiline === false && { ...singleLineProps },
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
    actionsContainer: [
      classNames.actions
      // {
      //   selectors: {
      //     '.ms-Button--primary': {
      //       backgroundColor: palette.white,
      //       borderColor: palette.white,
      //       color: palette.themePrimary,
      //       selectors: {
      //         '&:hover': {
      //           backgroundColor: palette.themeLighter,
      //           borderColor: palette.themeLighter,
      //           color: palette.themePrimary
      //         },
      //         '&:focus': {
      //           backgroundColor: palette.themeLighter,
      //           borderColor: palette.white
      //         },
      //         '&:active': {
      //           backgroundColor: palette.white,
      //           borderColor: palette.white,
      //           color: palette.themePrimary
      //         }
      //       }
      //     },
      //     '.ms-Button--default': {
      //       color: palette.white,
      //       backgroundColor: palette.themePrimary,
      //       borderColor: palette.white,
      //       selectors: {
      //         // '> .ms-Button-label': {
      //         //   color: palette.white
      //         // },
      //         '&:hover, &:focus': {
      //           color: palette.themePrimary,
      //           backgroundColor: palette.themeDarkAlt,
      //           borderColor: palette.white
      //           // selectors: {
      //           //   '> .ms-Button-label': {
      //           //     color: palette.themePrimary
      //           //   }
      //           // }
      //         },
      //         '&:active': {
      //           color: palette.white,
      //           backgroundColor: palette.themePrimary,
      //           borderColor: palette.white
      //           // selectors: {
      //           //   '> .ms-Button-label': {
      //           //     color: palette.white
      //           //   }
      //           // }
      //         }
      //       }
      //     }
      //   }
      // }
    ],
    dismiss: [
      classNames.dismiss,
      {
        position: 'absolute',
        right: 0,
        top: 0,
        margin: 8,
        // borderRadius: 0,
        color: palette.white,
        // fontSize: 12, // fonts.xSmall.fontSize,
        width: 24,
        height: 24,
        selectors: {
          '.ms-Button-icon': {
            fontSize: 12,
            height: 12,
            lineHeight: 12
          },
          ':hover': {
            // background: palette.themeDarkAlt,
            // color: palette.white
          },
          ':active': {
            // background: palette.themeDark,
            // color: palette.white
          }
        }
      }
    ]
  };
};
