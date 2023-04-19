import { useParams } from "react-router";
import { PositionModel } from "../positions";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { POSITIONS_BASE_URL, PROFESSORS_BASE_URL } from "../../../core";
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

interface RouteParams {
  cnpj: string | undefined;
  id: string | undefined;
}

const { Title } = Typography;

export const PositionDetailsPage: React.FC = () => {
  const params = useParams();
  const [position, setPosition] = useState<PositionModel>();

  const { id } = params as unknown as RouteParams;

  const navigate = useNavigate();

  const handlePositionStatus = (status: string) => {
    axios.post(`${PROFESSORS_BASE_URL}professors/positions/${id}`, 
      { approved: status }
    )
    .then(() => navigate(-1));
  };

  useEffect(() => {
    axios
      .get(`${POSITIONS_BASE_URL}positions/get/${id}`)
      .then((response) => setPosition(response.data));
  }, [id]);

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
        {!!position ? (
          <Space direction="vertical" style={{ width: "100%" }}>
            <Title level={2}>Detalhes da Vaga</Title>
            <Form layout="vertical">
              <Form.Item label="Título da vaga">
                <Input
                  disabled
                  value={position?.type}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
              <Form.Item label="Descrição da vaga">
                <Input.TextArea
                  disabled
                  value={position?.description}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
              <Form.Item label="Requisitos">
                <Select
                  mode="multiple"
                  disabled
                  defaultValue={position?.required_skills}
                  options={position?.required_skills?.map((value) => {
                    return { value, label: value };
                  })}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
              <Form.Item label="Atividades a serem realizadas">
                <Input.TextArea
                  disabled
                  value={position?.main_work}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
              <Form.Item label="Remuneração">
                <Input
                  disabled
                  value={"R$ " + position?.salary.toFixed(2).replace(".", ",")}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
            </Form>
          </Space>
        ) : (
          <Spin />
        )}
        <Space>
          <Button type="primary" onClick={() => handlePositionStatus('approved')}>
            Aprovar vaga
          </Button>
          <Button type="primary" danger onClick={() => handlePositionStatus('rejected')}>
            Recusar vaga
          </Button>
          <Button onClick={() => navigate(-1)}>Voltar</Button>
        </Space>
      </Card>
    </CenterView>
  );
};
