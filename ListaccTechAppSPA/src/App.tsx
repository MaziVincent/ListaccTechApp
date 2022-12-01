import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import { createBrowserRouter as Router, Route, Routes , RouterProvider, createBrowserRouter} from "react-router-dom";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import AdminHome from "./components/admin_panel/main_components/AdminHome";

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element:<Home />
    },
    {
      path:'/admin', element:<AdminHome />
    }
  ])
  return (
    
      <RouterProvider router={router} /> 
  
  );
}

export default App;
