import React from "react";
import "./App.css";
import {  Route, Routes } from "react-router-dom";
import LearningPaths from "./components/home/LearningPaths";
import AdminHome from "./components/admin_panel/main_components/AdminHome";
import LearningPathDetails from "./components/home/LearningPathDetails";
import Main from "./components/home/Main";
import HomeLayout from "./components/home/HomeLayout";
import AdminLearningPath from "./components/admin_panel/main_components/AdminLearningPath";
import AdminModule from './components/admin_panel/main_components/AdminModule'
import Login from "./components/auth/Login";
import RequireAuth from "./components/auth/RequireAuth";
import { QueryClient } from "react-query";
import { QueryClientProvider } from 'react-query';
import Page404 from "./components/shared/404";
import UnAuthorized from "./components/shared/UnAuthorized";
import Dashboard from "./components/admin_panel/main_components/Dashboard";
import PersistLogin from "./components/auth/PersistLogin";


function App() {

  const queryClient = new QueryClient()

  const roles = {
    admin:'Admin',
    onlineStudent:'OnlineStudent'
  }
  
  return (
    <QueryClientProvider client={queryClient}>
        <div className=' box-border '>
          <Routes>


            {/* Protected Routes */}
            <Route element={<PersistLogin />} >
                <Route element={<RequireAuth allowedRole={roles.admin} />}>
                  
                  {/* admin routes */}
                  <Route path='/Admin' element={<AdminHome />}>
                    <Route path='/Admin/LearningPaths' element={<AdminLearningPath />} />
                    <Route path='/Admin/modules' element={<AdminModule />} />
                    <Route index element={<Dashboard />} />
                  </Route>


                </Route>
            </Route>


            {/* public routes */}
            <Route path='/' element={<HomeLayout />}>
              <Route path='/LearningPaths' element={<LearningPaths />} />
              <Route path='/LearningPaths/:Id' element={<LearningPathDetails />} />
              <Route index element={<Main />} />
            </Route>



            <Route path="/Login" element={<Login />}></Route>
              {/* catch all */}
              <Route path="UnAuthorized" element={<UnAuthorized />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
    </QueryClientProvider>
  )

}

export default App;
