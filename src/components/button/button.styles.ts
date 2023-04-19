import styled from "styled-components";
import { Border, Colors, FontSize, Spacing } from "../../theme";

interface ButtonStyledProps {
  expanded?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  outline: none;
  background-color: ${Colors.callToAction};
  color: white;
  font-weight: bold;
  font-size: ${FontSize.md};
  padding: ${Spacing.Small} ${Spacing.Medium};
  border-style: solid;
  border-width: ${Border.Width};
  border-radius: ${Border.Radius};
  width: ${(props) => (props.expanded ? "100%" : "auto")};
  min-height: 30px;
  cursor: pointer;
`;
