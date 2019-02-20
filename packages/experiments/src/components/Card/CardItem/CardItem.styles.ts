import { getGlobalClassNames } from '../../../Styling';
import { ICardItemComponent, ICardItemStylesReturnType, ICardItemStyles } from './CardItem.types';

const GlobalClassNames = {
  root: 'ms-CardItem'
};

export const CardItemStyles: ICardItemComponent['styles'] = (props, theme): ICardItemStylesReturnType => {
  const { align, disableChildPadding, grow, shrink, basis } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      theme.fonts.medium,
      classNames.root,
      {
        width: 'auto',
        height: 'auto',
        padding: 12,
        overflow: 'hidden'
      },
      disableChildPadding && {
        padding: 0
      },
      grow && { flexGrow: grow === true ? 1 : grow },
      !grow &&
        !shrink && {
          flexShrink: 0
        },
      shrink && {
        flexShrink: 1
      },
      align && {
        justifySelf: align
      },
      basis && {
        flexBasis: basis
      }
    ]
  } as ICardItemStyles;
};
