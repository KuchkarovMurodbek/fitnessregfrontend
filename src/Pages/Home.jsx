import { LoginOutlined, SlackOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
import React from "react";

import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout className="layout" style={{ height: "100%" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          background:'#001529'
        }}
      >
        <div style={{ color: '#fff', fontSize: "24px" }}>
          <SlackOutlined />
        </div>
        <div>
          <Link to={"/login"}>
            <Button
            type="primary"
              icon={<LoginOutlined />}
              style={{
                color: "white",
                height: "30px",
                margin: "0 4px",
                fontWeight: "600",
                
              }}
            >
              Login
            </Button>
          </Link>

          {/* <Link to={"/register"}>
            <Button
              type="success"
              style={{ color: "white", height: "30px", fontWeight: "600", background:'#001529' }}
            >
              Register
            </Button>
          </Link> */}
        </div>
      </Header>
      <Content
        
      >
        <div className="site-layout-content">
         
        </div>
      </Content>
      
    </Layout>
  );
};

export default App;
