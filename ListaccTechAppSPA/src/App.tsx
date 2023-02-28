import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import {  Route, Routes } from "react-router-dom";
import LearningPaths from "./components/home/LearningPaths";
import AdminHome from "./components/admin_panel/main_components/AdminHome";
import LearningPathDetails from "./components/home/LearningPathDetails";
import HomeLayout from "./components/home/HomeLayout";
import Registeration from "./components/auth/registeration";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Path from "./components/dashboard/Path";
import Module  from "./components/dashboard/Module";
import Topic from "./components/dashboard/Topic";
import Lesson from "./components/dashboard/Lesson";
import Page404 from "./components/shared/404";
import RequireAuth from "./hooks/RequireAuth";
import UnAuthorized from "./components/shared/UnAuthorized";

function App() {

  const Roles = {
    Admin:'Admin',
    OnlineStudent:'OnlineStudent'
  }
  
  return (
    <div className="container box-border ">
      
        <Routes>
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/" element={<HomeLayout />}>
            <Route path="/LearningPaths" element={<LearningPaths />} />
            <Route path="/LearningPaths/:Id" element={<LearningPathDetails />} />
            <Route index element={<Home /> } />
          </Route>
          
      
        </Routes>

      

      </div>
    
     
  
  );
}

export default App;
