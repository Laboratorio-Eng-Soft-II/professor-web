import styled from "styled-components";
import { Spacing } from "../../theme";

interface SeparatorProps {
  size?: Spacing;
  horizontal?: boolean;
}

export const Separator = styled.div<SeparatorProps>`
  ${(props) =>
    props.horizontal
      ? `margin: 0 ${props.size ?? Spacing.Medium}`
      : `margin: ${props.size ?? Spacing.Medium} 0`};
`;

interface BoxProps {
  grow?: boolean;
  hAlign?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit"
    | "space-between";
  vAlign?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  minWidth?: string;
  maxWidth?: string;
}

export const VBox = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.hAlign ?? "stretch"};
  align-items: ${(props) => props.vAlign ?? null};
`;

export const HboxStyled = styled.div<BoxProps>`
  display: flex;
  flex-direction: row;
  ${(props) => (props.grow ? "flex: 1;" : null)}
  justify-content: ${(props) => props.hAlign ?? "stretch"};
  align-items: ${(props) => props.vAlign ?? null};
  width: 100%;
`;
export const Hbox: any = HboxStyled;

Hbox.displayName = "Hbox";

Hbox.Item = styled.div<BoxProps>`
  flex-direction: column;
  display: flex;
  min-width: ${(props) => (props.minWidth ? props.minWidth : "auto")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "auto")};
  ${(props) => (props.grow ? "flex: 1;" : null)}
  justify-content: ${(props) => (props.vAlign ? props.vAlign : "flex-start")};
  align-items: ${(props) => (props.hAlign ? props.hAlign : "stretch")};
`;
Hbox.Item.displayName = "Hbox.Item";

interface HboxSeparatorProps {
  small?: boolean;
  large?: boolean;
}

Hbox.Separator = styled.div<HboxSeparatorProps>`
  width: ${(props) =>
    props.small
      ? Spacing.Small
      : props.large
      ? Spacing.XLarge
      : Spacing.Medium};
`;
Hbox.Separator.displayName = "Hbox.Separator";
