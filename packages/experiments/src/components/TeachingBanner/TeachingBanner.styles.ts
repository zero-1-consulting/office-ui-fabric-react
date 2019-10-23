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

// const singleLineProps: IRawStyle = { overflowX: 'hidden', whiteSpace: 'nowrap' };

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
        display: 'flex',
        alignItems: 'center',
        flexWrap: (multiline && 'wrap') || 'nowrap',
        // paddingTop: 10,
        paddingRight: (onDismiss && !multiline && 55) || 14,
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
      {
        display: 'flex',
        alignItems: 'center',
        overflowX: 'hidden',
        textOverflow: 'ellipsis',
        selectors: {
          '&>*:not(.ms-TeachingBanner-icon):not(.ms-TeachingBanner-heading)': {
            overflowX: 'hidden',
            textOverflow: 'ellipsis'
          }
        }
      },
      // { overflowX: 'hidden', textOverflow: 'ellipsis' },
      // !multiline && { ...singleLineProps }
      (multiline && {
        marginTop: 25,
        flexDirection: 'column',
        alignItems: 'flex-start'
      }) || { overflowX: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }
    ],
    iconPremium: [
      classNames.icon,
      // 'ms-StackItem',
      {
        flex: '0 0 auto',
        fontSize: 24,
        marginRight: 17,
        marginLeft: 6
      }
    ],
    headline: [
      classNames.headline,
      // 'ms-StackItem',
      { flex: '0 0 auto', marginRight: 16, fontWeight: 600 }
    ],
    actionsContainer: [
      classNames.actions,
      {
        marginLeft: 'auto',
        // marginBottom: 16,
        // justifyContent: 'flex-end',
        // alignSelf: 'flex-end',
        selectors: {
          '.ms-Button': {
            marginLeft: gap,
            marginTop: 14,
            marginBottom: 14
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
