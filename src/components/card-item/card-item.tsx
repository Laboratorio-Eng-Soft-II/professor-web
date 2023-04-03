import React from "react";
import { CardContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Colors } from "../../theme";
import { Typography } from "antd";

interface CardProps {
  icon: IconProp;
  title: string;
  onClick?: () => void;
}

const { Title } = Typography;

export const CardItem: React.FC<CardProps> = ({ icon, title, onClick }) => {
  return (
    <CardContainer role="button" onClick={onClick}>
      <FontAwesomeIcon icon={icon} size="2x" color={Colors.primary} />
      <Title level={5}>{title}</Title>
    </CardContainer>
  );
};
