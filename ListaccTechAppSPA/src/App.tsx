import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import {  Route, Routes } from "react-router-dom";
import LearningPaths from "./components/home/LearningPaths";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import LearningPathDetails from "./components/home/LearningPathDetails";

function App() {
  
  return (
    <div className="container box-border ">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LearningPaths" element={<LearningPaths />} />
          <Route path="/LearningPaths/:Id" element={<LearningPathDetails />} />
      
        </Routes>

      <Footer /> 

      </div>
    
     
  
  );
}

export default App;
