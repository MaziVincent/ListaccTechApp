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
import Landing from './components/admin_panel/main_components/Landing'
import AdminLearningPath from "./components/admin_panel/main_components/AdminLearningPath";
import AdminModule from './components/admin_panel/main_components/AdminModule'
import Login from "./components/auth/Login";

function App() {
  
  return (
    <div className='container box-border '>
      <Routes>
        <Route path='/admin' element={<AdminHome />}>
          <Route path='/admin/LearningPaths' element={<AdminLearningPath />} />
          <Route path='/admin/modules' element={<AdminModule />} />
          <Route path='/admin' element={<Landing />} />
        </Route>
        <Route path='/' element={<HomeLayout />}>
          <Route path='/LearningPaths' element={<LearningPaths />} />
          <Route path='/LearningPaths/:Id' element={<LearningPathDetails />} />
          <Route index element={<Main />} />
        </Route>



        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
  )

}

export default App;
