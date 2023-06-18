import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('GifItem testing', () => {
  const title = 'One Piece';
  const url = 'Demo.url';

  test('Evaluate Snapshot`', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  
});
