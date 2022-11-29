import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import { createBrowserRouter as Router, Route, Routes , RouterProvider, createBrowserRouter} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element:<Home />
    }
  ])
  return (
    
      <RouterProvider router={router} /> 
  
  );
}

export default App;
