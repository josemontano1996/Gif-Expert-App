import { useState } from 'react';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChage = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setCategories((categories) => [inputValue, ...categories]);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Buscar gifs' value={inputValue} onChange={onInputChage} />
    </form>
  );
};
