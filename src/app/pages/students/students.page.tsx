import React, { Fragment, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { STUDENTS_BASE_URL } from "../../../core";
import { Container } from "../home/home-styles";
import { LinkButton, Spacing } from "../../../theme";
import { AppPath } from "../../routes";
import { Hbox, Header, Separator, TextCard } from "../../../components";

export interface StudentModel {
  name: string;
  engineering: string;
  nusp: string;
  address: string;
  current_quarter: string;
  id: string;
  usp_email: string;
  phone: string;
  skills: string[];
}

export const StudentsPage: React.FC = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState<StudentModel[]>();

  useEffect(() => {
    axios
      .get(`${STUDENTS_BASE_URL}students`)
      .then((response) => setStudents(response.data));
  }, []);

  console.log(students);

  return (
    <Container>
      <Header title="Alunos" />

      {students?.map((student, index) => (
        <Fragment key={`${student}-${index}`}>
          <TextCard
            title={student.name + " - " + student.engineering}
            onClick={() => navigate(`${AppPath.students}/${student.nusp}`)}
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
