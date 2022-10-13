import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Row,Col, Form, Input, Select ,message} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const { Option } = Select;
const App = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    message.success('Submit success!');
  };
  const onFinishFailed = (err) => {
    message.error('Submit failed!');
    console.log(err);
  };
  const onReset = () => {
    form.resetFields();
  };



  return (
    <Row style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#f0f2f5'}}>
    <Col  xs={22} sm={12} md={12}  lg={8} 
    style={{background:'#fff',padding:'40px 30px',borderRadius:'2px',boxShadow:'0 1px  5px  black'}}>
        <h3 style={{textAlign:'center',marginBottom:'10px'}}>  Ro'yxatdan o'tish</h3>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="phone"
       
          rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          placeholder="Phone number"
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
     

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" block>
          Ro'yxatdan o'tish
        </Button>
        <Button htmlType="button" onClick={onReset} block type='danger' style={{marginTop:'5px'}}>
           Tozalash
        </Button>

       <p style={{textAlign:'center',padding:'0',margin:'10px 0'}}> yoki <Link to="/login">Accountingiz bormi?</Link></p>
      </Form.Item>
    </Form>
    </Col>
    </Row>
  );
};

export default App;
const prefixSelector = (
    <Form.Item name="prefix" noStyle  initialValue={'94'} >
      <Select
       
       defaultValue="94"
        style={{
          width: 70,
        }}
      >
        <Option  value="94">94</Option>
        <Option value="93">93</Option>
        <Option value="88">88</Option>
        <Option value="90">90</Option>
        <Option value="99">99</Option>
        <Option value="97">97</Option>
        <Option value="95">95</Option>
        <Option value="91">91</Option>
      </Select>
    </Form.Item>
  );