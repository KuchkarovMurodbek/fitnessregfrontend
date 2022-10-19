import { Col, Row } from 'antd';
import React from 'react'
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Full paid", 15],
  ["Partial paid", 10],
 
];

export const options = {
  title: "Users months payment",
  slices: {
    0: { color: '#077244' },
    1: { color: '#C92222' }
  }


};

function UserStatistics() {
    
  return (
    <>
    <Row>
      <Col lg={9} sm={22} md={12}>
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
      
    />
      </Col>
    </Row>
       
    </>
  )
}

export default UserStatistics