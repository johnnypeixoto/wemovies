import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;

  @media (max-width: 532px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    padding: 0px 16px 16px 16px;
  }
  @media (min-width: 533px) and (max-width: 1079px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    padding: 0px 16px 16px 16px;
  }
  @media (min-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
    row-gap: 24px;
  }

  .load-bg-spinner {
    position: absolute;
    display: none;
    background-color: #2f2e41;
    display: flex;
    width: 100%;
    height: calc(100vh - 88px);
    z-index: 1;
  }

  .load-spinner {
    position: absolute;
    left: calc(50% - 31px);
    top: 16px;
    display: block;
    width: 62px;
    height: 62px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 1s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
