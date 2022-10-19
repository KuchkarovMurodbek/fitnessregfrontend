import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  SearchOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,

  Input,
  Modal,
  Row,

  Statistic,

  Tooltip,
} from "antd";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddUserForm from "./components/AddUserForm";
import UsersTable from "./components/UsersTable";

function MainUsers() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [addUserModal, setAddUserModal] = useState(false);
  const { token } = useSelector((state) => state.auth.user)

  function handleFunction(e) {
    setQuery(e.target.value);
  }

  async function getData() {
    await axios
      .get("https://fitnessreg.herokuapp.com/api/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchUser = (data) => {
    return data.filter(
      (item) =>
        item.firstname.toLowerCase().includes(query) ||
        item.lastname.toLowerCase().includes(query)
    );
  };

  const addUsersFunction = () => {
    setAddUserModal(true);
  };
  const cancelUserModal = () => {
    setAddUserModal(false);
  };

  // const onFinish = () => {
  //   console.log('finished!');
  // };

  // const onChange = (val) => {
  //   if (4.95 * 1000 < val && val < 5 * 1000) {
  //     console.log('changed!');
  //   }
  // };
  // const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;


  const highMoney=users.filter((item)=>{
    return item.price>=100000
  })
  const lowMoney=users.filter((item)=>{
    return item.price<100000
  })

  return (
    <>
      {/* --------SEARCH USERS INPUT ROW -----------*/}
      <Row style={{ marginTop: "5px" }}>
        <Col lg={9} sm={7} md={9}>
          <Input
            value={query}
            size="large"
            placeholder="large size"
            prefix={<SearchOutlined />}
            onChange={handleFunction}
          />
        </Col>

        <Col style={{ marginLeft: "10px" }}>
          <Tooltip placement="bottom" title={"Add users"}>
            <Button
              style={{ background: "#001529", border: "none", color: "#fff" }}
              icon={<UsergroupAddOutlined />}
              size={"large"}
              onClick={addUsersFunction}
            ></Button>
          </Tooltip>
        </Col>
        <Col style={{ marginLeft: "10px" }}>
          <Tooltip placement="bottom" title={"Users count"}>
            <Badge count={users.length} color="green">
              <Avatar shape="square" icon={<UserOutlined />} size="large" />
            </Badge>
          </Tooltip>
        </Col>
      </Row>

      {/* --------Tables ROW -----------*/}
      <Row style={{ marginTop: "10px" }}>
        <Col lg={24}>
          <UsersTable data={searchUser(users)}  getData={getData}/>
        </Col>
      </Row>
      {/* --------ADD USERS FORM ROW -----------*/}
      <Modal
        title={"Add user"}
        footer={null}
        visible={addUserModal}
        onCancel={cancelUserModal}
        style={{
          top: 20,
        }}
      >
        <AddUserForm setAddUserModal={setAddUserModal} getData={getData} />
      </Modal>
       
       
      <Row gutter={16}>
      <Col span={12}>
        <Card>
          <Statistic
            title="FULL PAID"
            value={highMoney.length}
            precision={0}
            valueStyle={{
              color: '#3f8600',
            }}
            prefix={<ArrowUpOutlined />}
            suffix="users"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="NO FULL PAID"
            value={lowMoney.length}
            precision={0}
            valueStyle={{
              color: '#cf1322',
            }}
            prefix={<ArrowDownOutlined />}
            suffix="users"
          />
        </Card>
      </Col>
    </Row>
    </>
  );
}

export default MainUsers;
