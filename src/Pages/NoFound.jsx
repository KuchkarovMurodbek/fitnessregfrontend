import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
function NoFound() {
  const navigate = useNavigate();
  const HandleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={HandleNavigate}>
            Back Home
          </Button>
        }
      />
    </>
  );
}

export default NoFound;
