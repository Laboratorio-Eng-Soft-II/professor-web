import { Alert, AlertProps } from "antd";
import { FlashMessageContainer } from "./flash-message.style";

interface FlashMessageProps extends AlertProps {}

export const FlashMessage: React.FC<FlashMessageProps> = ({ ...props }) => {
  return (
    <FlashMessageContainer>
      <Alert {...props} />
    </FlashMessageContainer>
  );
};
