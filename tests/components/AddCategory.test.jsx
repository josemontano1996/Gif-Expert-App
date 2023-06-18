import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('<AddCategory /> testing', () => {
  const inputValue = 'One Punch';
  const onNewCategory = jest.fn();

  test('Must change the value of the input', () => {
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
    /* screen.debug(); */
  });

  test('Must call onNewCategory if input has a value', () => {
    render(<AddCategory onNewCategory={onNewCategory} />);
  
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
  
    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
  
    expect(input.value).toBe('');
  
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });
  test('Must NOT call onNewCategory if input has an empty value', () => {
    
    const onNewCategory = jest.fn();
    
    render(<AddCategory onNewCategory={onNewCategory} />);
  
    const form = screen.getByRole('form');
  
    fireEvent.submit(form);
  
    expect(onNewCategory).toHaveBeenCalledTimes(0);
   
  });
});
