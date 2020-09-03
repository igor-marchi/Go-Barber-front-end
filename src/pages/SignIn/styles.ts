import styled from 'styled-components';
import { shade } from 'polished';

import signInBg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  > form {
    margin: 80px 0;
    width: 340px;

    text-align: center;

    > h1 {
      margin-bottom: 24px;
    }

    > a {
      margin: 24px;
      display: block;
      color: #F4EDE8;

      text-decoration: none;

      transition: color 0.2s;

      &:hover{
        color: ${shade(0.2, '#F4EDE8')}
      }
    }


  }

  > a {
    display: flex;
    align-items: center;

    margin: 24px;
    display: block;
    color: #FF9000;

    text-decoration: none;

    transition: color 0.2s;

    &:hover{
      color: ${shade(0.2, '#FF9000')}
    }

    > svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBg}) no-repeat center;
  background-size: cover;
`;
