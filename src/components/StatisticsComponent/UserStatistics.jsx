import { Col, Row } from "antd";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["-", 15],
  ["+", 10],
];

export const options = {
  title: "Sum of users paid price",
  slices: {
    0: { color: "#077244" },
    1: { color: "#C92222" },
  },
};

function UserStatistics() {
  return (
    <>
      <Row>
        <Col lg={8} sm={24} md={12}>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"350px"}
          />
        </Col>
        <Col lg={8} sm={24} md={12}>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"350px"}
          />
        </Col>
      </Row>
    </>
  );
}

export default UserStatistics;
