import React, { Fragment, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { POSITIONS_BASE_URL } from "../../../core";
import { CardsContainer, Container } from "../home/home-styles";
import { LinkButton, Spacing } from "../../../theme";
import { AppPath } from "../../routes";
import { Hbox, Separator, TextCard } from "../../../components";
import { CardItem } from "../../../components/card-item";
import { faCheck, faListAlt, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

export interface PositionModel {
  type: string;
  description: string;
  required_skills: string[];
  main_work: string;
  salary: number;
  id: string;
  cnpj: string;
  benefits: string;
  approved: string;
}

export const PositionsPage: React.FC = () => {
  const navigate = useNavigate();

  const [positions, setPositions] = useState<PositionModel[]>();

  useEffect(() => {
    axios.get(`${POSITIONS_BASE_URL}positions`)
      .then((response) => setPositions(response.data));
  }, []);

  const FilterPositionsByStatus = (status: string) => {
    axios.get(`${POSITIONS_BASE_URL}positions`)
      .then((response) => {
        setPositions(response.data.filter((position: PositionModel) => position.approved === status))
      });
  }

  return (
    <Container>
      <CardsContainer>
        <CardItem
          icon={faXmarkCircle}
          title="Recusadas"
          onClick={() => FilterPositionsByStatus('rejected')}
        />
        <CardItem
          icon={faListAlt}
          title="Pendentes"
          onClick={() => FilterPositionsByStatus('pending')}
        />
        <CardItem
          icon={faCheck}
          title="Aprovadas"
          onClick={() => FilterPositionsByStatus('approved')}
        />
      </CardsContainer>

      <Separator />

      {positions?.map((position, index) => (
        <Fragment key={`${position}-${index}`}>
          <TextCard
            title={position.type + " - " + position.description}
            onClick={() => navigate(`${AppPath.positions}/${position.id}`)}
          />
          <Separator size={Spacing.Small} />
        </Fragment>
      ))}
      <Hbox>
        <Hbox.Item>
          <LinkButton onClick={() => navigate(AppPath.home)}>Voltar</LinkButton>
        </Hbox.Item>
      </Hbox>
    </Container>
  );
};
