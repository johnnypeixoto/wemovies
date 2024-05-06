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
  padding: 16px;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
  background-color: #ffffff;
  border-radius: 4px;
  width: 100%;
`;

interface DescriptionProps {
  flexDirection?: string;
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
}

export const Description = styled.div<DescriptionProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Title = styled.span`
  font-size: 12px;
  color: #333333;
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

interface ActionsProps {
  flexDirection?: string;
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
}

export const Actions = styled.div<ActionsProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

interface ButtonProps {
  flexDirection?: string;
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  border: none;
  border-radius: 4px;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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

export const CountIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: #ffffff;
`;

interface SeparatorProps {
  marginAround: string;
}

export const Separator = styled.div<SeparatorProps>`
  display: flex;
  width: 100%;
  border-top: 1px solid #999999;
  margin-top: ${(props) => props.marginAround};
  margin-bottom: ${(props) => props.marginAround};
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
  @media (max-width: 532px) {
    display: ${(props) => (props.fontSize === "small" ? "block" : "none")};
  }
`;
