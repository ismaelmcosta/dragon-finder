import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 40px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }

  h1 {
    padding: 80px 0 25px 0;
    text-align: center;
  }
`;

export const ContentBox = styled.div`
  min-height: 600px;
  border-radius: 20px;
  margin: 0 auto;
  background-color: #fff;

  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
    border: 2px solid #dcdce6;
    outline: 1px solid transparent;
    outline-offset: -10px;
    transition: all 0.4s;
  }

  form textarea {
    width: 100%;
    height: 140px;
    color: #333;
    resize: vertical;
    border: 1px solid #dcdce6;
    line-height: 24px;
    border-radius: 8px;
    padding: 24px;
    border: 2px solid #dcdce6;
    outline: 1px solid transparent;
    outline-offset: -10px;
    transition: all 0.4s;
  }

  form input:focus,
  form textarea:focus {
    border: 2px solid #008489;
    outline: 1px solid transparent;
    outline-offset: -10px;
  }

  form {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;

    label {
      display: block;
      margin-top: 20px;
    }
    input,
    textarea {
      margin-top: 8px;
    }
    div.buttons-group {
      display: flex;
      flex-direction: row;
      button.cancel {
        background-color: #dcdce6;
        color: #333;
      }
      button + button {
        margin-left: 14px;
        background-color: ${props => props.cancel && '#dcdce6'};
      }
    }
  }

  button {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    background: #008489;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 5px;
    font-size: 16px;
    transition: background 0.2s;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 0 20px;

    &:hover {
      background: ${darken(0.03, '#008489')};
    }
  }
`;
