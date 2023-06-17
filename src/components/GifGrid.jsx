import { useEffect, useState } from 'react';

import { useFecthGifs } from '../hooks/useFecthGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFecthGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Loading...</h2>}

      <div className='card-grid'>
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
