import { memo } from 'react';
import { ToDoListItem } from '../ToDoListItem/ToDoListItem';
import { ItoDo } from '../../../Helpers/interfaces/toDo.interface';
import * as SC from './ToDoList.styled';

interface IProps {
  list: ItoDo[] | [];
  handleToggleStatus: (id: number) => void;
}

export const ToDoList = memo(
  ({ handleToggleStatus, list }: IProps) => {
    return (
      <SC.Table>
        <SC.Head>
          <tr>
            <SC.TableHead>ID</SC.TableHead>
            <SC.TableHead>TITLE</SC.TableHead>
            <SC.TableHead>DESCRIPTION</SC.TableHead>
            <SC.TableHead>STATUS</SC.TableHead>
          </tr>
        </SC.Head>
        <tbody>
          {list.map(item => (
            <ToDoListItem
              key={item.id}
              item={item}
              handleToggleStatus={handleToggleStatus}
            />
          ))}
        </tbody>
      </SC.Table>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.list === nextProps.list;
  }
);
