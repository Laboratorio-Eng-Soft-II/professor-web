import { Card, Space, Form, Input, Typography, Button } from "antd";
import React, { useState } from "react";
import { CenterView } from "../../../components/center-view/center-view.styles";
import { useNavigate } from "react-router-dom";
import { AppPath } from "../../routes";
import axios from "axios";
import { FlashMessage } from "../../../components/flash-message";
import { PROFESSORS_BASE_URL } from "../../../core/base-urls";

const { Title, Text } = Typography;

interface IForm {
  name: string;
  email: string;
  nusp: string;
  phone: string;
  department: string;
  password: string;
}

export const SignUpPage = () => {
  const [form] = Form.useForm<IForm>();

  const [showFlash, setShowFlash] = useState(false);

  const navigate = useNavigate();

  const onFinish = async (values: IForm) => {
    const { email, name, nusp, phone, department, password } = values;

    await axios.post(`${PROFESSORS_BASE_URL}professors`, {
      nusp,
      name,
      email,
      phone,
      department,
      password
    });

    setShowFlash(true);
  };
  return (
    <CenterView>
      {showFlash && (
        <FlashMessage
          type="success"
          message="Coordenador cadastrado com sucesso"
          showIcon
          action={
            <Button type="link" onClick={() => navigate(AppPath.login)}>
              IR PARA LOGIN
            </Button>
          }
          afterClose={() => setShowFlash(false)}
        />
      )}
      <Card
        bordered={false}
        style={{ overflow: "scroll", maxHeight: "95%", width: "80%" }}
        type="inner"
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Title level={2}>Cadastro</Title>
          <Text>
            Preencha as informações para fazer seu cadastro na plataforma
          </Text>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Nome"
              name="name"
              rules={[
                { required: true, message: "Por favor, digite seu nome" },
              ]}
            >
              <Input placeholder="Digite seu nome" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Por favor, digite seu email" },
              ]}
            >
              <Input placeholder="email@usp.br" />
            </Form.Item>
            <Form.Item
              label="NUSP"
              name="nusp"
              rules={[
                { required: true, message: "Por favor, digite seu NUSP" },
              ]}
            >
              <Input placeholder="Seu número USP" />
            </Form.Item>

            <Form.Item
              label="Telefone"
              name="phone"
              rules={[
                { required: true, message: "Por favor, digite seu telefone" },
              ]}
            >
              <Input placeholder="Seu telefone" />
            </Form.Item>

            <Form.Item name="department" label="Departamento">
              <Input placeholder="Digite seu departamento" />
            </Form.Item>

            <Form.Item
              rules={[
                { required: true, message: "Por favor, digite uma senha" },
              ]}
              name="password"
              label="Senha"
              style={{ width: "100%" }}
            >
              <Input.Password placeholder="Senha para acesso à plataforma" />
            </Form.Item>

            <Form.Item>
              <Space>
                <Button htmlType="submit" type="primary">
                  Cadastrar
                </Button>
                <Button type="text" onClick={() => navigate(AppPath.login)}>
                  Ir para login
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </CenterView>
  );
};
