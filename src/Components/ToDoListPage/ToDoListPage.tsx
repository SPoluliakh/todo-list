import { FormEvent, useState, useEffect } from 'react';
import { ToDoForm } from './ToDoForm/ToDoForm';
import { ToDoList } from './ToDoList/ToDoList';
import { ELocalStorage } from '../../Helpers/enums/ls.enum';
import { myStorage } from '../../Helpers/functions/myStorage';
import { ItoDo } from '../../Helpers/interfaces/toDo.interface';
import { useToggle } from '../../Helpers/huks/useToggle';

interface FormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  description: HTMLInputElement;
}

export const ToDoListPage = () => {
  const [error, setError] = useState<string>('');
  const [list, setList] = useState<ItoDo[] | []>([]);

  const { isToggle, handleToggle } = useToggle();

  useEffect(() => {
    const LocalStorageList = localStorage.getItem(
      ELocalStorage.toDoList
    ) as string;
    const myList: ItoDo[] | [] = JSON.parse(LocalStorageList) || [];
    setList(myList);
  }, [isToggle]);

  const handleToggleStatus = (id: number) => {
    const newList = list.map(toDo => {
      if (toDo.id !== id) return toDo;

      return { ...toDo, status: !toDo.status };
    });

    localStorage.setItem(ELocalStorage.toDoList, JSON.stringify(newList));
    handleToggle();
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const elements = evt.currentTarget.elements as FormElements;
    const { title, description } = elements;

    if (title.value.trim() === '') {
      setError('Field title is empty');
      return;
    }

    if (description.value.trim() === '') {
      setError('Field description is empty');
      return;
    }

    const isInLocalStorage: boolean = myStorage(title.value, description.value);
    if (isInLocalStorage) {
      evt.currentTarget.reset();
      setError('');
      handleToggle();
      return;
    }
    return;
  };

  return (
    <>
      <ToDoForm error={error} handleSubmit={handleSubmit} />
      <ToDoList list={list} handleToggleStatus={handleToggleStatus} />
    </>
  );
};
