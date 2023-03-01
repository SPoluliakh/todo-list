import { ELocalStorage } from '../enums/ls.enum';
import { ItoDo } from '../interfaces/toDo.interface';

export const myStorage = (title: string, description: string): boolean => {
  const localStorageList = localStorage.getItem(
    ELocalStorage.toDoList
  ) as string;
  const list: ItoDo[] | [] = JSON.parse(localStorageList) || [];

  const newToDo: ItoDo = { title, description, status: false, id: list.length };

  const isInLocalStorage = list.some(
    item => item.title.toLocaleLowerCase() === title.toLowerCase()
  );
  if (isInLocalStorage) {
    alert('Already is in list');
    return false;
  }
  localStorage.setItem(
    ELocalStorage.toDoList,
    JSON.stringify([...list, newToDo])
  );
  return true;
};
