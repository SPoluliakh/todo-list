import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: #8080801a;
`;

export const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  max-width: 1200px;
  max-height: auto;
  background-color: white;
  padding: 10px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;

  border: none;
  outline: none;
  cursor: pointer;
  transition: 250ms linear;

  :hover {
    color: red;
  }
`;
