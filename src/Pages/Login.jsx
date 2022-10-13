import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, Col, message } from "antd";

import axios from "axios";

import React from "react";

import {  useNavigate } from "react-router-dom";


const App = () => {
  

  const navigate = useNavigate();
  const onFinish = async(values) => {
   await axios({
      method: "POST",
      url: "https://fitnessreg.herokuapp.com/api/admin/login",
      data: values,
    })
      .then((res) => {
        localStorage.setItem("admin", res.data.token);
        localStorage.setItem("name", res.data.name);

        if (res.status === 200) {
       
          navigate("/dashboard");
         
          window.location.reload();
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const onFinishFailed = (err) => {
    message.error("Submit failed!");
    console.log(err);
  };

  return (
    <Row
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#001529",
      }}
    >
      <Col
        xs={22}
        sm={12}
        md={12}
        lg={8}
        style={{
          background: "#fff",
          padding: "25px 20px",
          borderRadius: "2px",
          boxShadow: "0 1px  5px  white",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#001529",
            fontWeight: "bold",
          }}
        >
          {" "}
          Accountga kirish
        </h3>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              type="email"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Button
              style={{ marginBottom: "2px" }}
              type="primary"
              htmlType="submit"
              className="login-form-button "
              block
            >
              Accountga kirish
            </Button>
         
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default App;
