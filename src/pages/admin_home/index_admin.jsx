import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar_admin from "./navbar_admin";
import Main_admin from "./main_admin";
const Index_admin = () => {
  return (
  
      <div className="flex h-screen bg-gray-100">
        <Navbar_admin />
        <Main_admin />
      </div>

  );
};

export default Index_admin;
