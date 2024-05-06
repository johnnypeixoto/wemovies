import { styled } from "styled-components";

export const RootContainer = styled.div`
  display: flex;
`;

interface ContainerProps {
  flexDirection?: string;
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
}

export const Container = styled.div<ContainerProps>`
  padding: 24px;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
  background-color: #ffffff;
  border-radius: 4px;
  width: 100%;

  @media (max-width: 532px) {
    padding: 16px;
  }

  .grid-test {
    display: grid;
    grid-template-columns: 91px 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas: "product product qdt qdt sub sub";
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 91px 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr auto;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "image title count count subtotal trash"
    "image price count count subtotal trash"
    "separator separator separator separator separator separator";

  .subtotal-area {
    grid-area: "subtotal";
    display: flex;
    align-items: center;

    @media (max-width: 532px) {
      grid-area: "subtotal";
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
  }

  @media (max-width: 532px) {
    display: grid;
    grid-template-columns: auto 1fr 1fr auto;
    grid-template-rows: auto auto auto;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "image title price trash"
      "image count subtotal subtotal"
      "separator separator separator separator";
  }
`;

export const ImageArea = styled.div`
  grid-area: "image";
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 16px 0px 0px 16px;
  grid-area: "title";

  @media (max-width: 532px) {
    grid-area: "title";
    display: flex;
    align-items: flex-start;
    padding: 4px 0px 16px 16px;
  }
`;

export const PriceArea = styled.div`
  display: flex;
  align-items: flex-start;
  grid-area: "price";
  padding: 4px 16px 16px 16px;
  @media (max-width: 532px) {
    padding: 0px;
    grid-area: "price";
    display: flex;
    align-items: center;
  }
`;

interface CheckoutButtonProps {
  flexDirection?: string;
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
  backgroundColor?: string;
}

export const CheckoutButton = styled.button<CheckoutButtonProps>`
  display: flex;
  border: none;
  border-radius: 4px;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
  width: 173px;
  height: 34px;
  @media (max-width: 532px) {
    width: 100%;
    height: 40px;
  }
  background-color: ${(props) =>
    props.backgroundColor === "primary" ? "#009EDD" : "#039B00"};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

interface TextButtonProps {
  textTransform: string;
  fontWeight: string;
}

export const TextButton = styled.span<TextButtonProps>`
  text-transform: ${(props) => props.textTransform};
  font-weight: ${(props) => props.fontWeight};
  font-size: 12px;
  color: #ffffff;
`;

export const Title = styled.span`
  font-size: 14px;
  color: #2f2e41;
  font-weight: bold;
`;

interface PriceProps {
  size?: string;
}

export const Price = styled.span<PriceProps>`
  font-size: ${(props) => props.size};
  font-weight: bold;
  color: #2f2e41;
`;

interface SeparatorProps {
  marginAround: string;
}

export const Separator = styled.div<SeparatorProps>`
  grid-area: "separator";
  display: flex;
  width: 100%;
  border-top: 1px solid #999999;
  margin-top: ${(props) => props.marginAround};
  margin-bottom: ${(props) => props.marginAround};
`;

export const CheckoutActions = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 532px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 16px;
  }
`;

interface TextHintProps {
  textTransform?: string;
  fontWeight?: string;
  fontSize?: string;
}

export const TextHint = styled.span<TextHintProps>`
  text-transform: ${(props) => props.textTransform};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => (props.fontSize === "normal" ? "14px" : "12px")};
  color: #999999;
  display: ${(props) => (props.fontSize === "small" ? "none" : "block")};
  @media (max-width: 532px) {
    display: ${(props) => (props.fontSize === "small" ? "block" : "none")};
  }
`;

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 14px;
`;

export const CheckoutIconButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`;

export const Count = styled.div`
  border: solid 1px #d9d9d9;
  width: 59px;
  height: 26px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 14px;
    color: #2f2e41;
  }
`;

export const Image = styled.img`
  width: 91px;
  @media (max-width: 532px) {
    width: 64px;
  }
`;

export const Thead = styled.div`
  display: grid;
  grid-template-columns: 91px 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  padding: 0px 0px 24px 0px;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas: "product product qdt qdt sub sub";
  @media (max-width: 532px) {
    display: none;
  }
`;
