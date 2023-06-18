import { renderHook, waitFor } from '@testing-library/react';
import { useFecthGifs } from '../../src/hooks/useFecthGifs';

describe('useFetchGifs Hook testing', () => {
  test('Must return initial state', () => {
    const { result } = renderHook(() => useFecthGifs('One Punch'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Must return an array of images and isLoading = false', async () => {
    const { result } = renderHook(() => useFecthGifs('OnePunch'));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
