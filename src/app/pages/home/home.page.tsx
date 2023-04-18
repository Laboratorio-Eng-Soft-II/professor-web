import React from "react";
import logoPoli from "../../../assets/LogoEPUSP.png";
import { CardsContainer, Container } from "./home-styles";
import {
  faBuilding,
  faSmile,
  faListAlt,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { CardItem } from "../../../components/card-item";
import { Typography, Space, ConfigProvider } from "antd";
import { AppPath } from "../../routes";

const { Title, Text } = Typography;

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ConfigProvider theme={{ token: { colorText: "#EBEBD3" } }}>
        <img
          width="100px"
          height="100px"
          src={logoPoli}
          alt="logo da Poli"
        ></img>
        <Space direction="vertical" align="center" style={{ width: "100%" }}>
          <Title>Internship 4.0 - Portal de estágios</Title>
          <Text style={{ textAlign: "center" }}>
            O Portal de Estágios é o Ecossistema de Talentos da Escola
            Politécnica da Universidade de São Paulo. Aqui a Escola, as Empresas
            e os Alunos transformam sonhos em realidades
          </Text>
          <CardsContainer>
            <CardItem
              icon={faBuilding}
              title="Empresas"
              onClick={() => navigate(AppPath.companies)}
            />
            <CardItem
              icon={faSmile}
              title="Alunos"
              onClick={() => navigate(AppPath.students)}
            />
            <CardItem
              icon={faListAlt}
              title="Vagas"
              onClick={() => navigate(AppPath.positions)}
            />
          </CardsContainer>
        </Space>
      </ConfigProvider>
    </Container>
  );
};
