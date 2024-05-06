import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  background-color: #2f2e41;
  grid-template-rows: 88px calc(100vh - 88px);
  grid-template-areas:
    "header"
    "pageview";
`;

export const PageView = styled.div`
  grid-area: "pageview";
  overflow-y: auto;
  background-color: #2f2e41;

  @media (min-width: 1080px) {
    width: 1080px;
    justify-self: center;
  }
`;
