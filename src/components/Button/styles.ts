import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  margin-top: 16px;

  background: #FF9000;
  color: #312E38;

  border-radius: 10px;
  border: 0;
  padding: 0 16px;

  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#FF9000')};
  }

`;
