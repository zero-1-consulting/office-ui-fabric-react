import { useCallback, useState } from 'react';
import { ITeachingBannerComponent, ITeachingBannerProps, ITeachingBannerViewProps } from './TeachingBanner.types';
import { useControlledState } from '../../Foundation';

/**
 * {@docCategory TeachingBanner}
 */
export const useTeachingBannerState: ITeachingBannerComponent['state'] = (
  props: Readonly<ITeachingBannerProps>
): ITeachingBannerViewProps => {
  const [iconPremium] = useControlledState(props, 'iconPremium', {
    defaultPropName: 'defaultIcon',
    defaultPropValue: 'Diamond'
  });

  // useCallback memoizes functions based on its dependency list to avoid unnecessarily mutating callback references.
  // It is important that any props and state used (like 'clicks' here) are also listed in the dependency array argument
  // to ensure that callbacks change when their dependencies do.
  // const _onClick = useCallback(() => {
  //   setClicks(clicks + 1);
  // }, [clicks]);

  const viewProps: ITeachingBannerViewProps = {
    ...props,
    iconPremium
    // dismiss
    // text,
    // clicks,
    // onClick: _onClick
  };

  return viewProps;
};
