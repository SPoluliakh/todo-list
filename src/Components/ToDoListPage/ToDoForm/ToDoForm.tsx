import { ChangeEvent, FormEvent } from 'react';
import * as SC from './ToDoForm.styled';

interface IProps {
  error: string;
  title: string;
  description: string;
  handleInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (evt: FormEvent<HTMLFormElement>) => void;
}

export const ToDoForm = ({
  error,
  title,
  description,
  handleInputChange,
  handleSubmit,
}: IProps) => {
  return (
    <SC.Form onSubmit={handleSubmit}>
      <SC.Wrap>
        <SC.InnerWrap>
          <SC.Label htmlFor="title">Title:</SC.Label>
          <SC.Input
            id="title"
            type="text"
            placeholder="Enter title"
            name="title"
            value={title}
            onChange={handleInputChange}
            style={{
              border:
                error && title.trim() === ''
                  ? '1px solid red'
                  : '1px solid black',
            }}
          />

          {error && title.trim() === '' && (
            <SC.ErrorText> This field is empty </SC.ErrorText>
          )}
        </SC.InnerWrap>
        <SC.InnerWrap>
          <SC.Label htmlFor="description">Description:</SC.Label>
          <SC.Input
            id="description"
            type="text"
            placeholder="Enter description"
            name="description"
            value={description}
            onChange={handleInputChange}
            style={{
              border:
                error && description.trim() === ''
                  ? '1px solid red'
                  : '1px solid black',
            }}
          />

          {error && description.trim() === '' && (
            <SC.ErrorText> This field is empty </SC.ErrorText>
          )}
        </SC.InnerWrap>
      </SC.Wrap>
      <SC.Button type="submit">Create</SC.Button>
    </SC.Form>
  );
};
