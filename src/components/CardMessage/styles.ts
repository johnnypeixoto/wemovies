import { styled } from "styled-components";

export const RootContainer = styled.div`
  position: absolute;
  display: flex;
  width: calc(100% - 32px);
  left: 16px;
  @media (min-width: 1080px) {
    width: 100%;
    left: 0px;
  }
  align-items: center;
  justify-content: center;
  height: calc(100vh - 128px);
  background-color: #ffffff;
  border-radius: 4px;
  padding-bottom: -20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 64px 0px 64px;

  .card-message-text {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #2f2e41;
    margin-bottom: 24px;
  }

  .card-message-separator {
    width: 90%;
    border-top: 1px solid #2f2e41;
    @media (min-width: 1080px) {
      width: 120%;
    }
  }

  .card-message-actions-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-top: 24px;
  }

  .card-message-button {
    cursor: pointer;
    background-color: #009edd;
    width: 173px;
    height: 40px;
    border: none;
    border-radius: 4px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #009edd;
      opacity: 0.9;
    }
  }
`;
