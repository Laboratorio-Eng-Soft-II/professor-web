import { ButtonStyled } from "./button.styles";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  expanded?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  expanded,
  children,
  ...props
}) => {
  return (
    <ButtonStyled disabled={disabled} expanded={expanded} {...props}>
      {children}
    </ButtonStyled>
  );
};
