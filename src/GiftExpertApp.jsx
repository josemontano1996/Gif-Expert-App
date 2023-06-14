import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './GifGrid';

export const GiftExpertApp = () => {
  //nunca poner hooks en condicionales
  const [categories, setCategories] = useState(['Dragon Ball']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    /*  setCategories(categories => ['Valorant', ...categories]); */
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
