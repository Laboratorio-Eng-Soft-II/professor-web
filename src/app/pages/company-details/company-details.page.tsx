import { useParams } from "react-router";
import { useNavigate } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import { COMPANIES_BASE_URL } from "../../../core";
import { CenterView } from "../../../components/center-view/center-view.styles";
import { Card, Space, Typography, Input, Form, Button, Spin } from "antd";
import { Colors } from "../../../theme";
import { CompanyModel } from "../companies";

interface RouteParams {
  cnpj: string | undefined;
}

const { Title } = Typography;

export const CompanyDetailsPage: React.FC = () => {
  const params = useParams();
  const [company, setCompany] = useState<CompanyModel>();

  const { cnpj } = params as unknown as RouteParams;

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${COMPANIES_BASE_URL}companies/${cnpj}`)
      .then((response) => setCompany(response.data));
  }, [cnpj]);

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
        {!!company ? (
          <Space direction="vertical" style={{ width: "100%" }}>
            <Title level={2}>Detalhes da Empresa</Title>
            <Form layout="vertical">
              <Form.Item label="Nome">
                <Input
                  disabled
                  value={company?.corporateName}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
              <Form.Item label="Área">
                <Input.TextArea
                  disabled
                  value={company?.field}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
              <Form.Item label="Endereço">
                <Input
                  disabled
                  value={company?.address}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
              <Form.Item label="Telefone">
                <Input
                  disabled
                  value={company?.phone}
                  style={{ color: Colors.black }}
                />
              </Form.Item>
              <Form.Item label="Email">
                <Input
                  disabled
                  value={company?.hrContactEmail}
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
