import { TextCardContainer } from "./styles";
import { Label } from "../../theme";

interface TextCardProps {
  title: string;
  onClick?: () => void;
}

export const TextCard: React.FC<TextCardProps> = ({ title, onClick }) => {
  return (
    <TextCardContainer role="button" onClick={onClick}>
      <Label>{title}</Label>
    </TextCardContainer>
  );
};
