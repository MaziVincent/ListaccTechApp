import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import {  Route, Routes } from "react-router-dom";
import LearningPaths from "./components/home/LearningPaths";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import AdminHome from "./components/admin_panel/main_components/AdminHome";
import LearningPathDetails from "./components/home/LearningPathDetails";
import Main from "./components/home/Main";
import HomeLayout from "./components/home/HomeLayout";
import Registeration from "./components/auth/registeration";

function App() {
  
  return (
    <div className=" box-border border-4 w-full ">
      
        <Routes>
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/" element={<HomeLayout />}>
            <Route path="/LearningPaths" element={<LearningPaths />} />
            <Route path="/LearningPaths/:Id" element={<LearningPathDetails />} />
            <Route index element={<Home /> } />
          </Route>
          <Route path="/Registeration" element={<Registeration/>} />
          
      
        </Routes>

      

    </div>
    
     
  
  );
}

export default App;
