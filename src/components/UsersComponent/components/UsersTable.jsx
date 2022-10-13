import { DeleteOutlined, EditFilled } from "@ant-design/icons";
import {  Button, message, Modal, Table, Tag,Typography } from "antd";
import axios from "axios";

import React, { useState } from "react";
const { Text, Title } = Typography;
function UsersTable({ data ,getData}) {

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [idUser,setIdUser]=useState(null)
  const token = localStorage.getItem("admin");
  const columns = [
    {
      title: "firstname",
      dataIndex: "firstname",
  
    },
    {
      title: "lastname",
      dataIndex: "lastname",
     
    },
    {
      title: "age",
      dataIndex: "age",
    
      sorter: {
        compare: (a, b) => a.age - b.age,
        multiple: 3,
      },
    },
    {
      title: "phone",
      dataIndex: "phone",
      align: 'center',
      key: "phone",
    },
    {
      title: "starttime",
      dataIndex: "starttime",
      align: 'center',
      key: "starttime",
      render: (starttime) => (
        <span>{starttime ? <Tag>{starttime.slice(0, 10)}</Tag> : ""}</span>
      ),
    },
    {
      title: "endtime",
      dataIndex: "endtime",
      align: 'center',
      key: "endtime",
      render: (endtime) => (
        <span>{endtime ? <Tag>{endtime.slice(0, 10)}</Tag> : ""}</span>
      ),
    },
    {
      title: "price",
      dataIndex: "price",
      align: 'center',
      key: "price",
      render: (price) => (
        <span>{price>=100000 ? <Tag style={{background:'#00684a',color:'#fff',width:'80px',border:'none'}}>{price + ' UZS'}</Tag> : 
        <Tag style={{background:'#C92222',color:'#fff',width:'80px',border:'none'}}>{price +' UZS'}</Tag>}</span>
      ),
    },
    {
      title: "Actions",
      align: 'center',
            render: (record) => {
              return (
                <>
                 <Button onClick={() => showModalEdit(record)}>
                    <EditFilled
                      style={{ color: "green" }}
    
                    />
                  </Button>
                  <Button onClick={() => showModalDelete(record)}>
                    <DeleteOutlined style={{ color: "red" }} />
                  </Button>
    
                </>
              );
            },
    }
  ];


  const showModalEdit=(data)=>{
     console.log(data);
  }

  const showModalDelete=(data)=>{
    setIsDeleteModalOpen(true)
    setIdUser(data._id)
    console.log(data);
 }
  async function deleteHandleOk(){
       await axios.delete(`https://fitnessreg.herokuapp.com/api/users/${idUser}`,{headers:{
        'Authorization': `Bearer ${token}`
       }})
       .then((res)=>{
        if(res.status===200){
          message.success('This user is deleted successfully ')
        }
        console.log(res);
        })
        setIsDeleteModalOpen(false)
        setIdUser(null)
        getData()

    };



  const handleOk = () => {
    setIsDeleteModalOpen(false);
    deleteHandleOk()
    setIdUser(null)
  };

  const handleCancel = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <Table
        
        size="small"
        rowKey={(row) => row._id}
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 6,
        }}
        scroll={{
          y: 600,
          x: 1000,
        }}
      />



     <Modal title="Delete User" visible={isDeleteModalOpen} onOk={handleOk} onCancel={handleCancel}
    
   
  
   
     > 
      <Title level={4} >Are you sure to delete this user from database ?</Title>
      <Title level={5}>Then click to <Text type="success" keyboard>OK button</Text></Title>
      <Title level={5}>Else click to <Text type="secondary" keyboard>Cancel button</Text></Title> 
     
    </Modal>

    </>
  );
}

export default UsersTable;
