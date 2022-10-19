import {   PieChartOutlined,  SettingOutlined, TeamOutlined,  UserOutlined} from "@ant-design/icons";
import { Avatar, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Users", "0", <UserOutlined />),
  getItem("Statistics", "1", <PieChartOutlined />),
  getItem("Team", "2", <TeamOutlined />),
  getItem("Settings", "3", <SettingOutlined />),
];

const LayoutDIv = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

 
  function onClicked(e) {
    const path = items[e.key].label.toLowerCase();
    navigate(path);
  }
  useEffect(() => {
    // if (isError) {
    //   console.log(message)
    // }

    if (!user) {
      navigate('/login')
    }
  


    // dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  // eslint-disable-next-line no-sparse-arrays
  }, [user, navigate, dispatch])

  // if (isLoading) {
  //   return <Spinner />
  // }

  function logoutFunction(){
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            fontSize: "16px",
            height: "60px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
         
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[]}
          onClick={onClicked}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding:'0 20px',
            color:'black',
            display: "flex", alignItems: "center",justifyContent:'end' ,
          }}
        > <Avatar
        style={{
          backgroundColor: '#fff',
          marginRight:'5px',
          color:'#000'
        }}
        icon={<UserOutlined />}
      />
          <span style={{color:'#fff',fontSize:'20px',marginRight:'10px'}}>{user?.name.toUpperCase()}</span>
          <button onClick={logoutFunction}
            style={{ height: "30px",width:'70px',color:'black',fontWeight:'500',border:"none",  display: "flex", alignItems: "center" ,justifyContent:'center'}}
          >
            logout
          </button>
        </Header>
        <Content
          style={{
            margin: "0 8px",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: "10px 5px",
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
       
      </Layout>
    </Layout>
  );
};

export default LayoutDIv;
