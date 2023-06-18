import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('<GifItem /> testing', () => {
  const title = 'One Piece';
  const url = `https://one-piece.com/onepunch.jpg`;

  test('Evaluate Snapshot`', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Should show img with the given URL and alt', () => {
    render(<GifItem title={title} url={url} />);
    /* screen.debug(); */

    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Must show component title', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
