import { DollarOutlined, LockOutlined, PhoneFilled, SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input,  notification, Space } from 'antd'
import axios from 'axios';
import React from 'react'

function AddUserForm({setAddUserModal,getData}) {

  const [form] = Form.useForm();
  const token = localStorage.getItem("admin")
 
async function dataUser(data) {
    await axios.post("https://fitnessreg.herokuapp.com/api/users", data,{headers:{
      'Authorization': `Bearer ${token}`
    }}).then((res) => {
      console.log(res);
      if (res.status === 200) {
        openNotification()
         setTimeout(()=>{
          setAddUserModal(false)
         },1000)
        form.resetFields()
      }
      getData()
    });
  }
  
  const onFinish = (values) => {
    dataUser(values)
 
  };
 
  const config = {
    rules: [{ type: "object", required: true, message: "Please select time!" }],
  
  };

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      duration:3,
      style:{background:'#32CD32',color:'#fff'},
      description:
        'User is add successfully.',
      icon: (
        <SmileOutlined
          style={{
            color: '#fff',
           
          }}
        />
      ),
    });
  };

  return (
    <>
    
  <Form
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    form={form}
   
    
  >
    <Form.Item
      name="firstname"
      rules={[
        {
          required: true,
          message: "Please input your Username!",
        },
      ]}
    >
      <Input 
        type={"text"}
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder="Ism"
      />
    </Form.Item>
    <Form.Item
      name="lastname"
      rules={[
        {
          required: true,
          message: "Please input His Surname!",
        },
      ]}
    >
      <Input
        type={"text"}
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder="Familiya"
      />
    </Form.Item>
    <Form.Item
      name="age"
      rules={[
        {
          required: true,
          message: "Please input His age!",
        },
      ]}
    >
      <Input
        type={"number"}
        prefix={<LockOutlined  className="site-form-item-icon" />}
        placeholder="Yoshi"
      />
    </Form.Item>

    <Form.Item
      name="phone"
      rules={[
        {
          required: true,
          message: "Please input His age!",
        },
      ]}
    >
      <Input
        type={"text"}
        prefix={<PhoneFilled className="site-form-item-icon" />}
        placeholder="Telefon"
      />
    </Form.Item>

    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Form.Item name="starttime" {...config}>
        <DatePicker
        picker='date'
          placeholder="Boshlagan vaqti"
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item name="endtime" {...config}>
        <DatePicker
          placeholder="Tugallanish vaqti"
          style={{
            width: "100%",
          }}
        />
      </Form.Item>
    </Space>
   
    <Form.Item
      name="price"
      rules={[
        {
          required: true,
          message: "Summani kiriting",
        },
      ]}
    >
      <Input
        type={"number"}
        prefix={<DollarOutlined className="site-form-item-icon" />}
        placeholder="Narxi"
      />
    </Form.Item>

    <Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        className="login-form-button"
        block
      >
        Saqlash
      </Button>
    </Form.Item>
  </Form></>
  )
}

export default AddUserForm