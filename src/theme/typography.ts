import styled from "styled-components";
import {
  Border,
  Colors,
  FontFamily,
  FontSize,
  FontWeight,
  Spacing,
} from "./theme";

export const Label = styled.p`
  font-family: ${FontFamily.PRIMARY};
  color: ${Colors.primary};
  font-weight: ${FontWeight.Bold};
  text-align: center;
`;

type TextAlign = "center" | "left" | "right" | "inherit";

interface TextProps {
  textAlign?: TextAlign;
}

export const H1 = styled.h1<TextProps>`
  font-family: ${FontFamily.PRIMARY};
  text-align: ${(props) => props.textAlign ?? "inherit"};
  color: ${Colors.primary};
  margin: 0;
`;

export const H2 = styled.h2<TextProps>`
  font-family: ${FontFamily.PRIMARY};
  text-align: ${(props) => props.textAlign ?? "inherit"};
  color: ${Colors.primary};
  margin: 0;
`;

export const H3 = styled.h3<TextProps>`
  font-family: ${FontFamily.PRIMARY};
  text-align: ${(props) => props.textAlign ?? "inherit"};
  color: ${Colors.primary};
  margin: 0;
`;

export const Body = styled.p<TextProps>`
  font-family: ${FontFamily.PRIMARY};
  font-weight: ${FontWeight.Regular};
  text-align: ${(props) => props.textAlign ?? "inherit"};
  color: ${Colors.primary};
  margin: 0;
`;

export const LinkButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  color: ${(props) => props.color ?? "white"};
  font-weight: bold;
  font-size: ${FontSize.md};
  padding: ${Spacing.Small} ${Spacing.Medium};
  border-style: solid;
  border-width: ${Border.Width};
  border-radius: ${Border.Radius};
  cursor: pointer;
`;
