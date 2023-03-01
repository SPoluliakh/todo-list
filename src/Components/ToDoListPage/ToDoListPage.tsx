import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { ToDoForm } from './ToDoForm/ToDoForm';
import { ToDoList } from './ToDoList/ToDoList';
import { ELocalStorage } from '../../Helpers/enums/ls.enum';
import { myStorage } from '../../Helpers/functions/myStorage';
import { ItoDo } from '../../Helpers/interfaces/toDo.interface';
import { useToggle } from '../../Helpers/huks/useToggle';

export const ToDoListPage = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
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

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget;
    name === 'title' ? setTitle(value) : setDescription(value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (title.trim() === '' || description.trim() === '') {
      setError('This field is empty');
      return;
    }

    const isInLocalStorage: boolean = myStorage(title, description);
    if (isInLocalStorage) {
      handleResetForm();
      handleToggle();
      return;
    }
    return;
  };

  const handleResetForm = () => {
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <>
      <ToDoForm
        error={error}
        title={title}
        description={description}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <ToDoList list={list} handleToggleStatus={handleToggleStatus} />
    </>
  );
};
