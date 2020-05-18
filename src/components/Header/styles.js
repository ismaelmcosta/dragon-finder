import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
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

    margin-left: 30px;
    padding: 0 20px;

    &:hover {
      background: ${darken(0.03, '#008489')};
    }

    svg {
      margin-right: 10px;
    }
  }
  button.logout {
    background-color: #ef2e4f;
  }
`;
