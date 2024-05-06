import { styled } from "styled-components";

export const Container = styled.div`
  grid-area: "header";
  background-color: #2f2e41;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 0px 16px;

  a {
    text-decoration: none;
  }

  @media (min-width: 1080px) {
    width: 1080px;
    justify-self: center;
    padding: 0px;
  }

  span {
    font-weight: bold;
    color: #ffffff;
    font-size: 1rem;
  }

  .basket-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

  }

  .items-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 8px;


    span:first-child {
      font-size: 14px;
      font-weight: 500;
      color: #ffffff;
      display: none;
    }

    @media (min-width: 1080px) {
      span:first-child {
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        display: block;
      }
    }

    span {
      font-size: 12px;
      font-weight: 500;
      color: #999999;
    }
  }

  .basket-logo {
    padding: 8px;
  }
`;
