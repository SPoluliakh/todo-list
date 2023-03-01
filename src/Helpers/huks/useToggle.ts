import { useState, MouseEvent } from 'react';

export const useToggle = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleToggle = (evt?: MouseEvent<HTMLElement>): void => {
    if (
      evt?.target instanceof HTMLInputElement &&
      evt.target.type === 'checkbox'
    ) {
      return;
    }
    setIsToggle(prevState => !prevState);
  };

  return { isToggle, handleToggle };
};
