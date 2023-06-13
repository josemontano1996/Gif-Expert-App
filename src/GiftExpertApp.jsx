import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GiftExpertApp = () => {
  //nunca poner hooks en condicionales
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = () => {
    setCategories(['Valorant', ...categories]);
    /*  setCategories(categories => ['Valorant', ...categories]); */
  };

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>

      {/* Input */}
      <AddCategory setCategories={setCategories}  />

      {/* Listado de Gifs*/}
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
      {/* Listado de gifs items */}
    </>
  );
};
