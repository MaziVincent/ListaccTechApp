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
import Landing from "./components/admin_panel/main_components/Landing";
import AdminLearningPath from "./components/admin_panel/main_components/AdminLearningPath";

function App() {

  const Roles = {
    Admin:'Admin',
    OnlineStudent:'OnlineStudent'
  }
  
  return (
  
    <div className=" box-border w-full ">
      
      <Routes>
        {/* Admin */}
        {/* <Route element={<RequireAuth allowedRole={Roles.Admin} />} >
          <Route path="/admin" element={<AdminHome />} />
        </Route> */}

        <Route path="/admin" element={<AdminHome />} >
          <Route index element={<Landing />} />
          <Route path="/admin/AdminLearningPath" element={<AdminLearningPath />} />
        </Route>


        <Route path="/" element={<HomeLayout />}>
          <Route path="/LearningPaths" element={<LearningPaths />} />
          <Route path="/LearningPaths/:Id" element={<LearningPathDetails />} />
          <Route index element={<Home /> } />


          {/* student paths */}
          <Route element={<RequireAuth allowedRole={Roles.OnlineStudent} />} >
            <Route path="/Dashboard" element={<Dashboard/>} />
            <Route path="/Path" element={<Path/>} />
            <Route path="/Module" element={<Module/>} />
            <Route path="/Topic" element={<Topic/>} />
            <Route path="/Lesson" element={<Lesson/>} />
          </Route>
        </Route>
        
        <Route path="/Registeration" element={<Registeration/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/404" element={<Page404/>} />
        <Route path="/UnAuthorized" element={<UnAuthorized />} />
        
    
      </Routes>

    

  </div>
      

     
    
     
  
  );
}

export default App;
