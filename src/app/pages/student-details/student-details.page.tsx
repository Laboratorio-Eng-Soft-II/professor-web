import { useParams } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { STUDENTS_BASE_URL } from "../../../core";
import { CenterView } from "../../../components/center-view/center-view.styles";
import {
  Card,
  Space,
  Typography,
  Input,
  Form,
  Select,
  Button,
  Spin,
} from "antd";
import { Colors } from "../../../theme";
import { StudentModel } from "../students";

interface RouteParams {
  nusp: string | undefined;
}

const { Title } = Typography;

export const StudentDetailsPage: React.FC = () => {
  const params = useParams();
  const [student, setStudent] = useState<StudentModel>();

  const { nusp } = params as unknown as RouteParams;

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${STUDENTS_BASE_URL}students/${nusp}`)
      .then((response) => setStudent(response.data));
  }, [nusp]);
  console.log(student, nusp);

  return (
    <CenterView>
      <Card
        bordered={false}
        style={{
          overflow: "scroll",
          height: "95%",
          width: "80%",
          maxHeight: "95%",
          justifyContent: "center",
          alignItems: "center",
        }}
        type="inner"
      >
        {!!student ? (
          <Space direction="vertical" style={{ width: "100%" }}>
            <Title level={2}>Detalhes do Aluno</Title>
            <Form layout="vertical">
              <Form.Item label="Nome">
                <Input
                  disabled
                  value={student?.name}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
              <Form.Item label="Curso">
                <Input.TextArea
                  disabled
                  value={student?.engineering}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
              <Form.Item label="Período atual">
                <Input
                  disabled
                  value={student?.current_quarter}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
              <Form.Item label="Habilidades">
                <Select
                  mode="multiple"
                  disabled
                  defaultValue={student?.skills}
                  options={student?.skills?.map((value) => {
                    return { value, label: value };
                  })}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
              <Form.Item label="NUSP">
                <Input
                  disabled
                  value={student?.nusp}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
              <Form.Item label="Email">
                <Input
                  disabled
                  value={student?.usp_email}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
              <Form.Item label="Telefone">
                <Input
                  disabled
                  value={student?.phone}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
            </Form>
          </Space>
        ) : (
          <Spin />
        )}
        <Button onClick={() => navigate(-1)}>Voltar</Button>
      </Card>
    </CenterView>
  );
};
