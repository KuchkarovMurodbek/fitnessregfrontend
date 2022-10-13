import { Alert } from 'antd';
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import LayoutDIv from "../components/LayoutDashboard/MainLayout";

function Dashboard() {
  const location = useLocation()
 
  return (
    <LayoutDIv>
      {location.pathname==='/dashboard'?
         <Alert
         message="you have entered successfully here"
         description="You can control application easily as you want here"
         type="success"
         showIcon
         closable
       />: <Outlet/>}
   
       
    </LayoutDIv>
  )
}

export default Dashboard