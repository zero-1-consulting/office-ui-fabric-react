import { ITeachingBannerComponent, ITeachingBannerStylesReturnType, ITeachingBannerTokenReturnType } from './TeachingBanner.types';
import { getGlobalClassNames } from '../../Styling';
import { IRawStyle } from '@uifabric/styling';

const GlobalClassNames = {
  root: 'ms-TeachingBanner',
  icon: 'ms-TeachingBanner-icon',
  headline: 'ms-TeachingBanner-headline',
  content: 'ms-TeachingBanner-content',
  actions: 'ms-TeachingBanner-actions',
  dismiss: 'ms-TeachingBanner-dismiss'
};

const singleLineProps: IRawStyle = { overflowX: 'hidden', whiteSpace: 'nowrap' };

/**
 * {@docCategory TeachingBanner}
 */
export const TeachingBannerTokens: ITeachingBannerComponent['tokens'] = (props, theme): ITeachingBannerTokenReturnType => [];

/**
 * {@docCategory TeachingBanner}
 */
export const TeachingBannerStyles: ITeachingBannerComponent['styles'] = (props, theme, tokens): ITeachingBannerStylesReturnType => {
  const classNames = getGlobalClassNames(GlobalClassNames, theme);
  const { palette } = theme;
  const { onDismiss, multiline = false } = props;
  const { gap = 20 } = tokens;

  return {
    root: [
      classNames.root,
      {
        position: 'relative',
        // paddingTop: 10,
        paddingRight: (onDismiss && 55) || 14,
        // paddingBottom: 11,
        paddingLeft: 14,
        width: '100%',
        minHeight: ((props.premium || props.actions) && 60) || 40,
        borderRadius: 2,
        color: tokens.color || palette.white,
        background: tokens.background || palette.themePrimary,
        boxSizing: 'border-box'
      }
    ],
    content: [
      classNames.content,
      (multiline && {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        marginTop: 14,
        marginBottom: 6
      }) || { ...singleLineProps }
    ],
    iconPremium: [
      classNames.icon,
      {
        fontSize: 24,
        marginRight: 6,
        marginLeft: 6
      }
    ],
    headline: [classNames.headline, { flexGrow: 1, fontWeight: 600 }], // marginTop: 16, marginRight: 16,
    actionsContainer: [
      classNames.actions,
      {
        // marginLeft: 'auto',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        selectors: {
          '.ms-Button': {
            marginLeft: gap
          }
        }
      }
    ],
    dismissButton: [
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
