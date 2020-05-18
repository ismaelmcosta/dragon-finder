import styled from 'styled-components';

export const Container = styled.div``;

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
    margin: 30px 0 25px 0;
  }

  h2 {
    margin: 10px 0 15px 0;
    font-weight: 700;
    font-size: 1.7rem;
    color: #444;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
    list-style: none;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }

    li {
      background-color: #fff;
      padding: 24px;
      border-radius: 8px;
      position: relative;
      img {
        width: 100%;
        height: auto;
      }
      strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;
      }

      strong:not(:first-child) {
        margin-top: 32px;
      }

      > span {
        background-color: #008489;
        color: #fff;
        font-weight: bold;
        padding: 3px 10px;
        border-radius: 4px;
      }

      button {
        position: absolute;
        right: 64px;
        bottom: 24px;
        border: 0;
        background-color: transparent;
        &:hover {
          opacity: 0.7;
        }
      }
      button.delete {
        right: 24px;
      }
    }
  }
`;
