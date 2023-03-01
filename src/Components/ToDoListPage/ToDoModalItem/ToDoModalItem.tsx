interface IProps {
  title: string;
  description: string;
  status: boolean;
  id: number;
  handleToggleStatus: (id: number) => void;
}

export const ToDoModalItem = ({
  title,
  description,
  status,
  id,
  handleToggleStatus,
}: IProps) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}> {title} </h2>
      <h3> Description: </h3>
      <p style={{ wordWrap: 'break-word' }}> {description} </p>
      <label>
        <input
          type="checkbox"
          onChange={() => handleToggleStatus(id)}
          checked={status}
        />
      </label>
    </div>
  );
};
