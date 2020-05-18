import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  width: 50%;
  padding: 90px;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 30px;
  }
`;

export const Content = styled.div`
  width: 500px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  .logo {
    margin-bottom: 50px;
  }

  h2 {
    font-size: 40px;
    font-weight: bold;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    color: #777777;
    margin: 20px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: #fff;
      border: 1px solid #e6e6e6;

      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;

      &::placeholder {
        color: #666;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 50px;
      background: #008489;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#008489')};
      }

      svg {
        margin-right: 10px;
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
