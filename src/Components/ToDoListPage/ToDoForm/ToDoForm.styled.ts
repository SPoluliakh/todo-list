import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export const Wrap = styled.div`
  display: inline-flex;
`;

export const InnerWrap = styled.div`
  position: relative;
  display: inline;

  :not(:last-child) {
    margin-right: 40px;
  }
`;

export const Input = styled.input`
  width: 200px;
  padding: 5px;
`;

export const Label = styled.label`
  display: block;
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: 10;
  left: 0;
  color: #93260b;
`;

export const Button = styled.button`
  margin-left: 15px;
  height: 28px;
`;
