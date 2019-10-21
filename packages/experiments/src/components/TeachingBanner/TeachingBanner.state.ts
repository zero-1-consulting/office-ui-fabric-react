import { ITeachingBannerComponent, ITeachingBannerProps, ITeachingBannerViewProps } from './TeachingBanner.types';
import { useControlledState } from '../../Foundation';

/**
 * {@docCategory TeachingBanner}
 */
export const useTeachingBannerState: ITeachingBannerComponent['state'] = (
  props: Readonly<ITeachingBannerProps>
): ITeachingBannerViewProps => {
  const [iconPremium] = useControlledState(props, 'iconPremium', {
    defaultPropName: 'defaultPremiumIcon',
    defaultPropValue: 'Diamond'
  });

  const viewProps: ITeachingBannerViewProps = {
    ...props,
    iconPremium
  };

  return viewProps;
};
