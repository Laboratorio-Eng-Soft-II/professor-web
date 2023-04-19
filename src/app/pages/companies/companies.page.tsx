import React, { Fragment, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANIES_BASE_URL } from "../../../core";
import { Container } from "../home/home-styles";
import { LinkButton, Spacing } from "../../../theme";
import { AppPath } from "../../routes";
import { Hbox, Header, Separator, TextCard } from "../../../components";

export interface CompanyModel {
  corporateName: string;
  field: string;
  cnpj: string;
  address: string;
  phone: string;
  id: string;
  hrContactName: string;
  hrContactEmail: string;
  hrContactPhone: string;
}

export const CompaniesPage: React.FC = () => {
  const navigate = useNavigate();

  const [companies, setCompanies] = useState<CompanyModel[]>();

  useEffect(() => {
    axios
      .get(`${COMPANIES_BASE_URL}companies`)
      .then((response) => setCompanies(response.data));
  }, []);

  return (
    <Container>
      <Header title="Todas as empresas" />

      {companies?.map((company, index) => (
        <Fragment key={`${company}-${index}`}>
          <TextCard
            title={company.corporateName + " - " + company.field}
            onClick={() => navigate(`${AppPath.companies}/${company.cnpj}`)}
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
