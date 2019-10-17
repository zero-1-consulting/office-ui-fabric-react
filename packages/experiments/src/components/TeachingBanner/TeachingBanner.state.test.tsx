import { act, renderHook } from 'react-hooks-testing-library';
import { useTeachingBannerState } from './TeachingBanner.state';

describe('TeachingBannerState', () => {
  test('should fall back to default values', () => {
    const { result } = renderHook(() => useTeachingBannerState({}));
    expect(result.current.clicks).toBe(0);
    expect(result.current.text).toBe('Click Me!');
  });

  test('should use default prop value', () => {
    const { result } = renderHook(() => useTeachingBannerState({ defaultText: 'defaultPropValue' }));
    expect(result.current.text).toBe('defaultPropValue');
  });

  test('should give prop value highest priority', () => {
    const { result } = renderHook(() => useTeachingBannerState({ text: 'propValue', defaultText: 'defaultPropValue' }));
    expect(result.current.text).toBe('propValue');
  });

  test('should increment clicks on callback', () => {
    const { result } = renderHook(() => useTeachingBannerState({}));
    expect(result.current.clicks).toBe(0);
    expect(result.current.onClick).toBeDefined();
    act(() => {
      result.current.onClick!();
    });
    expect(result.current.clicks).toBe(1);
  });
});
