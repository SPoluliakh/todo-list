import { FormEvent } from 'react';
import * as SC from './ToDoForm.styled';

interface IProps {
  error: string;
  handleSubmit: (evt: FormEvent<HTMLFormElement>) => void;
}

export const ToDoForm = ({ error, handleSubmit }: IProps) => {
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
            style={{
              border:
                error === 'Field title is empty'
                  ? '1px solid red'
                  : '1px solid black',
            }}
          />

          {error === 'Field title is empty' && (
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
            style={{
              border:
                error === 'Field description is empty'
                  ? '1px solid red'
                  : '1px solid black',
            }}
          />

          {error === 'Field description is empty' && (
            <SC.ErrorText> This field is empty </SC.ErrorText>
          )}
        </SC.InnerWrap>
      </SC.Wrap>
      <SC.Button type="submit">Create</SC.Button>
    </SC.Form>
  );
};
