import {  LockOutlined, SyncOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Row, Col, Spin, } from "antd";

// import axios from "axios";

import React, { useEffect } from "react";

import {  useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from "../features/auth/authSlice";


const App = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector( (state) => state.auth)

  const navigate = useNavigate();
  const dispatch = useDispatch()
 
 

  useEffect(() => {
    if (isError) {
        console.log(message)
    }

    if (isSuccess || user) {
      navigate('/dashboard')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onFinish = (values) => {
     dispatch(login(values))
  
  };

  const onFinishFailed = (err) => {

    console.log(err);
  };
  const example={
   height:'100vh',
   width:'100%',
   display:'flex',
   justifyContent:'center',
  
  padding:' 30px 50px',
  
  background: 'rgba(0, 0, 0, 0.05)',
 
  }
  const antIcon = (
    <SyncOutlined
      style={{
        fontSize: 54,
      }}
      spin
    />
  );
  
  if (isLoading) {
    return  <div style={example} >
    <Spin indicator={antIcon}/>
  </div>
  }

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
