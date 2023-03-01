import { Modal } from '../../../Components/Modal/Modal';
import { ToDoModalItem } from '../ToDoModalItem/ToDoModalItem';
import { ItoDo } from '../../../Helpers/interfaces/toDo.interface';
import { useToggle } from '../../../Helpers/huks/useToggle';
import * as SC from './ToDoListItem.styled';

interface IProps {
  item: ItoDo | [];
  handleToggleStatus: (id: number) => void;
  key: number;
}

export const ToDoListItem = ({ item, handleToggleStatus }: IProps) => {
  const { id, title, description, status } = item as ItoDo;

  const { isToggle, handleToggle } = useToggle();

  return (
    <>
      <SC.TableRow onClick={handleToggle}>
        <SC.TD>{id}</SC.TD>
        <SC.TD>{title}</SC.TD>
        <SC.TD>{description.slice(0, 15) + '...'}</SC.TD>
        <SC.TD>
          <input
            type="checkbox"
            onChange={() => handleToggleStatus(id)}
            checked={status}
          />
        </SC.TD>
      </SC.TableRow>
      {isToggle && (
        <Modal toggleModal={handleToggle}>
          <ToDoModalItem
            title={title}
            description={description}
            status={status}
            id={id}
            handleToggleStatus={handleToggleStatus}
          />
        </Modal>
      )}
    </>
  );
};
