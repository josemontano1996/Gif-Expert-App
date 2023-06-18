import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFecthGifs } from '../../src/hooks/useFecthGifs';

jest.mock('../../src/hooks/useFecthGifs');

describe('<GifGrid /> testing', () => {
  const category = 'One Punch';

  test('Must show loading at the beginning', () => {
    useFecthGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  });

  test('Must show items when useFetchGifs has charged', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'One Puch',
        url: 'https://Onepunch.com',
      },
      { id: 'JONS', title: 'Saitama', url: 'https://saitama.com' },
    ];

    useFecthGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2); 
  });
});
