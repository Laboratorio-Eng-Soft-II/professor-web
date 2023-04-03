import React from "react";
import { Space, Button, Input, Form, Typography, Card } from "antd";
import { CenterView } from "../../../components/center-view/center-view.styles";

const { Title, Text } = Typography;

interface IForm {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const [form] = Form.useForm<IForm>();

  const onFinish = (values: IForm) => {
    console.log(values);
  };

  return (
    <CenterView>
      <Card bordered={false}>
        <Space direction="vertical">
          <Title level={2}>Login</Title>
          <Text>Digite as informações para fazer login na plataforma</Text>
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Por favor, digite seu email" },
              ]}
            >
              <Input placeholder="Digite seu email" />
            </Form.Item>
            <Form.Item
              label="Senha"
              name="password"
              rules={[
                { required: true, message: "Por favor, digite sua senha" },
              ]}
            >
              <Input.Password placeholder="Digite sua senha" />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button htmlType="submit" type="primary">
                  Login
                </Button>
                <Button type="text">Fazer cadastro</Button>
              </Space>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </CenterView>
  );
};
