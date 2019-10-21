import { renderHook } from 'react-hooks-testing-library';
import { useTeachingBannerState } from './TeachingBanner.state';

describe('TeachingBannerState', () => {
  test('should fall back to default values', () => {
    const { result } = renderHook(() => useTeachingBannerState({}));
    expect(result.current.iconPremium).toBe(result.current.defaultPremiumIcon);
  });

  test('should use default prop value', () => {
    const { result } = renderHook(() => useTeachingBannerState({ defaultPremiumIcon: 'Emoji2' }));
    expect(result.current.iconPremium).toBe('Emoji2');
  });

  test('should give prop value highest priority', () => {
    const { result } = renderHook(() => useTeachingBannerState({ iconPremium: 'Emoji', defaultPremiumIcon: 'Emoji2' }));
    expect(result.current.iconPremium).toBe('Emoji');
  });
});
