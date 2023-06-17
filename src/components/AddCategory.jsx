import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChage = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;

    /*   setCategories((categories) => [inputValue, ...categories]); */
    onNewCategory(newInputValue);

    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Search for Gifs'
        value={inputValue}
        onChange={onInputChage}
      />
    </form>
  );
};
