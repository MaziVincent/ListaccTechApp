import React from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";

function Home() {
  return (
    
      <div className="container pt-20 ">
        <Header />
        
            <Main />
          

        <Footer />
      </div>
    
  );
}
export default Home;
