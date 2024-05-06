import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .card-message-image-size-control {
    width: 300px;
  }

  @media (max-width: 532px) {
    .card-message-image-size-control {
      width: 190px;
    }
  }

  @media (max-width: 1079px) {
    padding: 0px 16px 0px 16px;
  }
`;
