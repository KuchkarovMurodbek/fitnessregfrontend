import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NoFound from "./Pages/NoFound";


import MainUsers from "./components/UsersComponent/MainUsers";
import UserStatistics from "./components/StatisticsComponent/UserStatistics";


function App() {


  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route  path={"/dashboard"} element={ <Dashboard />}>
          {/* <Route index path="adduser" element={<AddUser />} /> */}
          <Route path="users" element={<MainUsers />} />
          <Route path="statistics" element={<UserStatistics />} />
         
        </Route>

        <Route path="*" element={<NoFound />} />
      </Routes>
    </>
  );
}

export default App;
