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
  const classNames = getGlobalClassNames(GlobalClassNames, theme);
  const { palette } = theme;
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
        minHeight: ((props.premium || props.actions) && 60) || 40,
        borderRadius: 2,
        color: tokens.color || palette.white,
        background,
        boxSizing: 'border-box'
      }
    ],
    iconPremium: [
      classNames.icon,
      {
        fontSize: 24,
        marginRight: 6,
        marginLeft: 6
      }
    ],
    textContainer: [classNames.text, props.multiline === false && { ...singleLineProps }],
    actionsContainer: [classNames.actions, { marginLeft: 'auto' }],
    dismiss: [
      classNames.dismiss,
      {
        position: 'absolute',
        right: 0,
        top: 0,
        margin: 8,
        width: 24,
        height: 24,
        selectors: {
          '.ms-Button-icon': {
            fontSize: 12,
            height: 12,
            lineHeight: 12
          },
          ':hover': {
            background: 'transparent'
          },
          ':active': {
            background: 'transparent'
          }
        }
      }
    ]
  };
};